import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RoleService } from 'app/shared/services/role.service';
import { ToastrService } from 'ngx-toastr';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { CompanyService } from 'app/shared/services/company.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { ItemsList } from '@ng-select/ng-select/ng-select/items-list';
import { InvoiceService } from 'app/shared/services/invoice.service';

@Component({
  selector: 'app-booking-flight-ticket',
  templateUrl: './booking-flight-ticket.component.html',
  styleUrls: ['./booking-flight-ticket.component.scss']
})
export class BookingFlightTicketComponent implements OnInit {
  ticketTypes = [ 'حجز تذكرة بدون عمولة','استرجاع تذكرة', 'حجز تذكرة مع عمولة ' , 'تعديل  تذكرة'];
  types = ['بالغ' , 'طفل', 'رضيع'];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editRoleDialog: boolean;
  roleId: any;
  addPermissionsRoleDialog: boolean;
  openTicketsBox:boolean = false;


  //Acoordion
  acc: any;
  permissionForm: FormGroup;
  roles: any;
  flightTicketForm: FormGroup;
  flightTickets:any;
  flightTicketId: any;
  editFlightTicketDialog: boolean;
  tickets = [];
  companies = [];
  newTicket: boolean;
  flightTicketsCompanies: any;
  paymentTypes=['نقدا' ,'أجل' ];
  commTypes=['فقط لنا' ,'عمولة الي عميل' ];
  ticket: any;
  user: string;
  items = [];
  invoice: any;
  foundInvoice: any;
  travellersArray: any;
  addNew: boolean;
  travellers: FormArray;
  ticketsArray = [];
  flightTicketSummary;
  refundTicket: boolean;
  refundFlightTicketForm: FormGroup;
  changeTicket: boolean;
  sales: boolean;
  changeFlightTicketForm: FormGroup;
  totalChangeCostCompany: number;
  salesTicket: boolean;
  salesFlightTicketForm: FormGroup;
  totalNumber: any = 0;
  totalCost: any = 0;
  totalSellingPrice: any =0;
  totalTicketProfit: any = 0;


