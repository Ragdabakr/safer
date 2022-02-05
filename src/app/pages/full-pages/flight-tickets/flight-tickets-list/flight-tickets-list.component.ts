

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight-tickets-list',
  templateUrl: './flight-tickets-list.component.html',
  styleUrls: ['./flight-tickets-list.component.scss']
})
export class FlightTicketsListComponent implements OnInit {

  tickets = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  hotelForm: FormGroup;
  invoiceId: any;

  constructor( private flightTicketsService: FlightTicketsService,private toastr:ToastrService , private invoiceService:InvoiceService ) { }

  ngOnInit() {
  this.getTickets();
        this.cols = [
          { field: 'name', header: 'اسم الفندق ' },
          { field: 'phone', header: 'الهاتف' },
          { field: 'city', header: ' المدينة' },
      ];
    
  
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

  getInvoice(ticket){

  const bookingId = ticket.id;
  const data = {
    bookingInfo : bookingId
  }
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
  



}

