import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingHotelComponent } from './booking-hotel/booking-hotel.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxPrintModule } from 'ngx-print';
import { BookingHotelsComponent } from './booking-hotels/booking-hotels.component';
import { HotelInvoiceBookingComponent } from './hotel-invoice-booking/hotel-invoice-booking.component';
import { CancelHotelComponent } from './cancel-hotel/cancel-hotel.component';

@NgModule({
  declarations: [HotelsComponent, BookingHotelComponent, BookingHotelsComponent, HotelInvoiceBookingComponent, CancelHotelComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    NgxPrintModule,
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class HotelsModule { }
