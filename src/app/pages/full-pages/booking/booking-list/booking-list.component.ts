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
import { AuthService } from 'app/shared/auth/auth.service';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';




// [ng2TelInputOptions]="{initialCountry: 'in'}"

const URL = 'http://localhost:3000/api/v1/image/upload-image';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  providers: [DatePipe]
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
  editBookingDialog: boolean = false;
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
  paymentWays = [{"name":"نقدا"} , {"name":"أجل"}];
  bookingStatus = [  'حجز جزء من المبلغ' ,'حجز بدون دفع', 'تأكيد حجز المبلغ كامل' ,'الغاء الحجز' ];
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
  user: any;

  constructor(
    private fb: FormBuilder ,  private tourService:TourService, private bookingService:BookingService,private authService:AuthService ,
    private toastr:ToastrService , private invoiceService:InvoiceService , private datePipe: DatePipe) { }

  ngOnInit() {
    this.user =this.authService.getUser();
    this.getBookings();
    this.getTours();
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
                     
                      totalPrice: new FormControl('', [
                         
                      ]),
                      orderStatus : new FormControl('', [
                          Validators.required,
                      ]),
                      receivedAmount:  new FormControl('0', [
                        Validators.required,
                    ]),
                    remainingAmount: new FormControl('0'),
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
               // this.tourForm.controls.tourDate.setValue(formatDate(date,'yyyy-MM-dd','en'));
               
  }


// ---------------- Get Tours----------------
getTours(){
  this.tourService.getTours().subscribe(
    res =>{
      let data = res['data'];
      this.tours = data.docs;
      },
      err =>{
        this.toastr.error('يوجد خطأ ما');
    }
  )
}


 // ---------------- Get TourDates----------------

getTourDates(): void {
  const tourId = this.tourForm.get('tourInfo').value.tourName;
  this.tourService.getTourById(tourId).subscribe((data) =>{
     const foundTour = data.data.doc.startDates;
       const tourDates = foundTour.map((i) => { i.date  ; return i; });
       this.tourDates = this.datePipe.transform( tourDates, 'dd-MM-yyyy'),
       //console.log(" this.tourDates" ,  this.tourDates);
       this.tourPrice = data.data.doc.price;
       this.paymentForm.patchValue({
        paymentInfo:{
            tourPrice : this.tourPrice,
        },
        tourInfo:{
          tourDate:this.tourDates
        }
       });
      },
      err =>{
        this.toastr.error('يوجد خطأ ما');
    }
  )
}

 // ---------------- On Bayment Change----------------

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

   // ---------------- Get Booking ----------------  

    getBookings(){
      this.bookingService.getBookings().subscribe(
        res =>{
          let data = res['data'];
          this.bookings = data.docs.reverse();
          },
          err =>{
            this.toastr.error('يوجد خطأ ما');
        }
      )
    }
    
      
    // ---------------- Get Booking details----------------

    detailsBooking(booking){
      this.booking = booking;
     // console.log("this.boooking" , this.booking );
      this.detailsBookingDialog = true;
    }
   
   // ---------------- Edit Booking----------------

    editBooking(Booking){
      this.editbooking = Booking;
      this.bookingId = Booking._id;
      this.editBookingDialog = true;
      this.editPaymentInfo(Booking);
    }


   // ---------------- Edit payment Info ----------------
   
    editPaymentInfo(Booking){
      this.paymentForm.patchValue({
        paymentInfo: {
          paymentWay: Booking.paymentInfo.paymentWay,
          downPayment: Booking.paymentInfo.downPayment,
          totalPrice: Booking.paymentInfo.totalPrice,
          orderStatus: Booking.paymentInfo.orderStatus,
          bankNo: Booking.paymentInfo.bankNo,
          receivedAmount: Booking.paymentInfo.receivedAmount,
          remainingAmount: Booking.paymentInfo.remainingAmount,
          
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

             this.editBookingDialog = false;
          },
          (error: HttpErrorResponse) =>{
            if(error.error.message === 'You do not have permission to perform this action'){
                this.toastr.error(' ليس لديك صلاحية تعديل حجز');
                this.openPaymentForm = false;
                this.getBookings();
               }
        });

      
      }else{
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


  // ---------------- Hide edit booking dialog  with conditions----------------
 close(){
if (this.paymentForm.invalid) {
    this.validateAllFormFields(this.paymentForm); // Triger postForm validation  
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
    this.editBookingDialog = true;
  }
  else{
  this.editBookingDialog = false;
   }
 }


   // ---------------- Delete booking----------------
  deleteBooking(booking){
    this.bookingService.deleteBooking(booking._id, booking.tourName.id ).subscribe(
      () => {
          this.toastr.success('تم حذف الحجز بنجاح');
          this.getBookings();
      },
      (error: HttpErrorResponse) =>{
        if(error.error.message === 'You do not have permission to perform this action'){
            this.toastr.error(' ليس لديك صلاحية حذف حجز');
           }else{
            this.toastr.error('يوجد خطأ ما');
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


// ---------------- Phone Number Validation----------------

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


// ---------------- Create new tour----------------
createNewBooking(){
  setTimeout(() => {
    window.location.href = `/full-layout/full-pages/createBooking`;
  }, 1000);
}


// ---------------- Get Reset----------------
printReaet(booking){
  this.invoiceService.createInvoice(booking).subscribe(
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
