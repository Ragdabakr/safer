import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';

import { NgxCountriesModule } from '@ngx-countries/core';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // for tabs
import { AccountSettingsRoutingModule } from './account/account-setting-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProfileComponent } from './profile/profile.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [AccountComponent, ProfileComponent],
  imports: [
    AccountSettingsRoutingModule,
    CommonModule,
    NgbModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    FileUploadModule,
    NgxCountriesModule.forRoot({
      locales: ['en']
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AccountSettingModule { }
