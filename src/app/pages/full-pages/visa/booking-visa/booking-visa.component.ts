
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
import { VisaService } from 'app/shared/services/visa.service';
import * as intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

@Component({
  selector: 'app-booking-visa',
  templateUrl: './booking-visa.component.html',
  styleUrls: ['./booking-visa.component.scss']
})
export class BookingVisaComponent implements OnInit {
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
  visaForm: FormGroup;
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
  visasArray = [];
  flightTicketSummary;
  refundTicket: boolean;
  refundvisaForm: FormGroup;
  changeTicket: boolean;
  sales: boolean;
  changevisaForm: FormGroup;
  totalChangeCostCompany: number;
  salesTicket: boolean;
  salesvisaForm: FormGroup;
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
  lastTicket: any;
  foundTravellersArray = [];
  foundTicket = [];
  item:any;
  allTravellers = [];
  dataSource: any[];
  num: number;
  visa: any;
 

  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private authService:AuthService ,private fb: FormBuilder ,private invoiceService: InvoiceService,private companyService: CompanyService,private toastr:ToastrService ,private visaService:VisaService ) { }

  ngOnInit() {
  this.getCompanies();
  this.user =this.authService.getUser();
  const input = document.querySelector("#phone");
   this.visaForm= new FormGroup(
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
          
          }
        );
      
  }

  getCompanies(){
    this.companyService.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
          // console.log(" this.companies>>>" ,  this.companies);
      },
      error: err => {
          console.log(err);
      }
  });
}

// Add new traveller
    addNewTraveller(){
      if(this.visaForm.invalid){
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
        this.validateAllFormFields(this.visaForm); // Triger postForm validation
      }else{
    this.visa= this.visaForm.value;

    var totalNetSellingPrice = 0;
    var totalNetCostPrice = 0 ;
    var totalNetComm = 0;
    var  totalReceivedAmount = 0;
    var  totalRemainingAmount =0;
   
    for (let i = 0; i < this.visa.travellers.length; i++) {
    this.visasArray.push(this.visa.travellers[i]);
  
    // console.log("this.visasArray" , this.visasArray); 

    for (let i = 0; i < this.visasArray.length; i++) {
      const sellingPrice = this.visasArray[i].sellingPrice;
      const netCost  = this.visasArray[i].netCost ;
      const comm = this.visasArray[i].comm ;

      totalNetSellingPrice += parseFloat(sellingPrice) ;
      totalNetCostPrice += parseFloat(netCost); 
      totalNetComm += parseFloat(comm); 
      totalReceivedAmount += parseFloat(this.visasArray[i].receivedAmount);
      totalRemainingAmount +=parseFloat(this.visasArray[i].remainingAmount);

      this.visaForm.patchValue({
        totalNetSellingPrice: totalNetSellingPrice,
        totalNetCostPrice: totalNetCostPrice,
        totalNetComm:totalNetComm,
        totalReceivedAmount:totalReceivedAmount,
        totalRemainingAmount:totalRemainingAmount,       
       });
      }
    }
  }


//reset travellers array
  const control = <FormArray>this.visaForm.controls['travellers'];
        for(let i = control.length-1; i >= 0; i--) {
            control.reset(i)
    }
 }


addTraveller(): FormGroup {
    return this.fb.group({
        travellerFirstName: ['', [Validators.required]],
        travellerLastName: ['', [Validators.required]],
        travellerType: ['', [Validators.required]],
        passportNumber: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        sellingPrice: ['', [Validators.required]],
        comm: ['', [Validators.required]],
        netCost: ['', [Validators.required]],
        receivedAmount: ['', [Validators.required]],
        remainingAmount: ['0', [Validators.required]],

    });
}


   // Submit new visa
   submitNewVisa(visaForm){
    const min = 0;
    const max =8000;
    this.num =  Math.floor(Math.random() * (max - min + 1)) + min;
    this.num.toString().padStart(6, "0");
     this.visaForm.patchValue({
     bookingUser:this.user,
     bookingTime:Date.now(),
     number:this.num
      });
  
    if (!this.visaForm.get('notes').value){
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    }else{

this.visaService.createVisaBooking(visaForm.value , this.visasArray).subscribe(
      res =>{
        this.visaForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
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


 // Delete  Traveller 
deleteTraveller(visa){
  let deletedTicket =  this.visasArray.filter(a=> a.phoneNumber !== visa.phoneNumber );
   this.visasArray = deletedTicket;

   var totalNetSellingPrice = 0;
   var totalNetCostPrice = 0 ;
   var totalNetComm = 0;
   var  totalReceivedAmount = 0;
   var  totalRemainingAmount =0;
  
   for (let i = 0; i < this.visasArray.length; i++) {
     const sellingPrice = this.visasArray[i].sellingPrice;
     const netCost  = this.visasArray[i].netCost ;
     const comm = this.visasArray[i].comm ;

     totalNetSellingPrice += parseFloat(sellingPrice) ;
     totalNetCostPrice += parseFloat(netCost); 
     totalNetComm += parseFloat(comm); 
     totalReceivedAmount += parseFloat(this.visasArray[i].receivedAmount);
     totalRemainingAmount +=parseFloat(this.visasArray[i].remainingAmount);

     this.visaForm.patchValue({
       totalNetSellingPrice: totalNetSellingPrice,
       totalNetCostPrice: totalNetCostPrice,
       totalNetComm:totalNetComm,
       totalReceivedAmount:totalReceivedAmount,
       totalRemainingAmount:totalRemainingAmount,       
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




}