  totalNumbers:any = 0;
  adultNumber: any =0;
  infantNumber: any =0;
  childrenNumber: any =0;
  adultTicketCost: any =0;
  childrenTicketCost: any =0;
  infantTicketCost: any =0;
  infantTicketsellingPrice: any =0;
  adultTicketsellingPrice: any =0;
  childrenTicketsellingPrice: any =0;
  infantTicketProfit:any = 0;
  adultTicketProfit: any = 0;
  childrenTicketProfit: any = 0;
  noCommFlightTicketForm: FormGroup;
  lastTicket: any;
  foundTravellersArray = [];
  foundTicket = [];
  item:any;
  allTravellers = [];
  dataSource: any[];
  noCommEditFlightTicketForm: FormGroup;
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private authService:AuthService ,private fb: FormBuilder ,private invoiceService: InvoiceService,private companyService: CompanyService,private toastr:ToastrService ,private flightTicketsService:FlightTicketsService ) { }

  ngOnInit() {
  this.getCompanies();
  this.getflightTicketsCompanies();
  this.user =this.authService.getUser();

        this.cols = [
          { field: 'travellerFirstName', header: 'أسم المسافر' },
          { field: 'travellerType', header: 'نوع المسافر' },
          { field: 'ticketCostPrice', header: 'سعر التكلفة ' },
          { field: 'ticketSellingPrice', header: ' سعرالبيع' },
         
      ];
    

   this.flightTicketForm = new FormGroup(
         {
            bookingFrom: new FormControl('', [ Validators.required,]),
            bookingTo: new FormControl('', [ Validators.required,]),
       
            ratio: new FormControl('', [ Validators.required,]),
            paymentMethod: new FormControl('', [ Validators.required,]),
            departureDate: new FormControl('', [ Validators.required,]),
            destination: new FormControl('', [ Validators.required,]),
       
            notes: new FormControl('', [ Validators.required,]),
            delegateComm: new FormControl(''),
            ourComm: new FormControl(''),
            companyComm: new FormControl(''),
            totalPrice: new FormControl(''),
            costPrice: new FormControl(''),
            netTotalPrice: new FormControl(''),
            bookingUser: new FormControl(''),
            bookingTime: new FormControl(''),

            travellers: new FormArray([this.addTraveller()]),
          
          }
        );

        this. noCommFlightTicketForm = new FormGroup(
          {
             companyAccount: new FormControl('', [ Validators.required,]),
             airlineAccount: new FormControl('', [ Validators.required,]),
             paymentMethod: new FormControl('', [ Validators.required,]),
             departureDate: new FormControl('', [ Validators.required,]),
             destination: new FormControl('', [ Validators.required,]),
        
             notes: new FormControl('', [ Validators.required,]),
             totalSellingPrice: new FormControl(''),
             totalCostPrice: new FormControl(''),
             bookingUser: new FormControl(''),
             bookingTime: new FormControl(''),
 
             travellers: new FormArray([this.addNoCommTraveller()]),
           
           }
         );


         this. noCommEditFlightTicketForm = new FormGroup(
          {
          
             travellers: new FormArray([this.addNoCommTraveller()]),
           
           }
         );
       

        

        this.refundFlightTicketForm = new FormGroup(
          {
             companyAccount: new FormControl('', [ Validators.required,]),
             airlineAccount: new FormControl('', [ Validators.required,]),
             paymentMethod: new FormControl('', [ Validators.required,]),
             departureDate: new FormControl('', [ Validators.required,]),
             destination: new FormControl('', [ Validators.required,]),
        
             notes: new FormControl('', [ Validators.required,]),
             pnrNumber: new FormControl(''),
             costTicketPrice: new FormControl(''),
             vatTicketPrice: new FormControl(''),
             fineTicketSystem: new FormControl(''),
             fineTicketCompany: new FormControl(''),

             totalRefundCostCompany: new FormControl(''),
             totalRefundCostAirlineCompany: new FormControl(''),
             refundTicketUser: new FormControl(''),
             refundTime: new FormControl(''),
           
           }
         );

         this.changeFlightTicketForm = new FormGroup(
          {
             companyAccount: new FormControl('', [ Validators.required,]),
             airlineAccount: new FormControl('', [ Validators.required,]),
             paymentMethod: new FormControl('', [ Validators.required,]),
             departureDate: new FormControl('', [ Validators.required,]),
             destination: new FormControl('', [ Validators.required,]),
        
             notes: new FormControl('', [ Validators.required,]),
             pnrNumber: new FormControl(''),
             fineTicketSystem: new FormControl(''),
             fineTicketCompany: new FormControl(''),
             changeTicketUser: new FormControl(''),
             changeTime: new FormControl(''),
             totalChangeCostAirlineCompany: new FormControl(''),
             totalChangeCostCompany:new FormControl(''),
           
           },
         );

           this.salesFlightTicketForm = new FormGroup(
            {
               companyAccount: new FormControl('', [ Validators.required,]),
               airlineAccount: new FormControl('', [ Validators.required,]),
               paymentMethod: new FormControl('', [ Validators.required,]),
               departureDate: new FormControl('', [ Validators.required,]),
               destination: new FormControl('', [ Validators.required,]),
               notes: new FormControl('', [ Validators.required,]),
               pnrNumber: new FormControl(''),

               infantNumber:new FormControl('', [ Validators.required,]),
               adultNumber:new FormControl('', [ Validators.required,]),
               childrenNumber:new FormControl('', [ Validators.required,]),
               totalNumber:new FormControl('', [ Validators.required,]),

               infantTicketCost:new FormControl('', [ Validators.required,]),
               adultTicketCost:new FormControl('', [ Validators.required,]),
               childrenTicketCost:new FormControl('', [ Validators.required,]),
               totalCost:new FormControl('', [ Validators.required,]),

               infantTicketsellingPrice:new FormControl('', [ Validators.required,]),
               adultTicketsellingPrice:new FormControl('', [ Validators.required,]),
               childrenTicketsellingPrice:new FormControl('', [ Validators.required,]),
               totalSellingPrice:new FormControl('', [ Validators.required,]),

               infantTicketProfit:new FormControl('', [ Validators.required,]),
               adultTicketProfit:new FormControl('', [ Validators.required,]),
               childrenTicketProfit:new FormControl('', [ Validators.required,]),
               totalTicketProfit:new FormControl('', [ Validators.required,]),
               
               
               salesTicketUser: new FormControl(''),
               salesTime: new FormControl(''),
              
             
             });
         
  }

  getCompanies(){
    this.companyService.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
          console.log(" this.companies>>>" ,  this.companies);
      },

      error: err => {
          console.log(err);
      }
  });
}

   // Add traveller

   addTravellerButtonClick(): void {
    this.travellers = this.flightTicketForm.controls.travellers as FormArray;
    this.travellersArray =this.travellers.value;
    this.travellers.push(this.addTraveller());
   }
    addNewTraveller(){
    this.ticket= this.flightTicketForm.value;
    console.log("this.ticket" , this.ticket); 

 
var delegateComm = 0 ;
var ourComm  = 0;
var companyComm = 0 ;
var totalSellingPrice = 0;
var vatPrice = 0 ;

    for (let i = 0; i < this.ticket.travellers.length; i++) {
       delegateComm +=  this.ticket.travellers[i].ticketCostPrice * (this.ticket.airlineAccount.delegateComm * 0.01);
      ourComm += this.ticket.travellers[i].ticketCostPrice * (this.ticket.airlineAccount.ourComm * 0.01);
      companyComm += this.ticket.travellers[i].ticketCostPrice * (this.ticket.airlineAccount.companyComm * 0.01);
      vatPrice += this.ticket.travellers[i].ticketvatPrice;
      totalSellingPrice += parseInt(this.ticket.travellers[i].ticketSellingPrice) ;

    this.ticketsArray.push(this.ticket.travellers[i]);

    console.log("this.ticketsArray" , this.ticketsArray); 

       this.flightTicketForm.patchValue({
       delegateComm: delegateComm,
       ourComm: ourComm,
       companyComm: companyComm,
       totalPrice:totalSellingPrice,
       ticketvatPrice : vatPrice,
       netTotalPrice:totalSellingPrice - companyComm,
       bookingUser:this.user,
       bookingTime:Date.now(),
    });


     this.flightTicketSummary=this.flightTicketForm.value;
     console.log("flightTicketSummary" , this.flightTicketSummary.totalPrice); 
     this.flightTicketForm.reset();
     

  }

 }


