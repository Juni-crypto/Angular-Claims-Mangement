import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import { HomeComponent } from './component/home/home.component';
import { MemberHomeComponent } from './component/member-home/member-home.component';
import { SubmitClaimComponent } from './component/submit-claim/submit-claim.component';
import { ViewClaimStatusComponent } from './component/view-claim-status/view-claim-status.component';
import { ViewBillDetailsComponent } from './component/view-bill-details/view-bill-details.component';
import { PolicyProviderDetailsComponent } from './component/policy-provider-details/policy-provider-details.component';
import { ClaimDialogComponent } from './component/submit-claim/claim-dialog/claim-dialog.component';
import { ViewClaimStatusResultComponent } from './component/view-claim-status-result/view-claim-status-result.component';
import { ViewBillDetailsResultComponent } from './component/view-bill-details-result/view-bill-details-result.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { PolicyProviderDetailsResultComponent } from './component/policy-provider-details-result/policy-provider-details-result.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    MemberHomeComponent,
    SubmitClaimComponent,
    ViewClaimStatusComponent,
    ViewBillDetailsComponent,
    PolicyProviderDetailsComponent,
    PolicyProviderDetailsResultComponent,
    ClaimDialogComponent,
    ViewClaimStatusResultComponent,
    ViewBillDetailsResultComponent,
    AboutPageComponent,
    AdminPageComponent
  ],
  imports: [


  BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  entryComponents :[ClaimDialogComponent]
})
export class AppModule { }
