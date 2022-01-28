import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices = [];
  cols: { field: string; header: string; }[];
  totalEarings: any;

  constructor(
    private tourService: TourService, private invoiceService: InvoiceService,private toastr:ToastrService
    ) { }

  ngOnInit() {

    this.getInvoices();
    this.cols = [
      { field: 'number', header: 'رقم الفاتورة ' },
      { field: 'createdAt', header: 'وقت الانشاء' },
      // { field: 'bookingInfo.contactInfo.fullName', header: ' اسم المسافر' },
  ];
  }

// Get Invoices
getInvoices(){
  this.invoiceService.getInvoices().subscribe(
    res =>{
      let data = res['data'];
      this.invoices = data.docs;
            var i;
            var total = 0;
      for (i = 0; i < this.invoices.length; i++) {
       
        total += this.invoices[i].bookingInfo.paymentInfo.totalPrice;
        this.totalEarings = total;
        console.log('totalEaringsklnhgutye >>>',this.totalEarings );
         }
         return total;
      },
      err =>{
      console.log(err);
    }
  )
}

deleteInvoice(invoiceId){
  this.invoiceService.deleteInvoice(invoiceId).subscribe((tour) => {
    this.toastr.success('تم  حذف الفاتورة بنجاح ');
    this.getInvoices();
     });
}

}
