import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { HomeComponent } from './component/home/home.component';
import { MemberHomeComponent } from './component/member-home/member-home.component';
import { SubmitClaimComponent } from './component/submit-claim/submit-claim.component';
import { ViewClaimStatusComponent } from './component/view-claim-status/view-claim-status.component';
import { ViewBillDetailsComponent } from './component/view-bill-details/view-bill-details.component';
import { PolicyProviderDetailsComponent } from './component/policy-provider-details/policy-provider-details.component';
import { ViewClaimStatusResultComponent } from './component/view-claim-status-result/view-claim-status-result.component';
import { ViewBillDetailsResultComponent } from './component/view-bill-details-result/view-bill-details-result.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { PolicyProviderDetailsResultComponent } from './component/policy-provider-details-result/policy-provider-details-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[AuthGaurdService] },
  { path: 'home', component: HomeComponent,canActivate:[AuthGaurdService] },
  { path: 'memberHome', component: MemberHomeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'submitclaim', component: SubmitClaimComponent,canActivate:[AuthGaurdService] },
  { path: 'viewclaimstatus', component: ViewClaimStatusComponent,canActivate:[AuthGaurdService] },
  { path: 'viewclaimstatusresult', component: ViewClaimStatusResultComponent,canActivate:[AuthGaurdService] },
  { path: 'viewbilldetails', component: ViewBillDetailsComponent,canActivate:[AuthGaurdService] },
  { path: 'viewbilldetailsresult', component: ViewBillDetailsResultComponent,canActivate:[AuthGaurdService] },
  { path: 'policyproviderdetails', component: PolicyProviderDetailsComponent,canActivate:[AuthGaurdService] },
  { path: 'policyproviderdetailsresult', component: PolicyProviderDetailsResultComponent,canActivate:[AuthGaurdService] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
