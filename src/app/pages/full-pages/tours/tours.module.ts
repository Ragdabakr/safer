import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';
import { TagInputModule } from 'ngx-chips';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpModule } from '@angular/http';
import { ArchwizardModule } from 'angular-archwizard';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { DialogModule} from 'primeng/dialog';
import { AgmCoreModule } from '@agm/core';


import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ToursRoutingModule } from './tours-routing.module';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { TourListComponent } from './tour-list/tour-list.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [CreateTourComponent, TourListComponent, EditTourComponent ],
  imports: [
    CommonModule,
       ToursRoutingModule,
      FormsModule,
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
      ToolbarModule,
      TableModule,
      DialogModule,
      AgmCoreModule,
      NgxPrintModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ToursModule { }
