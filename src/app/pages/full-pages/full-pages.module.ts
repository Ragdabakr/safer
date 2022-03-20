import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { HorizontalTimelineComponent } from './timeline/horizontal/component/horizontal-timeline.component';
import { VerticalTimelinePageComponent } from "./timeline/vertical/vertical-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';
import { TagInputModule } from 'ngx-chips';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { ToursModule } from './tours/tours.module';
import { UsersModule } from './users/users.module';
import { UsersComponent } from './users/users.component';
import { FullPagesComponent } from './full-pages.component';
import { TravellersComponent } from './travellers/travellers/travellers.component';
import { GuidesComponent } from './guides/guides.component';
import { BookingModule } from './booking/booking.module';
import { ReportsModule } from './reports/reports.module';
import { HotelsModule } from './hotels/hotels.module';
import { TransportsModule } from './transports/transports.module';
import { AccountSettingModule } from './account-setting/account-setting.module';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { TableModule } from 'primeng/table';
import {NgxPrintModule} from 'ngx-print';
import { UsersRoutingModule } from './users/users-routing.modules';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { TravelAgentsModule } from './travel-agents/travel-agents.module';
import { FlightTicketsComponent } from './flight-tickets/flight-tickets.component';
import { flightTicketsModule } from './flight-tickets/flight-tickets.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';

import { SafeBoxComponent } from './safe-box/safe-box.component';
import { BondsComponent } from './bonds/bonds.component';
import { BondsInvoiceComponent } from './bonds/bonds-invoice/bonds-invoice.component';
import { BookingVisaComponent } from './visa/booking-visa/booking-visa.component';
import { VisaListComponent } from './visa/visa-list/visa-list.component';
import { VisaInvoiceComponent } from './visa/visa-invoice/visa-invoice.component';
import { CancelVisaComponent } from './visa/cancel-visa/cancel-visa.component';
import { BudgetComponent } from './budget/budget.component';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        FormsModule,
        ChartistModule,
        AgmCoreModule,
        TableModule,
        NgbModule,
        Ng2SmartTableModule,
        FileUploadModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        QuillModule,
        TagInputModule,
        HttpModule,
        NgSelectModule,
        SharedModule,
        ArchwizardModule,
        ToursModule,
        UsersModule,
        BookingModule,
        ReportsModule,
        HotelsModule,
        TransportsModule,
        AccountSettingModule,
        NgxPrintModule,
        UsersRoutingModule,
        ToolbarModule,
        TableModule,
        DialogModule,
        TravelAgentsModule,
        flightTicketsModule,
        AccountModule,
        Ng2TelInputModule,


    ],
    declarations: [
        GalleryPageComponent,
        InvoicePageComponent,
        HorizontalTimelinePageComponent,
        HorizontalTimelineComponent,
        VerticalTimelinePageComponent,
        UserProfilePageComponent,
        SearchComponent,
        FaqComponent,
        KnowledgeBaseComponent,
        FullPagesComponent,
        UsersComponent,
        TravellersComponent,
        GuidesComponent,
        InvoiceListComponent,
        FlightTicketsComponent,
        SafeBoxComponent,
        BondsComponent,
        BondsInvoiceComponent,
        BookingVisaComponent,
        VisaListComponent,
        VisaInvoiceComponent,
        CancelVisaComponent,
        BudgetComponent,
        



        
    ]
})
export class FullPagesModule { }
