

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { ExportToCsv } from 'export-to-csv-file';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight-tickets-list',
  templateUrl: './flight-tickets-list.component.html',
  styleUrls: ['./flight-tickets-list.component.scss']
})
export class FlightTicketsListComponent implements OnInit {
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

  constructor(private authService:AuthService , private flightTicketsService: FlightTicketsService,private toastr:ToastrService , private invoiceService:InvoiceService ) { }

  ngOnInit() {
  this.user = this.authService.getUser();
  this.getTickets();
  this.getInvoices();
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
                //console.log("tickets >>>" ,this.tickets);
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
    title: 'تقرير العمولات',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['bookingFrom','number','departureDate','destination','cancel','paymentMethod','totalNetSellingPrice','totalRemainingAmount' , 'totalRemainingAmount' ] 
  };
const csvExporter = new ExportToCsv(options);
csvExporter.generateCsv(this.tickets);
}



}

