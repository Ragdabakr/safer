import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceId: string;
  invoice: any;
  companyAccount: any;

  constructor( private invoiceService: InvoiceService,private userService:UserService, private route: ActivatedRoute,private flightTicketsService: FlightTicketsService,) { }

  ngOnInit() {
    this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    console.log("this.invoiceId  >>" ,    this.invoiceId);

    this.flightTicketsService.getInvoiceById(this.invoiceId).subscribe((data) => {
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
