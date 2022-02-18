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


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.modules';
import { RolesComponent } from './roles/roles.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [CreateUserComponent, UsersListComponent, RolesComponent],
  imports: [
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
   NgxPrintModule,
  ]
})
export class UsersModule { }