addTraveller(): FormGroup {
    return this.fb.group({
        pnrNumber: ['', [Validators.required]],
        travellerFirstName: ['', [Validators.required]],
        travellerLastName: ['', [Validators.required]],
        travellerType: ['', [Validators.required]],
        passportNumber: ['', [Validators.required]],
        ticketvatPrice:  ['', [Validators.required]],
        ticketCostPrice: ['', [Validators.required]],
        ticketSellingPrice: ['', [Validators.required]],
    });
}



   // Add new traveller

   addNewTravellersButtonClick(): void {
    this.travellers = this.noCommFlightTicketForm.controls.travellers as FormArray;
    this.travellersArray =this.travellers.value;
    this.travellers.push(this.addNoCommTraveller());
   }
   addNewTravellers(){
    this.ticket= this.noCommFlightTicketForm.value;
    console.log("this.ticket" , this.ticket); 

      var totalSellingPrice = 0;
      var totalCostPrice = 0 ;

    for (let i = 0; i < this.ticket.travellers.length; i++) {
    
     totalSellingPrice += parseInt(this.ticket.travellers[i].ticketSellingPrice) ;
      totalCostPrice += parseInt(this.ticket.travellers[i].ticketCostPrice) ;

    this.ticketsArray.push(this.ticket.travellers[i]);

    console.log("this.ticketsArray >>>>>>>>>" , this.ticketsArray); 

       this.noCommFlightTicketForm.patchValue({
       totalSellingPrice:totalSellingPrice,
       totalCostPrice:totalCostPrice,
       bookingUser:this.user,
       bookingTime:Date.now(),
    });
     this.flightTicketSummary=this.noCommFlightTicketForm.value;
     console.log("flightTicketSummary" , this.flightTicketSummary.totalSellingPrice); 
  }
  this.travellers= this.noCommFlightTicketForm.controls.travellers as FormArray;
  this.allTravellers = this.travellers.value;

 }


 addNoCommTraveller(): FormGroup {
    return this.fb.group({
        pnrNumber: ['', [Validators.required]],
        travellerFirstName: ['', [Validators.required]],
        travellerLastName: ['', [Validators.required]],
        travellerType: ['', [Validators.required]],
        passportNumber: ['', [Validators.required]],
        ticketCostPrice: ['', [Validators.required]],
        ticketSellingPrice: ['', [Validators.required]],
    });
}

  getflightTickets(){
          this.flightTicketsService.getflightTicketsBooking().subscribe({
            next: response => {
                this.flightTickets = response.data.docs;
            },
            error: err => {
                console.log(err);
            }
        });
  }

  addNewFlightTicket(flightTicketForm){
    this.openTicketsBox= true;
     this.ticket = flightTicketForm.value;
    console.log("flightTicketForm5" , flightTicketForm); 
     const delegateComm = this.ticket.ticketCostPrice * (this.ticket.airlineAccount.delegateComm * 0.01);
     const ourComm = this.ticket.ticketCostPrice * (this.ticket.airlineAccount.ourComm * 0.01);
     const companyComm = this.ticket.ticketCostPrice * (this.ticket.airlineAccount.companyComm * 0.01);

    this.flightTicketForm.patchValue({
       delegateComm: delegateComm,
       ourComm: ourComm,
       companyComm: companyComm,
       totalPrice:this.ticket.ticketSellingPrice,
       netTotalPrice:this.ticket.ticketSellingPrice - companyComm,
       bookingUser:this.user,
       bookingTime:Date.now(),


    });
    this.ticket = this.flightTicketForm.value;
    this.flightTickets.push(this.ticket);
  


  }

  submitNewFlightTicket(flightTicketForm){

    const flightTicketsData = {
      commType: this.flightTicketForm.get('commType').value,
      paymentMethod: this.flightTicketForm.get('paymentMethod').value,
      departureDate: this.flightTicketForm.get('departureDate').value,
      destination: this.flightTicketForm.get('destination').value,
      notes: this.flightTicketForm.get('notes').value,
      airlineAccount: this.flightTicketForm.get('airlineAccount').value,
      companyAccount: this.flightTicketForm.get('companyAccount').value,
      travellers: <FormArray>this.flightTicketForm.controls["travellers"].value,
      delegateComm: this.flightTicketForm.get('delegateComm').value,
      ourComm: this.flightTicketForm.get('ourComm').value,
      companyComm: this.flightTicketForm.get('companyComm').value,
      totalPrice:this.flightTicketForm.get('totalPrice').value,
      netTotalPrice:this.flightTicketForm.get('netTotalPrice').value,
      bookingUser:this.user,
      bookingTime:Date.now(),
  }
this.flightTicketsService.createflightTicketBooking(flightTicketsData).subscribe(
      res =>{
        this.flightTicketForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
        this.getflightTickets();
        this.invoice = res.invoice.invoice;
        console.log('invoice >>',this.invoice);
        console.log('invoiceId >>',this.invoice._id);
        setTimeout(() => {
          window.location.href = `/full-layout/full-pages/flightTicketInvoice/${this.invoice._id}`
        }, 1000);

        this.invoiceService.getFlightInvoiceById(this.invoice._id).subscribe({
          next: response => {
              this.foundInvoice = response.data.docs;
              console.log(" this.invoice>>>" ,  this.invoice);
          },
    
          error: err => {
              console.log(err);
          }
      });


        },
        err =>{
        console.log(err);
      }
    )
  }

  submitRefundFlightTicket(refundFlightTicketForm){
    const price = refundFlightTicketForm.value;
    console.log("totalRefundCost" , price);
    const totalRefundCostCompany = (parseInt(price.costTicketPrice)) - (parseInt(price.vatTicketPrice) + parseInt(price.fineTicketSystem) + parseInt(price.fineTicketCompany) );
    const totalRefundCostAirlineCompany = (parseInt(price.costTicketPrice)) - (parseInt(price.vatTicketPrice) + parseInt(price.fineTicketSystem));
   console.log("totalRefundCost" , totalRefundCostAirlineCompany);

   this.refundFlightTicketForm.patchValue({
    totalRefundCostCompany: totalRefundCostCompany,
    totalRefundCostAirlineCompany: totalRefundCostAirlineCompany,
    refundTicketUser:this.user,
    refundTime:Date.now(),
 });
    this.flightTicketsService.refundflightTicketBooking(refundFlightTicketForm.value).subscribe(
      res =>{

        this.refundFlightTicketForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
        this.getflightTickets();
        this.invoice = res.invoice.invoice;
        console.log('invoice >>',this.invoice);
        console.log('invoiceId >>',this.invoice._id);
        setTimeout(() => {
          window.location.href = `/full-layout/full-pages/flightTicketInvoice/${this.invoice._id}`
        }, 1000);

        this.invoiceService.getFlightInvoiceById(this.invoice._id).subscribe({
          next: response => {
              this.foundInvoice = response.data.docs;
              console.log(" this.invoice>>>" ,  this.invoice);
          },
    
          error: err => {
              console.log(err);
          }
      });


        },
        err =>{
        console.log(err);
      }
    )
  }

  submitChangeFlightTicket(changeFlightTicketForm){
    const price = changeFlightTicketForm.value;
    console.log("totalChangeCost" , price);
    this.totalChangeCostCompany =price.fineTicketCompany + price.fineTicketSystem;

   this.changeFlightTicketForm.patchValue({
    totalChangeCostCompany: this.totalChangeCostCompany,
    totalChangeCostAirlineCompany: price.fineTicketSystem,
    changeTicketUser:this.user,
    changeTime:Date.now(),
 });

 console.log("changeFlightTicketForm" , this.changeFlightTicketForm);
    this.flightTicketsService.changeFlightTicketBooking(changeFlightTicketForm.value).subscribe(
      res =>{

        this.changeFlightTicketForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
        this.getflightTickets();
        this.invoice = res.invoice.invoice;
        console.log('invoice >>',this.invoice);
        console.log('invoiceId >>',this.invoice._id);
        setTimeout(() => {
          window.location.href = `/full-layout/full-pages/flightTicketInvoice/${this.invoice._id}`
        }, 1000);

        this.invoiceService.getFlightInvoiceById(this.invoice._id).subscribe({
          next: response => {
              this.foundInvoice = response.data.docs;
            
          },
    
          error: err => {
              console.log(err);
          }
      });


        },
        err =>{
        console.log(err);
      }
    )
  }

  //Total Number

  onadultNKeyUp(x) {
    this.adultNumber = this.salesFlightTicketForm.get('adultNumber').value;
    this.totalNumbers =   parseInt(this.adultNumber) +  parseInt(this.childrenNumber) +parseInt(this.infantNumber);
  } 
  onChildrenNKeyUp(x) {
    this.childrenNumber = this.salesFlightTicketForm.get('childrenNumber').value;
    this.totalNumbers =   parseInt(this.adultNumber) +  parseInt(this.childrenNumber) +parseInt(this.infantNumber);
  }
  onaInfantNKeyUp(x) {
    this.infantNumber = this.salesFlightTicketForm.get('infantNumber').value;
    this.totalNumbers =  parseInt(this.adultNumber) +  parseInt(this.childrenNumber) +parseInt(this.infantNumber)
  }

  //Total Selling Price
  onadultCKeyUp(x) {
    this.adultTicketCost = this.salesFlightTicketForm.get('adultTicketCost').value;
    this.totalCost =  parseInt(this.adultTicketCost) +  parseInt(this.childrenTicketCost) +parseInt(this.infantTicketCost);
  } 
  onChildrenCKeyUp(x) {
    this.childrenTicketCost = this.salesFlightTicketForm.get('childrenTicketCost').value;
    this.totalCost =  parseInt(this.adultTicketCost) +  parseInt(this.childrenTicketCost) +parseInt(this.infantTicketCost);
  }
  onaInfantCKeyUp(x) {
    // this.infantNumber = this.salesFlightTicketForm.get('infantNumber').setValue(x.target.value);
    this.infantTicketCost = this.salesFlightTicketForm.get('infantTicketCost').value;
    this.totalCost =  parseInt(this.adultTicketCost) +  parseInt(this.childrenTicketCost) +parseInt(this.infantTicketCost);
  }

  
  //Total Number

  onadultSKeyUp(x) {
    this.adultTicketsellingPrice = this.salesFlightTicketForm.get('adultTicketsellingPrice').value;
    this.totalSellingPrice = parseInt(this.adultTicketsellingPrice) +  parseInt(this.childrenTicketsellingPrice) +parseInt(this.infantTicketsellingPrice);
  } 
  onChildrenSKeyUp(x) {
    this.childrenTicketsellingPrice = this.salesFlightTicketForm.get('childrenTicketsellingPrice').value;
    this.totalSellingPrice = parseInt(this.adultTicketsellingPrice) +  parseInt(this.childrenTicketsellingPrice) +parseInt(this.infantTicketsellingPrice);
  }
  onInfantSKeyUp(x) {
    this.infantTicketsellingPrice = this.salesFlightTicketForm.get('infantTicketsellingPrice').value;
    this.totalSellingPrice = parseInt(this.adultTicketsellingPrice) +  parseInt(this.childrenTicketsellingPrice) +parseInt(this.infantTicketsellingPrice);
  }

  
  //Total Profit

  onadultPKeyUp(x) {
    this.adultTicketProfit = this.salesFlightTicketForm.get('adultTicketProfit').value;
    this.totalTicketProfit =   parseInt(this.adultTicketProfit) +  parseInt(this.childrenTicketProfit) +parseInt(this.infantTicketProfit);
  } 
  onChildrenPKeyUp(x) {
    this.childrenTicketProfit = this.salesFlightTicketForm.get('childrenTicketProfit').value;
    this.totalTicketProfit =   parseInt(this.adultTicketProfit) +  parseInt(this.childrenTicketProfit) +parseInt(this.infantTicketProfit);
  }
  onInfantPKeyUp(x) {
    this.infantTicketProfit = this.salesFlightTicketForm.get('infantTicketProfit').value;
    this.totalTicketProfit =  parseInt(this.adultTicketProfit) +  parseInt(this.childrenTicketProfit) +parseInt(this.infantTicketProfit)
  }

  submitSalesFlightTicket(salesFlightTicketForm){
    const price = salesFlightTicketForm.value;
    console.log("totalChangeCost" , price);

   this.salesFlightTicketForm.patchValue({
    totalNumber :this.totalNumbers,
    totalCost : this.totalCost,
    totalSellingPrice:this.totalSellingPrice,
    totalTicketProfit: this.totalTicketProfit,
    salesTicketUser:this.user,
    salesTime:Date.now(),
 });

 console.log("salesFlightTicketForm" , this.salesFlightTicketForm);
    this.flightTicketsService.salesFlightTicketBooking(salesFlightTicketForm.value).subscribe(
      res =>{

        // this.salesFlightTicketForm.reset();
        // this.toastr.success('تم الاضافة بنجاح ');
        // this.getflightTickets();
        // this.invoice = res.invoice.invoice;
        // console.log('invoice >>',this.invoice);
        // console.log('invoiceId >>',this.invoice._id);
        // setTimeout(() => {
        //   window.location.href = `/full-layout/full-pages/flightTicketInvoice/${this.invoice._id}`
        // }, 1000);

        this.invoiceService.getFlightInvoiceById(this.invoice._id).subscribe({
          next: response => {
              this.foundInvoice = response.data.docs;
            
          },
    
          error: err => {
              console.log(err);
          }
      });


        },
        err =>{
        console.log(err);
      }
    )
  }


