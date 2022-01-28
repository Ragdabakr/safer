import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'app/shared/services/booking.service';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { HttpErrorResponse } from '@angular/common/http';




// [ng2TelInputOptions]="{initialCountry: 'in'}"

const URL = 'http://localhost:3000/api/v1/image/upload-image';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  //Upload single images
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
}); 
  bookings: any;
  detailsBookingDialog: boolean;
  booking: any;
  editBookingDialog: boolean;
  travellerForm: FormGroup;
  editbooking: any;
  bookingId: any;
  editTravellerdialog:boolean;
  bookingTraveller: boolean;
  traveller: any;
  travellerInfo: FormArray;
  dataForm: FormGroup;
  paymentForm: FormGroup;
  tourForm: FormGroup;
  tourDates: any;
  tourPrice: any;
  paymentWayCheck: string;
  tours: [];
  adult: any;
  child: any;
  totalPrice: number;
  paymentWays = [{"name":"كاش"} , {"name":"تحويل بنكي"}];
  bookingStatus = [  'دفع بتحويل بنكي' ,'حجز بدون دفع', 'تأكيد حجز المبلغ كامل' ,'الغاء الحجز' ];
  display: boolean = false;
  closeDialog:boolean = false;
  openPaymentForm: boolean = false;
  phoneError: boolean;
  phoneSuccess: boolean;

  selectedFile: any;
  uploadedFile: File;
  fileAvalable: boolean;
  progress: boolean;
  invoice: any;
  invoiceId: any;
  infant: any;
  tour: any;
  adultPrice: any;
  childPrice: any;
  infantPrice: any;

  constructor(
    private fb: FormBuilder ,  private tourService:TourService, private bookingService:BookingService,
    private toastr:ToastrService , private invoiceService:InvoiceService) { }

  ngOnInit() {
    this.getBookings();
    this.getTours();
    //  this.getTourDates();
    this.travellerForm = this.fb.group({
      travellerInfo: this.fb.array([this.addtravellers()]),
  });

  this.dataForm = new FormGroup(
    {
        contactInfo: new FormGroup(
            {
                fullName: new FormControl('', [
                    Validators.required,
                ]),
                phone: new FormControl('', [
                    Validators.required,
                ]),
                email: new FormControl('', [
                    Validators.required,
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
                ]),
                address : new FormControl('', [
                
                ]),
            }), 
          }
        );
    
        this.tourForm = new FormGroup({ 
          tourName: new FormControl('', [
            Validators.required,
        ]),
        tourId: new FormControl('', [
          Validators.required,
        ]),
          tourInfo: new FormGroup(
            {
                
                tourDate: new FormControl('', [
                    Validators.required,
                ]),
                adult: new FormControl('', [
                    Validators.required,
                ]),
                child : new FormControl('', []),
                infant : new FormControl('', [ ]),
            }),  
            }
          );

          this.paymentForm = new FormGroup(
            {
            
                paymentInfo: new FormGroup(
                  {
                    paymentWay: new FormControl('', [
                          Validators.required,
                      ]),
                      bankPaymentPhoto: new FormControl('', [
                      ]),
                     
                      totalPrice: new FormControl('', [
                         
                      ]),
                      orderStatus : new FormControl('', [
                          Validators.required,
                      ]),
                  }),  
                  }
                );

                const input = document.querySelector("#phone");
                intlTelInput(input, {
                    // any initialisation options go here
                    initialCountry: "sa",   
                     utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js'
                });
              
                var iti = window.intlTelInputGlobals.getInstance(input);
                iti.isValidNumber();
  }

  // Get Tours
getTours(){
  this.tourService.getTours().subscribe(
    res =>{
      let data = res['data'];
      this.tours = data.docs;
      console.log('tours >>>',this.tours);
      },
      err =>{
      console.log(err);
    }
  )
}

  // Get Tours Dtes
