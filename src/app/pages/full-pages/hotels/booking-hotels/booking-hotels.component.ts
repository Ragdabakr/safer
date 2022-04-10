
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
  @ViewChild('dt',{read: ''}) dt: any;
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
  travellers = [{ guestName: "guestName", phoneNumber: "phoneNumber" }];

  constructor(private authService:AuthService ,private config: PrimeNGConfig,private translateService: TranslateService,private flightTicketsService: FlightTicketsService,private hotelService: HotelService,private toastr:ToastrService , private invoiceService:InvoiceService ) { }

  ngOnInit() {
    this.cols = [
      { field: "number", header: "رقم الحجز" },
      { field: "email", header: "الفاتورة" },
      { field: this.travellers[0]["guestName"], header: "اسم النزيل" },
      { field: this.travellers[0]["phoneNumber"], header: "الهاتف " },
      { field: "hotelName", header: "اسم الفندق" },
      { field: "arrivalDate", header: " تاريخ الوصول " },
      { field: "departureDate", header: " تاريغ المغادرة" },
      { field: "adultNumber", header: "  عدد البالغين " },
      { field: "childNumber", header: "  عدد الاطفال " },
      { field: "roomType", header: "   نوع الغرفة " },
      { field: "destination", header: " الوجهة   " },
      { field: "paymentMethod", header: "  طريقة الدفع " },
      { field: "totalNetSellingPrice", header: " المبلغ الكلي " },
      { field: "totalReceivedAmount", header: "   المبلغ المدفوع " },
      { field: "totalRemainingAmount", header: "  المبلغ المتبقي  " },
      { field: "", header: "  اصدار فاتورة " },
      { field: "cancel", header: " حالة الحجز  " },
      ];
  this.getHotelBookings();
  // this.getInvoices();
  this.user =this.authService.getUser();
  this.config.setTranslation({
    dateIs: "التاريخ",
    dateIsNot: "جميع التواريخ ما عدا",
    dateBefore: "جميع النتائج قبل هذا التاريخ",
    dateAfter: "جميع النتائج بعد هذا التاريخ",
    clear: "الغاء",
    apply: "تنفيذ",
    matchAll: "جميع النتائج",
    matchAny: "بعض النتائج ",
    addRule: "تاريخ جديد",
    removeRule: "حذف التاريخ",
    //translations
});
this.translateService.setDefaultLang('en');
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
    headers: ['رقم الحجز','اسم النزيل','الهاتف','اسم الفندق','تاريخ الوصول','تاريخ المغادرة' , 'عدد البالغين','عدد الاطفال','نوع الغرفة','الوجهة','طريقة الدفع','المبلغ الكلي','المبلغ المدفوع','المبلغ المتبقي' ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
var data = this.hotels.map(u => ({ number: u.number,guestName:u.travellers[0].guestName,phoneNumber:u.travellers[0].phoneNumber ,hotelName:u.hotelName.name,arrivalDate:u.arrivalDate ,
  departureDate:u.departureDate,adultNumber:u.adultNumber , childNumber:u.childNumber , roomType:u.travellers[0].roomType, destination:u.destination,paymentMethod:u.paymentMethod ,totalNetSellingPrice:u.totalNetSellingPrice,totalReceivedAmount:u.totalReceivedAmount   ,totalRemainingAmount:u.totalRemainingAmount ,
}));
csvExporter.generateCsv(data);
}


myFilter(e){
  this.dt.value.forEach((e)=>{
    e['guestName'] = e['travellers'][0]['guestName'];
  });
  this.dt.filterGlobal(e.target.value, 'contains');
  setTimeout(()=>{
    this.dt.value.forEach((e)=>{
    delete e['guestName'];
  });
  },500)

  this.dt.value.forEach((e)=>{
    e['phoneNumber'] = e['travellers'][0]['phoneNumber'];
  });
  this.dt.filterGlobal(e.target.value, 'contains');
  setTimeout(()=>{
    this.dt.value.forEach((e)=>{
    delete e['phoneNumber'];
  });
  },500)
}

}