editTraveller(ticket){
  this.foundTicket = this.ticketsArray.filter(a => a.pnrNumber === ticket.pnrNumber);
    this.noCommEditFlightTicketForm.patchValue({
    travellers: [{
      pnrNumber: this.foundTicket[0].pnrNumber,
      travellerFirstName: this.foundTicket[0].travellerFirstName,
      travellerLastName: this.foundTicket[0].travellerLastName,
      travellerType: this.foundTicket[0].travellerType,
      passportNumber: this.foundTicket[0].passportNumber,
      ticketCostPrice: this.foundTicket[0].ticketCostPrice,
      ticketSellingPrice: this.foundTicket[0].ticketSellingPrice,
    }]
  });
  // console.log("this.foundTicket" , this.foundTicket);
  // console.log("this.ticketsArray" , this.ticketsArray);
  this.editFlightTicketDialog = true;
  // console.log("dataSource00" , this.dataSource);
  // console.log("this.ticketsArrayنن" , this.ticketsArray);

}






updateTravellerButton(item){
  console.log("item"  , item);
  this.editFlightTicketDialog = false;
  this.ticketsArray = item.value.travellers;
  console.log("ticketsArray"  ,this.ticketsArray);
  this.noCommFlightTicketForm.patchValue({
    travellers: this.ticketsArray
  });
this.foundTicket = [];
  console.log("  this.noCommFlightTicketForm"  ,  this.noCommFlightTicketForm);

 }


 // Delete  Traveller 
