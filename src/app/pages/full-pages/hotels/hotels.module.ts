import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class HotelsModule { }
