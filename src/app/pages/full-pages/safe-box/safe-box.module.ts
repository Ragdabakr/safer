import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeBoxComponent } from './safe-box.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    SafeBoxComponent,
  ],
  imports: [
    CommonModule,
    NgxPrintModule,
  ]
})
export class SafeBoxModule { }
