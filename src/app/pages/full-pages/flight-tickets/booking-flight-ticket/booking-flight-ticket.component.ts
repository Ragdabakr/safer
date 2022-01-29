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

            totalNetSellingPrice: new FormControl(''),
            totalNetCostPrice: new FormControl(''),
            totalNetComm: new FormControl(''),
            
            bookingUser: new FormControl(''),
            bookingTime: new FormControl(''),

           

            travellers: new FormArray([this.addTraveller()]),
          
          }
        );





     
        
         
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

  //  addTravellerButtonClick(): void {
  //   this.travellers = this.flightTicketForm.controls.travellers as FormArray;
  //   this.travellersArray =this.travellers.value;
  //   this.travellers.push(this.addTraveller());
  //  }
    addNewTraveller(){

    this.ticket= this.flightTicketForm.value;
    console.log("this.ticket" , this.ticket); 

    var totalNetSellingPrice = 0;
    var totalNetCostPrice = 0 ;
    var totalNetComm = 0;
   
   

    for (let i = 0; i < this.ticket.travellers.length; i++) {


    this.ticketsArray.push(this.ticket.travellers[i]);

   
    
      const sellingPrice = this.ticket.travellers[i].ticketSellingPrice;
      const costPrice  = this.ticket.travellers[i].ticketCostPrice ;
      const ratio  = this.ticket.ratio;
      const discount  = this.ticket.travellers[i].discount;
      const ratioPresntage =  parseInt(ratio) / 100;


      // console.log("this.sellingPrice" , sellingPrice); 
      // console.log("this.costPrice" , costPrice); 
      // console.log("this.discount" ,discount); 

      const comm = (costPrice* ratioPresntage) ;
      const netCost = sellingPrice - comm;
      const netComm = comm - discount;
      const totalPrice = sellingPrice - discount;

    console.log("this.ticketsArray" , this.ticketsArray); 



    for (let i = 0; i < this.ticketsArray.length; i++) {
      const sellingPrice = this.ticketsArray[i].ticketSellingPrice;
      const costPrice  = this.ticketsArray[i].ticketCostPrice ;
      const ratio  = this.ticket.ratio;
      const discount  = this.ticketsArray[i].discount;
      const ratioPresntage =  parseInt(ratio) / 100;

      const comm = (costPrice* ratioPresntage) ;
      const netCost = sellingPrice - comm;
      const netComm = comm - discount;
      const totalPrice = sellingPrice - discount;

      totalNetSellingPrice += totalPrice ;
      totalNetCostPrice += netCost; 
      totalNetComm += netComm; 
  
      console.log("this.totalSellingPrice" , totalNetSellingPrice); 
      console.log("this.totalNetCostPrice" , totalNetCostPrice); 
      console.log("this.totalNetComm" ,totalNetComm);

      this.flightTicketForm.patchValue({
        totalNetSellingPrice: totalNetSellingPrice,
        totalNetCostPrice: totalNetCostPrice,
        totalNetComm:totalNetComm,
       
      });

    }
  }


//reset travellers array
  const control = <FormArray>this.flightTicketForm.controls['travellers'];
        for(let i = control.length-1; i >= 0; i--) {
            control.reset(i)
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

        comm: ['', [Validators.required]],
        netCost: ['', [Validators.required]],
        discount: [''],
        netComm: ['', [Validators.required]],
        totalPrice: ['', [Validators.required]],

        receivedAmount: [''],
        remainingAmount: [''],

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


  calculate(){
    
    for (let i = 0; i < this.flightTicketForm.value.travellers.length; i++) {
    
    const sellingPrice = this.flightTicketForm.value.travellers[i].ticketSellingPrice;
    const costPrice  = this.flightTicketForm.value.travellers[i].ticketCostPrice ;
    const ratio  = this.flightTicketForm.value.ratio;
    const discount  = this.flightTicketForm.value.travellers[i].discount;
    const ratioPresntage =  parseInt(ratio) / 100;
  
    const comm = costPrice* ratioPresntage ;
    const netCost = sellingPrice - comm;
    const netComm = comm - discount;
    const totalPrice = sellingPrice - discount;

    this.flightTicketForm.patchValue({
     travellers: [{
      sellingPrice: sellingPrice,
      costPrice: costPrice,
      refundTicketUser:this.user,
      comm:comm,
      netCost: netCost,
      netComm:netComm,
      totalPrice:totalPrice,
      }]
   });

   this.flightTicketForm.patchValue({
    bookingUser:this.user,
    bookingTime:Date.now(),
  });


    }


  }

  submitNewFlightTicket(flightTicketForm){

    console.log("flightTicketForm 0000" , flightTicketForm.value);

    const travellers = {

       travellers: <FormArray>this.flightTicketForm.controls["travellers"].value,
     
  }
this.flightTicketsService.createflightTicketBooking(flightTicketForm.value , this.ticketsArray).subscribe(
      res =>{
      //   this.flightTicketForm.reset();
      //   this.toastr.success('تم الاضافة بنجاح ');
      //   this.getflightTickets();
      //   this.invoice = res.invoice.invoice;
      //   console.log('invoice >>',this.invoice);
      //   console.log('invoiceId >>',this.invoice._id);
      //   setTimeout(() => {
      //     window.location.href = `/full-layout/full-pages/flightTicketInvoice/${this.invoice._id}`
      //   }, 1000);

      //   this.invoiceService.getFlightInvoiceById(this.invoice._id).subscribe({
      //     next: response => {
      //         this.foundInvoice = response.data.docs;
      //         console.log(" this.invoice>>>" ,  this.invoice);
      //     },
    
      //     error: err => {
      //         console.log(err);
      //     }
      // });


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




}

