import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancel-flight-ticket',
  templateUrl: './cancel-flight-ticket.component.html',
  styleUrls: ['./cancel-flight-ticket.component.scss']
})
export class CancelFlightTicketComponent implements OnInit {
  tickets = [];
  flightTicketForm: FormGroup;
  ticket;
  ticketsArray = [];
  ticketValue: any[];

  constructor(private flightTicketsService: FlightTicketsService,private toastr:ToastrService ,private fb: FormBuilder ,) { }

  ngOnInit( ) {
    this.getTickets();

    
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
            totalRefundNetComm: new FormControl('', [ Validators.required,]),
            fine: new FormControl('', [ Validators.required,]),
     }
   );

  }

  getTickets(){
    this.flightTicketsService.getFlightTicketsList().subscribe({
      next: response => {
          this.tickets = response.data.docs.reverse();
          console.log("tickets >>>" ,this.tickets);
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
  console.log("selected");

  this.flightTicketsService.getFlightTicketsList().subscribe({
    next: response => {
      const x =  event.target.value.slice(2);
      const ticketNumber =  parseInt(x.slice(1));
      console.log("x3 >>> " , ticketNumber);
      // console.log("event.target.value >>> " , event.target.value);
        this.tickets = response.data.docs;
      //   console.log("this.tickets >>> " , this.tickets);
        this.ticketValue =  this.tickets.filter(a => a.number  === ticketNumber );
        this.patchFormValues(this.ticketValue);

        this.ticketsArray = this.ticket[0].travellers;
        console.log("this.ticket >>> " , this.ticketsArray);
    },
    error: err => {
        console.log(err);
    }
  });
}



patchFormValues(ticketValue){
  this.ticket = ticketValue;

  console.log("adwfwef" ,ticketValue);
    this.flightTicketForm.patchValue({
       bookingFrom :  this.ticket[0].bookingFrom.name,
       bookingTo : this.ticket[0].bookingTo.name,
       ratio : this.ticket[0].ratio,
       paymentMethod : this.ticket[0].paymentMethod,
       departureDate :  this.ticket[0].departureDate,
       destination : this.ticket[0].destination,

   });
   console.log("this.flightTicketForm" ,this.flightTicketForm.value);

 }

 checkCheckBoxvalue(event){
 console.log("checkCheckBoxvalue >>> " , event.target.value);

 if(event.target.value === "withComm"){
  this.flightTicketForm.patchValue({
    refundType : "withComm",
    totalRefundNetCostPrice :  this.ticket[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.ticket[0].totalNetSellingPrice,
    totalRefundNetComm : this.ticket[0].totalNetComm,
  });
 }
 }

 submitCancelFlightTicket(flightTicketForm){
  this.flightTicketsService.cancelflightTicket(flightTicketForm.value).subscribe(
    res =>{
      // this.flightTicketForm.reset();
      this.toastr.success('تم الاضافة بنجاح ');
      // this.getflightTickets();
      // setTimeout(() => {
      //   window.location.href = '/full-layout/full-pages/flightTicketsList';
      // }, 1000);
 },
      err =>{
      console.log(err);
    }
  )
 
 }

}
