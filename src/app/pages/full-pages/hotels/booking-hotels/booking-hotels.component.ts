
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { HotelService } from 'app/shared/services/hotel.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { VisaService } from 'app/shared/services/visa.service';
import { ExportToCsv } from 'export-to-csv-file';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booking-hotels',
  templateUrl: './booking-hotels.component.html',
  styleUrls: ['./booking-hotels.component.scss']
})
export class BookingHotelsComponent implements OnInit {

  Invoice :boolean = false;
  tickets = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  hotelForm: FormGroup;
  invoiceId: any;
  Invoices: any;
  visas: any;
  user: string;
  hotels: any;

  constructor(private authService:AuthService ,private flightTicketsService: FlightTicketsService,private hotelService: HotelService,private toastr:ToastrService , private invoiceService:InvoiceService ) { }

  ngOnInit() {
  this.getHotelBookings();
  // this.getInvoices();
  this.user =this.authService.getUser();

  // this.config.filterMatchModeOptions = {
    // date: [
    //     FilterMatchMode.DATE_IS,
    //     FilterMatchMode.DATE_IS_NOT,
    //     FilterMatchMode.DATE_BEFORE,
    //     FilterMatchMode.DATE_AFTER
    // ]
    //  }
    }



  getHotelBookings(){
          this.hotelService.getHotelsList().subscribe({
            next: response => {
                this.hotels = response.data.docs.reverse();
                this.hotels.forEach(hotelBooking => hotelBooking.arrivalDate = new Date(hotelBooking.arrivalDate));
                console.log("hotels" ,this.hotels);
            },
            error: err => {
                console.log("lkjhgf",err);
            }
        });
  }

  getInvoice(hotelBooking){
  this.hotelService.createHotelInvoice(hotelBooking).subscribe(
    res =>{
      let data = res['data'];
      this.invoiceId = data.data._id
      window.location.href = `/full-layout/full-pages/hotels/${this.invoiceId}`;
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
    title: 'تقرير ؛جوزات الفنادق',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['bookingFrom','number','departureDate','destination','cancel','paymentMethod','totalNetSellingPrice','totalRemainingAmount' , 'totalRemainingAmount' ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.tickets);
}



}

