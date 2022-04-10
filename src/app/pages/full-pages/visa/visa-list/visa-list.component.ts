
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { VisaService } from 'app/shared/services/visa.service';
import { ExportToCsv } from 'export-to-csv-file';
import { ToastrService } from 'ngx-toastr';
import { Component,
  ViewChild,
  AfterViewInit,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-visa-list',
  templateUrl: './visa-list.component.html',
  styleUrls: ['./visa-list.component.scss']
})
export class VisaListComponent implements OnInit {
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
  visas =[];
  user: string;
  travellers = [{ travellerFirstName: "travellerFirstName", travellerLastName: "travellerLastName" }];

  constructor(private authService:AuthService , private flightTicketsService: FlightTicketsService,private visaService: VisaService,private toastr:ToastrService , private invoiceService:InvoiceService )
   {}

 



  ngOnInit() {
  this.getInvoices();

  this.cols = [
    { field: "number", header: "رقم الحجز" },
    { field: "email", header: "الفاتورة" },
    { field: "travellers.length", header: "عدد المسافرين" },
    { field: this.travellers[0]["travellerFirstName"], header: "اسم المسافر" },
    { field: this.travellers[0]["travellerLastName"], header: "اسم العائلة" },
    { field: "destination", header: "الوجهة" },
    { field: "paymentMethod", header: "طريقة الدفع " },
    { field: "totalNetSellingPrice", header: "السعر الكلي" },
    { field: "totalReceivedAmount", header: " المبلغ الواصل " },
    { field: "totalRemainingAmount", header: " المبلغ المتبقي " },
    { field: "createdInvoice", header: "  اصدار فاتورة " },
    { field: "cancel", header: " حالة الفيزا  " },
    ];
  this.user =this.authService.getUser();
  this.visaService.getVisasList().subscribe({
    next: response => {
        this.visas = response.data.docs.reverse();
   
        for (let i = 0; i < this.visas.length; i++) {
          this.travellers = this.visas[i].travellers;
          console.log("travellersiuyiy >>>" ,this.travellers);
          console.log("visas >>>" ,this.visas);
      
          
        }
    },
    error: err => {
        console.log(err);
    }
   });
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
}

  getVisas(){
        
          this.visaService.getVisasList().subscribe({
            next: response => {
                this.visas = response.data.docs.reverse();
                this.travellers = response.data.docs.travellers
                console.log("travellers >>>" ,this.travellers);
                console.log("visas >>>" ,this.visas);
            },
            error: err => {
                console.log(err);
            }
        });
  }

  getInvoice(ticket){
  const bookingId = ticket.id;
  this.visaService.createVisaInvoice(ticket).subscribe(
    res =>{
      let data = res['data'];
      this.invoiceId = data.data._id
      window.location.href = `/full-layout/full-pages/visas/${this.invoiceId}`;
      },
      (error: HttpErrorResponse) =>{
        if(error.error.message === 'You do not have permission to perform this action'){
            this.toastr.error(' ليس لديك صلاحية طباعة فاتورة');
           }
    });
}

// myFilter(e){
//   this.dt.value.forEach((e)=>{
//     e['travellerFirstName'] = e['travellers'][0]['travellerFirstName'];
//   });
//   this.dt.filterGlobal(e.target.value, 'contains');
//   setTimeout(()=>{
//     this.dt.value.forEach((e)=>{
//     delete e['travellerFirstName'];
//   });
//   },500)
// }
  
exportCSV(){
  const options = { 
      fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: '  التأشيرات',
    useTextFile: false,
    useBom: true,
    headers: ['رقم الحجز','الاسم', 'اسم العائلة','الهاتف','عدد المسافرين','الوجهة','طريقة الدفع','المبلغ الكلي','المبلغ الواصل' , 'المبلغ المتبقي' ] 
  };
const csvExporter = new ExportToCsv(options);
var data = this.visas.map(u => ({ number: u.number,travellerFirstName:u.travellers[0].travellerFirstName,travellerLastName:u.travellers[0].travellerLastName ,phoneNumber:u.travellers[0].phoneNumber,travellers:u.travellers.length ,
  destination:u.destination,paymentMethod:u.paymentMethod ,totalNetSellingPrice:u.totalNetSellingPrice   ,totalReceivedAmount:u.totalReceivedAmount   ,totalRemainingAmount:u.totalRemainingAmount  
}));
csvExporter.generateCsv(data);
}



}

