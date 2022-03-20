
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { HotelService } from 'app/shared/services/hotel.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cancel-hotel',
  templateUrl: './cancel-hotel.component.html',
  styleUrls: ['./cancel-hotel.component.scss'],
  providers: [DatePipe]
})
export class CancelHotelComponent implements OnInit {
  tickets = [];

  ticketsArray = [];
  ticketValue: any[];
  ticketNumber: any[];
  cancelType = null;
  hotelForm: FormGroup;

  visaValue: any;
  visa: any;
  hotelsArray: any;
  user: string;
  hotelsBooking: any;
  bookings: any;
  hotelValue: any;

  constructor(private authService:AuthService ,private datePipe: DatePipe,private flightTicketsService: FlightTicketsService,private hotelService: HotelService,private toastr:ToastrService ,private fb: FormBuilder ,) { }

  ngOnInit( ) {
    this.getHotels();
    this.user =this.authService.getUser();
    
   this.hotelForm = new FormGroup(
    {
      number: new FormControl(''),
            bookingFrom: new FormControl('', [ Validators.required,]),
            bookingTo: new FormControl('', [ Validators.required,]),
            paymentMethod: new FormControl('', [ Validators.required,]),
            destination: new FormControl('', [ Validators.required,]),
            arrivalDate: new FormControl('', [ Validators.required,]),
            departureDate: new FormControl('', [ Validators.required,]),
            adultNumber: new FormControl('', [ Validators.required,]),
            childNumber: new FormControl('', [ Validators.required,]),
            hotelName:new FormControl('', [ Validators.required,]),
            notes: new FormControl('', [ Validators.required,]),

            totalNetSellingPrice: new FormControl(''),
            totalNetCostPrice: new FormControl(''),
            totalNetComm: new FormControl(''),
            totalReceivedAmount: new FormControl(''),
            totalRemainingAmount: new FormControl(''),

            bookingUser: new FormControl(''),
            bookingTime: new FormControl(''),

            travellers: new FormArray([this.addTraveller()]),
            refundType:new FormControl('', [ Validators.required,]),
            totalRefundNetCostPrice: new FormControl('', [ Validators.required,]),
            totalRefundNetSellingPrice: new FormControl('', [ Validators.required,]),
            totalRefundNetComm: new FormControl('0', [ Validators.required,]),
            fine: new FormControl('', [ Validators.required,]),
     }
   );

  }

  getHotels(){
    this.hotelService.getHotelsList().subscribe({
      next: response => {
          this.hotelsBooking = response.data.docs.reverse().filter(a => a.cancel  === false );
      },
      error: err => {
          console.log(err);
      }
  });
}

addTraveller(): FormGroup {
  return this.fb.group({
      guestName: ['', [Validators.required]],
      roomType: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      costPrice: ['', [Validators.required]],
      sellingPrice: ['', [Validators.required]],
      comm: ['', [Validators.required]],
      netCost: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      netComm: ['',],
      totalPrice: ['', [Validators.required]],
      receivedAmount: ['', [Validators.required]],
      remainingAmount: ['', [Validators.required]],

  });
}

onHotelNumberSelected(event){
  this.hotelService.getHotelsList().subscribe({
    next: response => {
      const x =  event.target.value.slice(2);
      const hotelNumber =  parseInt(x.slice(1));
        this.bookings = response.data.docs;
        this.hotelValue =  this.bookings.filter(a => a.number  === hotelNumber );
        this.patchFormValues(this.hotelValue);
        this.hotelsArray = this.hotelValue[0].travellers;
    },
    error: err => {
        console.log(err);
    }
  });
}



patchFormValues(visaValue){
  this.visa = visaValue;
    this.hotelForm.patchValue({
       bookingFrom :  this.visa[0].bookingFrom.name,
       bookingTo : this.visa[0].bookingTo.name,
       paymentMethod : this.visa[0].paymentMethod,
       destination : this.visa[0].destination,
       arrivalDate : this.datePipe.transform(this.visa[0].arrivalDate, 'dd-MM-yyyy'),
       departureDate : this.datePipe.transform(this.visa[0].departureDate, 'dd-MM-yyyy'),
       hotelName : this.visa[0].hotelName.name,
       number : this.visa[0].number,

   });
 }

 checkCheckBoxvalue(event){
 //console.log("checkCheckBoxvalue >>> " , event.target.value);

 if(event.target.value === "withComm"){
  this.hotelForm.patchValue({
    refundType : "withComm",
    totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.visa[0].totalReceivedAmount,
    totalRefundNetComm : this.visa[0].totalNetComm,
    fine:0
  });
 }
 
 if(event.target.value === "noComm"){
  this.hotelForm.patchValue({
    refundType : "noComm",
    totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.visa[0].totalReceivedAmount - this.visa[0].totalNetComm ,
    totalRefundNetComm : 0,
    fine:0
  });
 }
 
 if(event.target.value === "fineWithComm"){
   const fine = this.hotelForm.get('fine').value;
    if(!fine){
       this.toastr.error('الرجاء ادخال قيمة الغرامة ');
       this.cancelType = null;
    }else{
      this.hotelForm.patchValue({
        refundType : "fineWithComm",
        totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice - fine,
        totalRefundNetSellingPrice : this.visa[0].totalReceivedAmount - fine ,
        totalRefundNetComm : this.visa[0].totalNetComm,
        fine:fine
      });
      }
}
 

 if(event.target.value === "fineNoComm"){
  const fine = this.hotelForm.get('fine').value;
    if(!fine){
      this.toastr.error('الرجاء ادخال قيمة الغرامة ');
      this.cancelType = null;
    }else{
    this.hotelForm.patchValue({
      refundType : "fineWithComm",
      totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice - fine,
      totalRefundNetSellingPrice : (this.visa[0].totalReceivedAmount - this.visa[0].totalNetComm) -fine ,
      totalRefundNetComm : 0,
      fine:fine
    });
    }
   }
}


submitCancelHotel(hotelForm){
  if(!this.hotelForm.get('number').value ){
    this.toastr.error('الرجاء التأكد من اختيار رقم الحجز');
  }
  else if(!this.hotelForm.get('notes').value ){
    this.toastr.error(' الرجاء التأكد من كتابة الملاحظات المطلوبة');
  }
  else if(!this.cancelType){
    this.toastr.error('الرجاء التأكد من اختيار احدي خيارات استرجاع التأشيرة');
  }
  else if(!this.hotelForm.get('totalRefundNetSellingPrice').value  || !this.hotelForm.get('totalRefundNetCostPrice').value ){
    this.toastr.error(' الرجاء التأكد من  ملئ الحقول المطلوبة المطلوبة');
  }
  
  else {
  this.hotelForm.patchValue({
    bookingFrom :  this.visa[0].bookingFrom,
    bookingTo : this.visa[0].bookingTo,
});
  this.hotelService.cancelHotel(hotelForm.value).subscribe(
    res =>{
      this.hotelForm.reset();
      this.toastr.success('تم الالغاء بنجاح ');
      setTimeout(() => {
        window.location.href = '/full-layout/full-pages/bookingHotels';
      }, 1000);
 },
      err =>{
      console.log(err);
    }
  )
 
 }
}
}
