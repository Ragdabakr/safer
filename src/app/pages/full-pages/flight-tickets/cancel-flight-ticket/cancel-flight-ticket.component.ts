import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cancel-flight-ticket',
  templateUrl: './cancel-flight-ticket.component.html',
  styleUrls: ['./cancel-flight-ticket.component.scss'],
  providers: [DatePipe]
})
export class CancelFlightTicketComponent implements OnInit {
  tickets = [];
  flightTicketForm: FormGroup;
  ticket;
  ticketsArray = [];
  ticketValue: any[];
  ticketNumber: any[];
  cancelType = null;
  user: any;

  constructor(private authService:AuthService ,private datePipe: DatePipe,private flightTicketsService: FlightTicketsService,private toastr:ToastrService ,private fb: FormBuilder ,) { }

  ngOnInit( ) {
    this.getTickets();
    this.user = this.authService.getUser();
   this.flightTicketForm = new FormGroup(
    {
      number: new FormControl(''),
            bookingFrom: new FormControl('', [ Validators.required,]),
            bookingTo: new FormControl('', [ Validators.required,]),
       
            ratio: new FormControl('', [ Validators.required,]),
            paymentMethod: new FormControl('', [ Validators.required,]),
            departureDate: new FormControl('', [ Validators.required,]),
            destination: new FormControl('', [ Validators.required,]),
       
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

  getTickets(){
    this.flightTicketsService.getFlightTicketsList().subscribe({
      next: response => {
          this.tickets = response.data.docs.reverse().filter(a => a.cancel  === false );
          //console.log("tickets >>>" ,this.tickets);
      },
      error: err => {
          console.log(err);
      }
  });
}

addTraveller(): FormGroup {
  return this.fb.group({
      pnrNumber: ['', [Validators.required]],
      travellerFirstName: ['', [Validators.required]],
      travellerLastName: ['', [Validators.required]],
      travellerType: ['', [Validators.required]],
      passportNumber: ['', [Validators.required]],
      // ticketvatPrice:  ['', [Validators.required]],
      ticketCostPrice: ['', [Validators.required]],
      ticketSellingPrice: ['', [Validators.required]],

      comm: ['', [Validators.required]],
      netCost: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      netComm: ['', [Validators.required]],
      totalPrice: ['', [Validators.required]],

      receivedAmount: ['', [Validators.required]],
      remainingAmount: ['', [Validators.required]],

  });
  
}

onTicketNumberSelected(event){

  this.flightTicketsService.getFlightTicketsList().subscribe({
    next: response => {
      const x =  event.target.value.slice(2);
      const ticketNumber =  parseInt(x.slice(1));
      //console.log("x3 >>> " , ticketNumber);
      // console.log("event.target.value >>> " , event.target.value);
        this.tickets = response.data.docs;
        this.ticketValue =  this.tickets.filter(a => a.number  === ticketNumber );
        this.patchFormValues(this.ticketValue);
        this.ticketsArray = this.ticket[0].travellers;
    },
    error: err => {
        console.log(err);
    }
  });
}



patchFormValues(ticketValue){
  this.ticket = ticketValue;
    this.flightTicketForm.patchValue({
       bookingFrom :  this.ticket[0].bookingFrom.name,
       bookingTo : this.ticket[0].bookingTo.name,
       ratio : this.ticket[0].ratio,
       paymentMethod : this.ticket[0].paymentMethod,
       departureDate :  this.datePipe.transform(this.ticket[0].departureDate, 'dd-MM-yyyy'),
       destination : this.ticket[0].destination,
       number : this.ticket[0].number,

   });
 }

 checkCheckBoxvalue(event){
 //console.log("checkCheckBoxvalue >>> " , event.target.value);

 if(event.target.value === "withComm"){
  this.flightTicketForm.patchValue({
    refundType : "withComm",
    totalRefundNetCostPrice :  this.ticket[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.ticket[0].totalReceivedAmount,
    totalRefundNetComm : this.ticket[0].totalNetComm,
    fine:0
  });
 }
 
 if(event.target.value === "noComm"){
  this.flightTicketForm.patchValue({
    refundType : "noComm",
    totalRefundNetCostPrice :  this.ticket[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.ticket[0].totalReceivedAmount - this.ticket[0].totalNetComm ,
    totalRefundNetComm : 0,
    fine:0
  });
 }
 
 if(event.target.value === "fineWithComm"){
   const fine = this.flightTicketForm.get('fine').value;
    if(!fine){
       this.toastr.error('الرجاء ادخال قيمة الغرامة ');
       this.cancelType = null;
    }else{
      this.flightTicketForm.patchValue({
        refundType : "fineWithComm",
        totalRefundNetCostPrice :  this.ticket[0].totalNetCostPrice - fine,
        totalRefundNetSellingPrice : this.ticket[0].totalReceivedAmount - fine ,
        totalRefundNetComm : this.ticket[0].totalNetComm,
        fine:fine
      });
      }
}
 

 if(event.target.value === "fineNoComm"){
  const fine = this.flightTicketForm.get('fine').value;
    if(!fine){
      this.toastr.error('الرجاء ادخال قيمة الغرامة ');
      this.cancelType = null;
    }else{
    this.flightTicketForm.patchValue({
      refundType : "fineWithComm",
      totalRefundNetCostPrice :  this.ticket[0].totalNetCostPrice - fine,
      totalRefundNetSellingPrice : (this.ticket[0].totalReceivedAmount - this.ticket[0].totalNetComm) -fine ,
      totalRefundNetComm : 0,
      fine:fine
    });
    }
   }
}


 submitCancelFlightTicket(flightTicketForm){
  if(!this.flightTicketForm.get('number').value ){
    this.toastr.error('الرجاء التأكد من اختيار رقم الحجز');
  }
  else if(!this.flightTicketForm.get('notes').value ){
    this.toastr.error(' الرجاء التأكد من كتابة الملاحظات المطلوبة');
  }
  else if(!this.cancelType){
    this.toastr.error('الرجاء التأكد من اختيار احدي خيارات استرجاع التذكرة');
  }
  else if(!this.flightTicketForm.get('totalRefundNetSellingPrice').value  || !this.flightTicketForm.get('totalRefundNetCostPrice').value ){
    this.toastr.error(' الرجاء التأكد من  ملئ الحقول المطلوبة المطلوبة');
  }
  
  else {
  this.flightTicketForm.patchValue({
    bookingFrom :  this.ticket[0].bookingFrom,
    bookingTo : this.ticket[0].bookingTo,
});
  this.flightTicketsService.cancelflightTicket(flightTicketForm.value).subscribe(
    res =>{
      this.flightTicketForm.reset();
      this.toastr.success('تم الغاء بنجاح ');
      setTimeout(() => {
        window.location.href = '/full-layout/full-pages/flightTicketsList';
      }, 1000);
 },
      err =>{
      console.log(err);
    }
  )
 
 }
}
}
