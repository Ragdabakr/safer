
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { HotelService } from 'app/shared/services/hotel.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { UserService } from 'app/shared/services/user.service';
import { VisaService } from 'app/shared/services/visa.service';
@Component({
  selector: 'app-hotel-invoice-booking',
  templateUrl: './hotel-invoice-booking.component.html',
  styleUrls: ['./hotel-invoice-booking.component.scss']
})
export class HotelInvoiceBookingComponent implements OnInit {
  invoiceId: string;
  invoice: any;
  companyAccount: any;

  constructor( private invoiceService: InvoiceService,private hotelService: HotelService,private userService:UserService, private route: ActivatedRoute,private flightTicketsService: FlightTicketsService,) { }

  ngOnInit() {
    this.invoiceId = this.route.snapshot.paramMap.get('id');
    console.log("this.invoiceId  >>" ,    this.invoiceId);

    this.hotelService.getInvoiceById(this.invoiceId).subscribe((data) => {
    this.invoice = data.data.doc;
    console.log("INVOICE  >>" ,    this.invoice );
    this.getCompanyAccount();
  
    });
  }
  getCompanyAccount(){
    this.userService.getCompanyAccount().subscribe((data) =>{
      debugger;
      this.companyAccount = data.data.docs;
      console.log("companyAccount  >>" ,    this.companyAccount );
      });
  }

}

