
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight-tickets-invoices-list',
  templateUrl: './flight-tickets-invoices-list.component.html',
  styleUrls: ['./flight-tickets-invoices-list.component.scss']
})
export class FlightTicketsInvoicesListComponent implements OnInit {
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
  this.invoiceService.getFlightTicketsInvoices().subscribe(
    res =>{
      let data = res['data'];
      this.invoices = data.docs;
            var i;
            var total = 0;
            console.log("this.invoices" , this.invoices);
      // for (i = 0; i < this.invoices.length; i++) {
       
      //   total += this.invoices[i].bookingInfo.paymentInfo.totalPrice;
      //   this.totalEarings = total;
      //   console.log('totalEaringsklnhgutye >>>',this.totalEarings );
      //    }
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