getTourDates(): void {
  const tourId = this.tourForm.get('tourInfo').value.tourName;
  this.tourService.getTourById(tourId).subscribe((data) =>{
     const foundTour = data.data.doc.startDates;
       this.tourDates = foundTour.map((i) => { i.date  ; return i; });
       this.tourPrice = data.data.doc.price;
       this.paymentForm.patchValue({
        paymentInfo:{
            tourPrice : this.tourPrice
        }
       });
      },
      err =>{
      console.log(err);
    }
  )
}

onPaymentChange(paymentWay: string): void {
  this.paymentWayCheck = paymentWay;
}


     // Start travellers Array

  addtravellers(): FormGroup {
      return this.fb.group({
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          passportNo: ['',[Validators.required , Validators.pattern('(?=\\D*\\d)(?=[^A-Z]*[A-Z]).{5,12}') ]],
          age: ['', [Validators.required]],
      });
  }
      // Get Tours
    getBookings(){
      this.bookingService.getBookings().subscribe(
        res =>{
          let data = res['data'];
          this.bookings = data.docs.reverse();
           console.log('bookings >>>',this.bookings);
          },
          err =>{
          console.log(err);
        }
      )
    }
    
      // Get Booking details
    detailsBooking(booking){
      this.booking = booking;
      console.log("this.boooking" , this.booking );
      this.detailsBookingDialog = true;
    }
   

    editBooking(Booking){
      this.editbooking = Booking;
      this.bookingId = Booking._id;
      this.editBookingDialog = true;
      this.editContactForm(Booking);
      this.editTourInfo(Booking);
      this.editPaymentInfo(Booking);
    }

     // Edit travellerInfo array

    editBookingTraveller(traveller){
      this.traveller = traveller;
      this.bookingTraveller = true;
      this.travellerForm.patchValue({
        travellerInfo: [{
        firstName:this.traveller.firstName,
        lastName:this.traveller.lastName,
        passportNo:this.traveller.passportNo,
        age:this.traveller.age,
          }],
       });
    }

  
    editTavellerButton(travellerForm){
      if (this.travellerForm.invalid) {
        this.validateAllFormFields(this.travellerForm); // Triger postForm validation  
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
    } else {
      this.bookingService.editBooking(this.bookingId ,  travellerForm.value ,this.paymentForm).subscribe(
        () => {
            this.toastr.success('تم تحديث  الحجز بنجاح');
            this.getBookings();
        },
        (error: HttpErrorResponse) =>{
          if(error.error.message === 'You do not have permission to perform this action'){
              this.toastr.error(' ليس لديك صلاحية تعديل حجز');
              this.getBookings();
             }
      });
    }
  }

  cancelEditTravellerInfo(){
    this.bookingTraveller = false;
  }
  

    // Edit contactInfo 

    editContactForm(Booking){
      this.dataForm.patchValue({
        contactInfo: {
        fullName: Booking.contactInfo.fullName,
        email: Booking.contactInfo.email,
        phone: Booking.contactInfo.phone,
        address: Booking.contactInfo.address,
      },
       });
    }

    editContactInfoButton(dataForm){
      if (this.dataForm.invalid) {
        this.validateAllFormFields(this.dataForm);
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
    }else{
      var inputs = document.querySelector('#phone');
      var iti = window.intlTelInputGlobals.getInstance(inputs);
      var phoneNumber  = iti.getNumber(intlTelInputUtils.numberFormat.E164);
      this.dataForm.patchValue({
        contactInfo: {
        phone: phoneNumber,
      },
       });
      this.bookingService.editBooking(this.bookingId ,  dataForm.value, this.paymentForm.value ).subscribe(
        () => {
            this.toastr.success('تم تحديث  الحجز بنجاح');
            this.getBookings();
        },
        (error: HttpErrorResponse) =>{
          if(error.error.message === 'You do not have permission to perform this action'){
              this.toastr.error(' ليس لديك صلاحية تعديل حجز');
              this.getBookings();
             }
      });
    }
  }

   // Edit tour Info 

    editTourInfo(Booking){
      this.tourForm.patchValue({
        tourId: Booking.tourName.name,
        tourName: Booking.tourName.id,
        tourInfo: {
          tourDate: Booking.tourInfo.tourDate,
          adult: Booking.tourInfo.adult,
          child: Booking.tourInfo.child,
          infant: Booking.tourInfo.infant,
      },
       });


       this.tourService.getTourById(Booking.tourName.id).subscribe((tour) => {
        this.tour = tour.data.doc;
        this.adultPrice = tour.data.doc.adultPrice;
        this.childPrice = tour.data.doc.childPrice;
        this.infantPrice = tour.data.doc.infantPrice;
        console.log("tour" , this.tour);
        console.log("this.adultPrice" , this.adultPrice);
      });

    }



    editTourInfoButton(tourForm){

      console.log("tourForm" , tourForm.value);

      this.adult = this.tourForm.get('tourInfo').value.adult;
      this.child = this.tourForm.get('tourInfo').value.child;
      this.infant = this.tourForm.get('tourInfo').value.infant;

  
      this.totalPrice = this.adultPrice * this.adult + this.childPrice *this.child + this.infantPrice *this.infant;
 
       this.tourForm.patchValue({
       tourInfo:{
            adult: this.adult,
            child: this.child,
            infant: this.infant,
        }
       
       });
      this.paymentForm.patchValue({
       paymentInfo:{
           totalPrice: this.totalPrice,
       }
      
      });

      this.bookingService.editBooking(this.bookingId ,  tourForm.value , this.paymentForm.value ).subscribe(
        () => {
            this.toastr.success('تم تحديث  الحجز بنجاح');
            this.getBookings();
        },
        (error: HttpErrorResponse) =>{
          if(error.error.message === 'You do not have permission to perform this action'){
              this.toastr.error(' ليس لديك صلاحية تعديل حجز');
              this.getBookings();
             }
            
      });

      
    }

    onAdultChange(event){
      this.paymentForm.patchValue({
        paymentInfo: {
          paymentWay: '',
          orderStatus: '',
      },
       });
      this.openPaymentForm = true;
    }
    onChildChange(event){
      this.paymentForm.patchValue({
        paymentInfo: {
          paymentWay: '',
          orderStatus: '',
      },
       });
       this.openPaymentForm = true;
      
    }

      // Edit payment Info 

    editPaymentInfo(Booking){
      this.paymentForm.patchValue({
        paymentInfo: {
          paymentWay: Booking.paymentInfo.paymentWay,
          downPayment: Booking.paymentInfo.downPayment,
          totalPrice: Booking.paymentInfo.totalPrice,
          orderStatus: Booking.paymentInfo.orderStatus,
          bankNo: Booking.paymentInfo.bankNo,
      },
       });
    }

    editPaymentInfoButton(paymentForm){

      if (this.paymentForm.invalid) {
        this.validateAllFormFields(this.paymentForm); // Triger postForm validation  
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
    } else {
     
      if(this.paymentForm.value.paymentInfo.orderStatus ==="الغاء الحجز"){
   
        this.paymentForm.patchValue({
          paymentInfo:{
              totalPrice: 0,
          }
        });
     
        this.bookingService.editPaymentBooking(this.bookingId ,  paymentForm.value  , this.tourForm.value).subscribe(
          () => {

              this.toastr.success('تم تحديث  الحجز بنجاح');
              this.getBookings();
              this.openPaymentForm = false;
          },
          (error: HttpErrorResponse) =>{
            if(error.error.message === 'You do not have permission to perform this action'){
                this.toastr.error(' ليس لديك صلاحية تعديل حجز');
                this.openPaymentForm = false;
                this.getBookings();
               }
        });

      
      }else{
        console.log("else reservation");
        this.bookingService.editPaymentBooking(this.bookingId ,  paymentForm.value  , this.tourForm.value).subscribe(
          () => {
              this.toastr.success('تم تحديث  الحجز بنجاح');
              this.getBookings();
              this.openPaymentForm = false;
          },
          (error: HttpErrorResponse) =>{
            if(error.error.message === 'You do not have permission to perform this action'){
                this.toastr.error(' ليس لديك صلاحية تعديل حجز');
                this.openPaymentForm = false;
                this.getBookings();
               }
        });
      }
    }
  }