deleteTraveller(traveller){
  console.log("traveller >>>" , traveller);
  let deletedTicket =  this.ticketsArray.filter(a=> a.pnrNumber !== traveller.pnrNumber );
  console.log("deletedTicket >>>" , deletedTicket);
  this.ticketsArray = deletedTicket;
  this.noCommFlightTicketForm.patchValue({
    travellers: deletedTicket
  });
 deletedTicket = [];

}


 //Add New Ticket Without Comm

  submitNewFlightNotCommTicket(noCommFlightTicketForm){

    if (this.noCommFlightTicketForm.invalid) {
      window.scroll(0, 0); 
      this.toastr.error('تأكد من تعبئة الحقول المطلوبة ');
      this.validateAllFormFields(this.noCommFlightTicketForm); // Triger postForm validation
  }
  else {
    console.log("  this.noCommFlightTicketForm no com" ,  this.noCommFlightTicketForm.value);
    // this.flightTicketsService.createNoCommFlightTicketBooking(noCommFlightTicketForm.value ).subscribe(
    //   res =>{
    //     this.noCommFlightTicketForm.reset();
    //     this.toastr.success('تم الاضافة بنجاح ');
    //     this.getflightTickets();
    //     this.invoice = res.invoice.invoice;
    //     setTimeout(() => {
    //       window.location.href = `/full-layout/full-pages/flightTicketInvoice/${this.invoice._id}`
    //     }, 1000);
    //     this.invoiceService.getFlightInvoiceById(this.invoice._id).subscribe({
    //       next: response => {
    //           this.foundInvoice = response.data.docs;
    //       },
    
    //       error: err => {
    //           console.log(err);
    //       }
    //       });

    //     },
    //     err =>{
    //     console.log(err);
    // })
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

onTicketTypeSelected(event){
  console.log("ticketjj" , event.target.value);
  if (event.target.value === "2: حجز تذكرة مع عمولة "){
    this.newTicket = true;
    this.refundTicket = false;  
    this.changeTicket = false; 
    this.salesTicket = false; 
  }
  else if(event.target.value ==="1: استرجاع تذكرة"){
    this.refundTicket = true;  
    this.newTicket = false;
    this.changeTicket = false; 
    this.salesTicket = false;  
  }
    else if(event.target.value ==="3: تعديل  تذكرة"){
      this.refundTicket = false;  
      this.newTicket = false;
      this.changeTicket = true;  
      this.salesTicket = false; 
    
  }else{
    this.salesTicket = true;
    this.refundTicket = false;  
    this.newTicket = false;
    this.changeTicket = false;  
    
  }

}

getflightTicketsCompanies(){
  this.flightTicketsService.getflightTickets().subscribe({
    next: response => {
        this.flightTicketsCompanies = response.data.docs;
    },
    error: err => {
        console.log(err);
    }
});
}




}

