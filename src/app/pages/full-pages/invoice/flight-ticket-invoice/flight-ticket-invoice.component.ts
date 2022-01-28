

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { DomSanitizer } from "@angular/platform-browser";  // used to appear images in printed
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-flight-ticket-invoice',
  templateUrl: './flight-ticket-invoice.component.html',
  styleUrls: ['./flight-ticket-invoice.component.scss']
})
export class FlightTicketInvoiceComponent implements OnInit {
    invoices = [];
    cols: { field: string; header: string; }[];
    invoiceId: any;
    invoice: any;
  flightTicketInfo: any;
  totalPrice:any;
  travellers: any;
  ticketPriceP;

  
    constructor(
      private tourService: TourService, private invoiceService: InvoiceService, private route: ActivatedRoute,
      private router: Router,private sanitizer: DomSanitizer ,private toastr:ToastrService
      ) { }
  
    ngOnInit() {

   this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');

   this.invoiceService.getFlightInvoiceById(this.invoiceId).subscribe((data) => {
   this.invoice = data.data.doc;
   console.log("INVOICE  >>" ,    this.invoice );
   this.flightTicketInfo = this.invoice.flightTicketInfo;
   this.travellers =  this.flightTicketInfo.travellers;

    this.ticketPriceP =  this.invoice.totalPrice;
    console.log("this.ticketPriceP   >>" ,    this.ticketPriceP  );
    });
  }
}
  

   