// hide edit booking dialog  with conditions
 close(){
if(this.bookingTraveller = true){
  this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
  this.bookingTraveller = false;
  this.editBookingDialog = false;
}
  else if (this.paymentForm.invalid) {
    this.validateAllFormFields(this.paymentForm); // Triger postForm validation  
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
    this.editBookingDialog = true;
  }
  else{
  this.editBookingDialog = false;
   }
 }


   // Delete booking
  deleteBooking(booking){
    this.bookingService.deleteBooking(booking._id, booking.tourName.id ).subscribe(
      () => {
          this.toastr.success('تم حذف الحجز بنجاح');
          this.getBookings();
      },
      (error: HttpErrorResponse) =>{
        console.log("error" , error);
        if(error.error.message === 'You do not have permission to perform this action'){
            this.toastr.error(' ليس لديك صلاحية حذف حجز');
           }
    });
  }



      // To validate all form fields, we need to iterate throughout all form controls:
      validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
              control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
              this.validateAllFormFields(control);
          }
      });
  }

/// phone number validation
hasError(event){
  var inputs = document.querySelector('#phone');
  var iti = window.intlTelInputGlobals.getInstance(inputs);
  iti.isValidNumber();
  if( iti.isValidNumber() === false){
     this.phoneError = true;
     this.phoneSuccess = false;
  }else{
      this.phoneSuccess = true;
      this.phoneError = false;
  } 
}

  //validate nested form groups
  get customerInfo() {
    return this.dataForm.controls.contactInfo as FormGroup;
  };
  //validate array forms
  get travellerInfo2(){
    return this.travellerForm.controls.travellerInfo as FormArray;
  }


  // Image upload  ReadAsBase64

  ReadAsBase64(file): Promise<any> {
    const reader = new FileReader();
    const fileValue = new Promise((resolve, reject) => {
        reader.addEventListener('load', () => {
            resolve(reader.result);
        });

        reader.addEventListener('error', (event) => {
            reject(event);
        });
        reader.readAsDataURL(file);
    });
    return fileValue;
}  

  //upload single image

OnFileSelect(event) {

  const file: File = event[0];
  this.uploadedFile = file;
  const sizeImage = file.size;
  if (sizeImage > 10000000) {
      this.fileAvalable = false;
      alert('File is too big!');
      const fileImage = '';
      this.progress = false;
      this.ReadAsBase64(fileImage).then(result => {
          this.selectedFile = result;
      }).catch(err => console.log(err));
  } else {
      this.ReadAsBase64(file).then(result => {
          this.selectedFile = result;
          this.paymentForm.patchValue({
              paymentInfo:{
                  bankPaymentPhoto: this.selectedFile
              }
          });
      }).catch(err => console.log(err));
  }

}
//print function
printReaet(booking){
  const bookingId = booking.id;
  const data = {
    bookingInfo : bookingId
  }
  this.invoiceService.createInvoice(data).subscribe(
    res =>{
      let data = res['data'];
      this.invoiceId = data.data._id
      window.location.href = `/full-layout/full-pages/invoice/${this.invoiceId}`;
      },
      (error: HttpErrorResponse) =>{
        if(error.error.message === 'You do not have permission to perform this action'){
            this.toastr.error(' ليس لديك صلاحية طباعة فاتورة');
           }
    });
}




}
