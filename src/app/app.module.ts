import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { NgxCountriesModule } from '@ngx-countries/core';
import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";


import { DragulaService } from "ng2-dragula";
import { ContentPagesModule } from './pages/content-pages/content-pages.module';
import { TokenInterceptor } from './pages/content-pages/token.interceptor';
import { AuthService } from "./shared/auth/auth.service";
import { AuthGuard } from "./shared/auth/auth-guard.service";

import { UserService } from './shared/services/user.service';


import { InvoiceService } from "./shared/services/invoice.service";
import {Ng2TelInputModule} from 'ng2-tel-input';
import { FullPagesModule } from "./pages/full-pages/full-pages.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/content-pages/login/login-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterService, PrimeNGConfig } from "primeng/api";





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}



@NgModule({
    declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent ],
    imports: [
        BrowserAnimationsModule,
        Ng2TelInputModule,
        StoreModule.forRoot({}),
        SharedModule,
        HttpClientModule,
       // FullPagesModule,
      // DashboardModule,
      // ContentPagesModule,
        AppRoutingModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        NgxCountriesModule.forRoot({
            locales: ['en', 'ar']
          }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCERobClkCv1U4mDijGm1FShKva_nxsGJY"
        }),
        PerfectScrollbarModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule
        
    ],
    providers: [
        UserService,
        AuthService,
        AuthGuard,
        DragulaService,
        FilterService,
        PrimeNGConfig,
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        }, //send token to header
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Function not implemented.");
}

