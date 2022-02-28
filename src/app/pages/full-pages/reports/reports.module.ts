import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ReportsRoutingModule } from './reports-routing.module';
import { ToursReportComponent } from './tours-report/tours-report.component';
import { BookingsReportComponent } from './bookings-report/bookings-report.component';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';
import { GroupsReportComponent } from './groups-report/groups-report.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { GroupReportComponent } from './group-report/group-report.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [ToursReportComponent, BookingsReportComponent, GroupsReportComponent, GroupReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CommonModule,
    ChartistModule,
    NgbModule,
    MatchHeightModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpModule,
    NgSelectModule,
    SharedModule,
    ArchwizardModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    AgmCoreModule,
    TableModule,
    DialogModule,
    AgmCoreModule,
    NgxPrintModule,
  
      
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReportsModule { }
