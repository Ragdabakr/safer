import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { BookingService } from 'app/shared/services/booking.service';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { AuthService } from 'app/shared/auth/auth.service';




// [ng2TelInputOptions]="{initialCountry: 'in'}"

const URL = 'http://localhost:3000/api/v1/image/upload-image';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {



      //Upload single images
      uploader: FileUploader = new FileUploader({
        url: URL,
        isHTML5: true
    });  
  dataForm: FormGroup;
  travellersArray: any;
  travellerForm: FormGroup;
  tours: [];
  tourDates: [];
  paymentWays = [{"name":"كاش"} , {"name":"تحويل بنكي"}];
  bookingStatus = [  'دفع بتحويل بنكي' ,'حجز بدون دفع' , 'تأكيد حجز المبلغ كامل'  ];
      //Alert
      error: boolean = false;
      alert: string;
      successAlert: string;
      success: boolean = false;
  tourForm: FormGroup;
  paymentForm: FormGroup;
  paymentWayCheck: string;
  tourPrice: any;
    adult: any;
    child: any;
    totalPrice: number;
    bookingsNumber: any;
    toursMaxSize: any;
    tourId: any;
    stopNextStep: boolean;
    selectedFile: any;
    uploadedFile: File;
    fileAvalable: boolean;
    progress: boolean;
    phoneError: boolean;
    phoneSuccess: boolean;
    adultPrice: any;
    childPrice: any;
    infantPrice: any;
    infant: any;
    userApp: string;

  constructor(private fb: FormBuilder ,private authService:AuthService,   private tourService:TourService, private bookingService:BookingService,
     private toastr:ToastrService ) { }

  ngOnInit() {
    this.userApp = this.authService.getUser();
    const input = document.querySelector("#phone");
    intlTelInput(input, {
        // any initialisation options go here
        initialCountry: "sa",   
         utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js'
    });
  
    var iti = window.intlTelInputGlobals.getInstance(input);
    iti.isValidNumber();


    this.getTours();
    this.dataForm = new FormGroup(
      {

          // travellerInfo: new FormArray([this.addtravellers()]),
         
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
                tourInfo: new FormGroup(
                  {
                 
                      tourDate: new FormControl('', [
                          Validators.required,
                      ]),
                      adult: new FormControl('', [
                          Validators.required,
                      ]),
                      child : new FormControl('', []),
                      infant: new FormControl('', []),
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
                            tourPrice: new FormControl('', [
                            ]),
                            orderStatus : new FormControl('', [
                                Validators.required,
                            ]),
                        }),  
                        }
                      );
      

          this.travellerForm = this.fb.group({
            travellerInfo: this.fb.array([this.addtravellers()]),
        });

        }

   // Start travellers Array

   addTravellerInfoButtonClick(): void {
    const travellerInfo = this.travellerForm.controls.travellerInfo as FormArray;
    this.travellersArray = travellerInfo.value;
    travellerInfo.push(this.addtravellers());
    // this.addNew = true;
}
addtravellers(): FormGroup {
    return this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        passportNo: ['',[Validators.required , Validators.pattern('(?=\\D*\\d)(?=[^A-Z]*[A-Z]).{5,12}') ]],
        age: ['', [Validators.required]],
    });
}


