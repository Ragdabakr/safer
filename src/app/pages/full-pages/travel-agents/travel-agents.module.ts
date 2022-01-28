import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelAgentsRoutingModule } from './travel-agents-routing.module';
import { TravelAgentsComponent } from './travel-agents/travel-agents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { UsersRoutingModule } from '../users/users-routing.modules';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'app/shared/shared.module';
import { HttpModule } from '@angular/http';
import { ArchwizardModule } from 'angular-archwizard';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [TravelAgentsComponent],
  imports: [
    CommonModule,
    TravelAgentsRoutingModule,
    UsersRoutingModule,
    CommonModule,
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
  ]
})
export class TravelAgentsModule { }
