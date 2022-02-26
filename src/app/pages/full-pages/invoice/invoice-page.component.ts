import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { DomSanitizer } from "@angular/platform-browser";  // used to appear images in printed
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'app/shared/services/user.service';


@Component({
    selector: 'app-invoice-page',
    templateUrl: './invoice-page.component.html',
    styleUrls: ['./invoice-page.component.scss']
})

export class InvoicePageComponent implements OnInit {
    invoices = [];
    cols: { field: string; header: string; }[];
    invoiceId: any;
    invoice:any;
  companyAccount: any;
  
    constructor(
      private tourService: TourService, private invoiceService: InvoiceService, private route: ActivatedRoute,
      private router: Router,private sanitizer: DomSanitizer ,private toastr:ToastrService, private userService:UserService
      ) { }
  
    ngOnInit() {
   this.getCompanyAccount();
   this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
   this.invoiceService.getInvoiceById(this.invoiceId).subscribe((tour) => {
   this.invoice = tour.data.doc;
   console.log("singleInvoice" , this.invoice);
    });
    }

    getCompanyAccount(){
      this.userService.getCompanyAccount().subscribe((data) =>{
        this.companyAccount = data.data.docs;
        });
    }

   

}