// Get Tours
getTours(){
  this.tourService.getTours().subscribe(
    res =>{
      let data = res['data'];
      this.tours = data.docs.filter(a=> a.active === true  && a.open === true).reverse();
      },
      err =>{
      console.log(err);
    }
  )
}
onTourChange(tourId: string): void {
  this.tourService.getTourById(tourId).subscribe((data) =>{
       const foundTour = data.data.doc.startDates;
       this.tourId = data.data.doc.id;
       this.bookingsNumber =  data.data.doc.bookings.length;
    //    console.log("this.bookingsNumber ",  this.bookingsNumber );
       this.toursMaxSize = data.data.doc.maxGroupSize;
    //    console.log(" this.toursMaxSize",   this.toursMaxSize );
       this.tourDates = foundTour.map((i) => { i.date  ; return i; });
       this.adultPrice = data.data.doc.adultPrice;
       this.childPrice = data.data.doc.childPrice;
       this.infantPrice = data.data.doc.infantPrice;

       this.adult = this.tourForm.get('tourInfo').value.adult;
       this.child = this.tourForm.get('tourInfo').value.child;
       this.infant = this.tourForm.get('tourInfo').value.infant;

       this.totalPrice = this.adultPrice * this.adult + this.childPrice *this.child + this.infantPrice *this.infant;
       this.paymentForm.patchValue({
        paymentInfo:{
            tourPrice : this.tourPrice
        }
       });
      },
      (error: HttpErrorResponse) =>{
        console.log("error" , error);
        if(error.error.message === 'You do not have permission to perform this action'){
            this.toastr.error(' ليس لديك صلاحية إضافة حجز');
           }
    }),
      err =>{
      console.log(err);
    }
}
onPaymentChange(paymentWay: string): void {
  console.log("paymentWay",paymentWay);
  this.paymentWayCheck = paymentWay;
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


    // On submit link click
    onFirstSubmit() {

      if (this.travellerForm.invalid) {
          window.scroll(0, 0); // scroll to top of page;
          this.alert = 'تأكد من تعبئة الحقول المطلوبة في الخطوة الأولي';
          this.validateAllFormFields(this.travellerForm); // Triger travellerForm validation
          this.error = true;
          setTimeout(() => {
              this.error = false;
          }, 8000);
      }
  }
  // // On submit link click
  onSecondSubmit() {

      if (this.dataForm.invalid) {
          window.scroll(0, 0); // scroll to top of page;
          this.alert = 'تأكد من تعبئة الحقول المطلوبة في الخطوة الثانية';
          this.validateAllFormFields(this.dataForm); // Triger dataForm validation
          this.error = true;
          setTimeout(() => {
              this.error = false;
          }, 8000);
      }
  }
    // // On submit link click
    onThirdSubmit() {
                                    
        if(this.toursMaxSize === this.bookingsNumber ){
           const  data = {
               completed:true
            }
            this.bookingService.updateTourCompleted(this.tourId ,data).subscribe((data) =>{
                this.toastr.error('لا يمكن استكمال عملية الحجز لاكتمال الرحلة الرجاء اختيار  رحلة أخري ');
            });
            this.stopNextStep = true;
        } else {
        // console.log("tourInfoooo",this.tourForm.get('tourInfo').value.adult);
        this.adult = this.tourForm.get('tourInfo').value.adult;
        this.child = this.tourForm.get('tourInfo').value.child;
        this.infant = this.tourForm.get('tourInfo').value.infant;
        this.totalPrice = this.adultPrice * this.adult + this.childPrice *this.child + this.infantPrice *this.infant;
        this.paymentForm.patchValue({
            paymentInfo:{
                totalPrice : this.totalPrice
            }
           });
        }
        
      if (this.tourForm.invalid) {
      
          window.scroll(0, 0); // scroll to top of page;
          this.alert = 'تأكد من تعبئة الحقول المطلوبة في الخطوة الثالثة';
          this.validateAllFormFields(this.tourForm); // Triger postForm validation
          this.error = true;
          setTimeout(() => {
              this.error = false;
          }, 8000);
      }
  }
  onFourthSubmit() {

      if (this.paymentForm.invalid) {
          window.scroll(0, 0); // scroll to top of page;
          this.alert = 'تأكد من تعبئة الحقول المطلوبة في الخطوة الرابعة';
          this.validateAllFormFields(this.paymentForm); // Triger postForm validation
          this.error = true;
          setTimeout(() => {
              this.error = false;
          }, 8000);
      }
      else {
        var inputs = document.querySelector('#phone');
        var iti = window.intlTelInputGlobals.getInstance(inputs);
        var phoneNumber  = iti.getNumber(intlTelInputUtils.numberFormat.E164);
        this.dataForm.patchValue({
          contactInfo: {
          phone: phoneNumber,
        },
         });
          const stepsData = {
            contactInfo: this.dataForm.get('contactInfo').value,
            tourName: this.tourForm.get('tourName').value,
            tourInfo: this.tourForm.get('tourInfo').value,
            paymentInfo: this.paymentForm.get('paymentInfo').value,
            travellerInfo: <FormArray>this.travellerForm.controls["travellerInfo"].value,
            }
        //   console.log('stepsData', stepsData);

          this.bookingService.createBooking(stepsData).subscribe((data) =>{
             
                  window.scroll(0, 0); // scroll to top of page;
                  this.successAlert = 'تم اضافة الحجز بنجاح ';
                  this.success = true;
                  setTimeout(() => {
                      this.success = true;
                      window.location.href = '/full-layout/full-pages/booking';
                  }, 2000);
              },
                  (error: HttpErrorResponse) =>{
                    //   if(error.error.errors[0].title === "Invalid tour name!"){
                    //       this.toastr.error('اسم الرحلة مستخدم من قبل');
                    //   }
              });
         }
        
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

  //validate nested form groups
  get customerInfo() {
    return this.dataForm.controls.contactInfo as FormGroup;
  };
  //validate array forms
  get travellerInfo(){
    return this.travellerForm.controls.travellerInfo as FormArray;
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



}
