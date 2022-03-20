import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransportsRoutingModule } from './transports-routing.module';
import { TransportsComponent } from './transports/transports.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [TransportsComponent],
  imports: [
    CommonModule,
    TransportsRoutingModule, 
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
  ]
})
export class TransportsModule { }
