import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SearchComponent } from "./search/search.component";
import { FacilityComponent } from "./facility/facility.component";
import { BookingComponent } from "./booking/booking.component";
import { CustomerInfoComponent } from "./customer-info/customer-info.component";
import { PaymentComponent } from "./payment/payment.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "", component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SearchComponent,
    FacilityComponent,
    BookingComponent,
    CustomerInfoComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
