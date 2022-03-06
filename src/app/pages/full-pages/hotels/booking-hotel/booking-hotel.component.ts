
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
import { HotelService } from 'app/shared/services/hotel.service';
import * as intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

@Component({
  selector: 'app-booking-hotel',
  templateUrl: './booking-hotel.component.html',
  styleUrls: ['./booking-hotel.component.scss']
})
export class BookingHotelComponent implements OnInit {
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
  hotelForm: FormGroup;
  flightTickets:any;
  flightTicketId: any;
  editFlightTicketDialog: boolean;
  tickets = [];
  companies = [];
  newTicket: boolean;
  flightTicketsCompanies: any;
  paymentTypes=['نقدا' ,'أجل' ];
  roomTypes=['مزدوجة' ,'مفرد' ,'ثلاثية' ,'رباعية' ,'كوين','كينغ','استديو'];
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
  refundhotelForm: FormGroup;
  changeTicket: boolean;
  sales: boolean;
  changehotelForm: FormGroup;
  totalChangeCostCompany: number;
  salesTicket: boolean;
  saleshotelForm: FormGroup;
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
  hotels: any;
  bookingArray = [];
  booking: any;
 

  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private authService:AuthService ,private hotelService:HotelService,private fb: FormBuilder ,private invoiceService: InvoiceService,private companyService: CompanyService,private toastr:ToastrService ,private visaService:VisaService ) { }

  ngOnInit() {
    
  this.getCompanies();
  this.getHotels();
  this.user =this.authService.getUser();
   this.hotelForm= new FormGroup(
         {
            number: new FormControl(''),
            bookingFrom: new FormControl('', [ Validators.required,]),
            bookingTo: new FormControl('', [ Validators.required,]),
            paymentMethod: new FormControl('', [ Validators.required,]),
            destination: new FormControl('', [ Validators.required,]),
            notes: new FormControl('', [ Validators.required,]),
            arrivalDate: new FormControl('', [ Validators.required,]),
            departureDate: new FormControl('', [ Validators.required,]),
            adultNumber: new FormControl('', [ Validators.required,]),
            childNumber: new FormControl('', [ Validators.required,]),
            hotelName:new FormControl('', [ Validators.required,]),

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
  // ---------------- Get hotels----------------
  getHotels(){
    this.hotelService.getHotels().subscribe({
      next: response => {
          this.hotels = response.data.docs;
      },
      error: err => {
          console.log(err);
      }
  });
}
  // ---------------- Get companienes----------------

  getCompanies(){
    this.companyService.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
      },
      error: err => {
          console.log(err);
      }
  });
}

  // ---------------- Add new traveller----------------

    addNewTraveller(){
      if(this.hotelForm.invalid){
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
        this.validateAllFormFields(this.hotelForm); // Triger postForm validation
      }else{
    this.booking= this.hotelForm.value;
   // console.log("this.booking" , this.booking); 
    var totalNetSellingPrice = 0;
    var totalNetCostPrice = 0 ;
    var totalNetComm = 0;
    var  totalReceivedAmount = 0;
    var  totalRemainingAmount =0;
   
    for (let i = 0; i < this.booking.travellers.length; i++) {
    this.bookingArray.push(this.booking.travellers[i]);
    //console.log("this.bookingArray" , this.bookingArray); 

    for (let i = 0; i < this.bookingArray.length; i++) {
      const sellingPrice = this.bookingArray[i].sellingPrice;
      const costPrice  = this.bookingArray[i].costPrice ;
      const comm = this.bookingArray[i].comm ;

      totalNetSellingPrice += parseInt(sellingPrice) ;
      totalNetCostPrice += parseInt(costPrice); 
      totalNetComm += parseInt(comm); 
      totalReceivedAmount += parseInt(this.bookingArray[i].receivedAmount);
      totalRemainingAmount +=parseInt(this.bookingArray[i].remainingAmount);

      this.hotelForm.patchValue({
        totalNetSellingPrice: totalNetSellingPrice,
        totalNetCostPrice: totalNetCostPrice,
        totalNetComm:totalNetComm,
        totalReceivedAmount:totalReceivedAmount,
        totalRemainingAmount:totalRemainingAmount,       
       });
      }
    }
  }

  // ----------------  Reset travellers array----------------

  const control = <FormArray>this.hotelForm.controls['travellers'];
        for(let i = control.length-1; i >= 0; i--) {
            control.reset(i)
    }
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
        receivedAmount: ['', [Validators.required]],
        remainingAmount: ['0', [Validators.required]],

    });
}

  // ---------------- Calculation----------------
  calculate(){
    for (let i = 0; i < this.hotelForm.value.travellers.length; i++) {
    const sellingPrice = this.hotelForm.value.travellers[i].sellingPrice;
    const costPrice  = this.hotelForm.value.travellers[i].costPrice ;
    const comm = this.hotelForm.value.travellers[i].comm ;
    const netCost = parseInt(costPrice) + parseInt(comm);

    this.hotelForm.patchValue({
     travellers: [{
      sellingPrice: sellingPrice,
      netCost: netCost,
      refundTicketUser:this.user,
      comm:comm,
      }]
   });
   const min = 0;
   const max =8000;
   this.num =  Math.floor(Math.random() * (max - min + 1)) + min;
   this.num.toString().padStart(6, "0");
  //  console.log( " this.num",this.num);
    this.hotelForm.patchValue({
    bookingUser:this.user,
    bookingTime:Date.now(),
    number:this.num
     });
    }
  }

   // ----------------  Submit new hotel booking----------------

   submitNewHotelBooking(hotelForm){
    console.log( "hotelForm .....",this.hotelForm.value);
    if (
      !this.hotelForm.get('bookingFrom').value ||
      !this.hotelForm.get('bookingTo').value ||
      !this.hotelForm.get('notes').value ||
      !this.hotelForm.get('destination').value 
      // !this.hotelForm.get('totalReceivedAmount').value ||
      // !this.hotelForm.get('totalNetSellingPrice').value ||
      // !this.hotelForm.get('totalRemainingAmount').value
      ){
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    }else{

this.hotelService.createHotelBooking(hotelForm.value , this.bookingArray).subscribe(
      res =>{
        this.hotelForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
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

// ----------------  Delete  Traveller----------------

deleteTraveller(traveller){
  let deletedTicket =  this.bookingArray.filter(a=> a.phoneNumber !== traveller.phoneNumber );
   this.bookingArray = deletedTicket;
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

