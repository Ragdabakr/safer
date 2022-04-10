

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit  ,ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { ExportToCsv } from 'export-to-csv-file';
import { ToastrService } from 'ngx-toastr';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-flight-tickets-list',
  templateUrl: './flight-tickets-list.component.html',
  styleUrls: ['./flight-tickets-list.component.scss']
})
export class FlightTicketsListComponent implements OnInit {
  @ViewChild('dt',{read: ''}) dt: any;
  Invoice :boolean = false;
  tickets = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  hotelForm: FormGroup;
  invoiceId: any;
  Invoices: any;
  user: any;
  travellers = [{ travellerFirstName: "travellerFirstName", travellerLastName: "travellerLastName" ,phoneNumber: "phoneNumber"}];
  constructor(private authService:AuthService ,private config: PrimeNGConfig,private translateService: TranslateService, private flightTicketsService: FlightTicketsService,private toastr:ToastrService , private invoiceService:InvoiceService ) { }

  ngOnInit() {
  this.user = this.authService.getUser();
  this.cols = [
    { field: "number", header: "رقم الحجز" },
    { field: "email", header: "الفاتورة" },
    { field: "travellers.length", header: "عدد المسافرين" },
    { field: this.travellers[0]["travellerFirstName"], header: "اسم المسافر" },
    { field: this.travellers[0]["travellerLastName"], header: "اسم العائلة" },
    { field: this.travellers[0]["phoneNumber"], header: "الهاتف " },
    { field: "departureDate", header: "تاريخ المغادرة" },
    { field: "destination", header: "الوجهة" },
    { field: "paymentMethod", header: "طريقة الدفع " },
    { field: "totalNetSellingPrice", header: "السعر الكلي" },
    { field: "totalReceivedAmount", header: " المبلغ الواصل " },
    { field: "totalRemainingAmount", header: " المبلغ المتبقي " },
    { field: "createdInvoice", header: "  اصدار فاتورة " },
    { field: "cancel", header: " حالة الفيزا  " },
    ];
  this.getTickets();
  this.getInvoices();
  this.config.setTranslation({
    dateIs: "التاريخ",
    dateIsNot: "جميع التواريخ ما عدا",
    dateBefore: "جميع النتائج قبل هذا التاريخ",
    dateAfter: "جميع النتائج بعد هذا التاريخ",
    clear: "الغاء",
    apply: "تنفيذ",
    matchAll: "جميع النتائج",
    matchAny: "بعض النتائج ",
    addRule: "تاريخ جديد",
    removeRule: "حذف التاريخ",
    //translations
});
this.translateService.setDefaultLang('en');
    }

    translate(lang: string) {
      this.translateService.use(lang);
      this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }

    getInvoices(){
        
      this.flightTicketsService.getflightTicketInvoices().subscribe({
        next: response => {
            this.Invoices = response.data.docs.reverse();
        },
        error: err => {
            console.log(err);
        }
    });
}

  getTickets(){
          this.flightTicketsService.getFlightTicketsList().subscribe({
            next: response => {
                this.tickets = response.data.docs.reverse();
                console.log("this.tickets" , this.tickets);
                this.tickets.forEach(ticket => ticket.createdAt = new Date(ticket.createdAt));
                this.tickets.forEach(ticketdate => ticketdate.departureDate = new Date(ticketdate.departureDate));
                this.tickets.forEach(ticketPhone => ticketPhone.phoneNumber = new Date(ticketPhone.phoneNumber));
            },
            error: err => {
                console.log(err);
            }
        });
  }

  getInvoice(ticket){
  const bookingId = ticket.id;
  this.flightTicketsService.createflightTicketInvoice(ticket).subscribe(
    res =>{
      let data = res['data'];
      this.invoiceId = data.data._id
      window.location.href = `/full-layout/full-pages/invoices/${this.invoiceId}`;
      },
      (error: HttpErrorResponse) =>{
        if(error.error.message === 'You do not have permission to perform this action'){
            this.toastr.error(' ليس لديك صلاحية طباعة فاتورة');
           }
    });
}
  
exportCSV(){
  const options = { 
      fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: ' تذاكر الطيران',
    useTextFile: false,
    useBom: true,
    headers: ['رقم الحجز','الاسم', 'اسم العائلة','الهاتف','عدد المسافرين','تاريخ المغادرة','الوجهة','طريقة الدفع','المبلغ الكلي','المبلغ الواصل' , 'المبلغ المتبقي' ] 
  };
const csvExporter = new ExportToCsv(options);
var data = this.tickets.map(u => ({ number: u.number,travellerFirstName:u.travellers[0].travellerFirstName,travellerLastName:u.travellers[0].travellerLastName ,phoneNumber:u.travellers[0].phoneNumber,travellers:u.travellers.length ,departureDate:u.departureDate
  ,destination:u.destination,paymentMethod:u.paymentMethod ,totalNetSellingPrice:u.totalNetSellingPrice   ,totalReceivedAmount:u.totalReceivedAmount   ,totalRemainingAmount:u.totalRemainingAmount  
}));
csvExporter.generateCsv(data);
}

myFilter(e){
  console.log("e" , e);
  this.dt.value.forEach((e)=>{
    e['travellerFirstName'] = e['travellers'][0]['travellerFirstName'];
  });
  this.dt.filterGlobal(e.target.value, 'contains');
  setTimeout(()=>{
    this.dt.value.forEach((e)=>{
    delete e['travellerFirstName'];
  });
  },500)

  this.dt.value.forEach((e)=>{
    e['travellerLastName'] = e['travellers'][0]['travellerLastName'];
  });
  this.dt.filterGlobal(e.target.value, 'contains');
  setTimeout(()=>{
    this.dt.value.forEach((e)=>{
    delete e['travellerLastName'];
  });
  },500)
  this.dt.value.forEach((e)=>{
    e['phoneNumber'] = e['travellers'][0]['phoneNumber'];
  });
  this.dt.filterGlobal(e.target.value, 'contains');
  setTimeout(()=>{
    this.dt.value.forEach((e)=>{
    delete e['phoneNumber'];
  });
  },500)
}


}

