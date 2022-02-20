
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { VisaService } from 'app/shared/services/visa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancel-visa',
  templateUrl: './cancel-visa.component.html',
  styleUrls: ['./cancel-visa.component.scss']
})
export class CancelVisaComponent implements OnInit {
  tickets = [];
  flightTicketForm: FormGroup;
  ticket;
  ticketsArray = [];
  ticketValue: any[];
  ticketNumber: any[];
  cancelType = null;
  visaForm: FormGroup;
  visas: any;
  visaValue: any;
  visa: any;
  visaArray: any;
  user: string;

  constructor(private authService:AuthService ,private flightTicketsService: FlightTicketsService,private visaService: VisaService,private toastr:ToastrService ,private fb: FormBuilder ,) { }

  ngOnInit( ) {
    this.getVisas();
    this.user =this.authService.getUser();
    
   this.visaForm = new FormGroup(
    {
      number: new FormControl(''),
            bookingFrom: new FormControl('', [ Validators.required,]),
            bookingTo: new FormControl('', [ Validators.required,]),
            paymentMethod: new FormControl('', [ Validators.required,]),
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

  getVisas(){
    this.visaService.getVisasList().subscribe({
      next: response => {
          this.visas = response.data.docs.reverse().filter(a => a.cancel  === false );
          //console.log("tickets >>>" ,this.tickets);
      },
      error: err => {
          console.log(err);
      }
  });
}

addTraveller(): FormGroup {
  return this.fb.group({
      travellerFirstName: ['', [Validators.required]],
      travellerLastName: ['', [Validators.required]],
      travellerType: ['', [Validators.required]],
      passportNumber: ['', [Validators.required]],
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

onVisaNumberSelected(event){
  this.visaService.getVisasList().subscribe({
    next: response => {
      const x =  event.target.value.slice(2);
      const visaNumber =  parseInt(x.slice(1));
      //console.log("x3 >>> " , ticketNumber);
      // console.log("event.target.value >>> " , event.target.value);
        this.visas = response.data.docs;
        this.visaValue =  this.visas.filter(a => a.number  === visaNumber );
        this.patchFormValues(this.visaValue);
        this.visaArray = this.visa[0].travellers;
       // console.log("visaArray" ,  this.visaArray);
    },
    error: err => {
        console.log(err);
    }
  });
}



patchFormValues(visaValue){
  this.visa = visaValue;
    this.visaForm.patchValue({
       bookingFrom :  this.visa[0].bookingFrom.name,
       bookingTo : this.visa[0].bookingTo.name,
       paymentMethod : this.visa[0].paymentMethod,
       destination : this.visa[0].destination,
       number : this.visa[0].number,

   });
 }

 checkCheckBoxvalue(event){
 //console.log("checkCheckBoxvalue >>> " , event.target.value);

 if(event.target.value === "withComm"){
  this.visaForm.patchValue({
    refundType : "withComm",
    totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.visa[0].totalReceivedAmount,
    totalRefundNetComm : this.visa[0].totalNetComm,
    fine:0
  });
 }
 
 if(event.target.value === "noComm"){
  this.visaForm.patchValue({
    refundType : "noComm",
    totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice,
    totalRefundNetSellingPrice : this.visa[0].totalReceivedAmount - this.visa[0].totalNetComm ,
    totalRefundNetComm : 0,
    fine:0
  });
 }
 
 if(event.target.value === "fineWithComm"){
   const fine = this.visaForm.get('fine').value;
    if(!fine){
       this.toastr.error('الرجاء ادخال قيمة الغرامة ');
       this.cancelType = null;
    }else{
      this.visaForm.patchValue({
        refundType : "fineWithComm",
        totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice - fine,
        totalRefundNetSellingPrice : this.visa[0].totalReceivedAmount - fine ,
        totalRefundNetComm : this.visa[0].totalNetComm,
        fine:fine
      });
      }
}
 

 if(event.target.value === "fineNoComm"){
  const fine = this.visaForm.get('fine').value;
    if(!fine){
      this.toastr.error('الرجاء ادخال قيمة الغرامة ');
      this.cancelType = null;
    }else{
    this.visaForm.patchValue({
      refundType : "fineWithComm",
      totalRefundNetCostPrice :  this.visa[0].totalNetCostPrice - fine,
      totalRefundNetSellingPrice : (this.visa[0].totalReceivedAmount - this.visa[0].totalNetComm) -fine ,
      totalRefundNetComm : 0,
      fine:fine
    });
    }
   }
}


submitCancelVisa(visaForm){
  if(!this.visaForm.get('number').value ){
    this.toastr.error('الرجاء التأكد من اختيار رقم الحجز');
  }
  else if(!this.visaForm.get('notes').value ){
    this.toastr.error(' الرجاء التأكد من كتابة الملاحظات المطلوبة');
  }
  else if(!this.cancelType){
    this.toastr.error('الرجاء التأكد من اختيار احدي خيارات استرجاع التأشيرة');
  }
  else if(!this.visaForm.get('totalRefundNetSellingPrice').value  || !this.visaForm.get('totalRefundNetCostPrice').value ){
    this.toastr.error(' الرجاء التأكد من  ملئ الحقول المطلوبة المطلوبة');
  }
  
  else {
  this.visaForm.patchValue({
    bookingFrom :  this.visa[0].bookingFrom,
    bookingTo : this.visa[0].bookingTo,
});
  this.visaService.cancelVisa(visaForm.value).subscribe(
    res =>{
      this.visaForm.reset();
      this.toastr.success('تم الالغاء بنجاح ');
      setTimeout(() => {
        window.location.href = '/full-layout/full-pages/visaList';
      }, 1000);
 },
      err =>{
      console.log(err);
    }
  )
 
 }
}
}
