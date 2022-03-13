
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { HotelService } from 'app/shared/services/hotel.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { VisaService } from 'app/shared/services/visa.service';
import { ExportToCsv } from 'export-to-csv-file';
import { ToastrService } from 'ngx-toastr';
import { PrimeNGConfig } from 'primeng/api';



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

  constructor(private authService:AuthService ,private config: PrimeNGConfig,private translateService: TranslateService,private flightTicketsService: FlightTicketsService,private hotelService: HotelService,private toastr:ToastrService , private invoiceService:InvoiceService ) { }

  ngOnInit() {
  this.getHotelBookings();
  // this.getInvoices();
  this.user =this.authService.getUser();
  this.config.setTranslation({
    dateIs: "التاريخ",
    dateIsNot: "جميع التواريخ ما عدا",
    dateBefore: "جميع النتائج بعد هذا التاريخ",
    dateAfter: "جميع النتائج قبل هذا التاريخ",
    clear: "الغاء",
    apply: "تنفيذ",
    matchAll: "جميع النتائج",
    matchAny: "بعض النتائج ",
    addRule: "تاريخ جديد",
    removeRule: "حذف التاريخ",
    //translations
});
this.translateService.setDefaultLang('en');


  // this.config.filterMatchModeOptions = {
  //   date: [
  //       FilterMatchMode.DATE_IS,
  //       FilterMatchMode.DATE_IS_NOT,
  //       FilterMatchMode.DATE_BEFORE,
  //       FilterMatchMode.DATE_AFTER
  //   ]
  //    }
    }

    translate(lang: string) {
      this.translateService.use(lang);
      this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
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
    title: 'تقرير جوزات الفنادق',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['number','destination','cancel','paymentMethod','totalNetSellingPrice','totalRemainingAmount' , 'totalRemainingAmount','guestName','phoneNumber','arrivalDate','departureDate','hotelName','roomType' ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.hotels);
}



}

