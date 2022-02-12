import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BondService } from 'app/shared/services/bond.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-bonds-invoice',
  templateUrl: './bonds-invoice.component.html',
  styleUrls: ['./bonds-invoice.component.scss']
})
export class BondsInvoiceComponent implements OnInit {
  invoiceId: string;
  invoice: any;
  companyAccount: any;

  constructor(private bondService: BondService,private route: ActivatedRoute,private invoiceService: InvoiceService,private userService:UserService) { }

  ngOnInit() {
    this. getCompanyAccount();
    
   this.invoiceId = this.route.snapshot.paramMap.get('bondId');

   this.bondService.getBondeInvoice(this.invoiceId).subscribe((data) => {
   this.invoice = data.data.data;
   console.log("this.invoice >>" ,    this.invoice );
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
