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
import {Ng2TelInputModule} from 'ng2-tel-input';



import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { AccountComponent } from './account.component';
import { CompaniesComponent } from './companies/companies.component';
import { AccountsBalanceComponent } from './accounts-balance/accounts-balance.component';





@NgModule({
  declarations: [ AccountComponent, CompaniesComponent, AccountsBalanceComponent],
  imports: [
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
    AgmCoreModule,
    Ng2TelInputModule,


],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AccountModule { }