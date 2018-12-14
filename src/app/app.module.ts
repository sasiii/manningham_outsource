import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MaterialcomponentsModule } from './materialcomponets';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';



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
import { SearchResultComponent } from './search-result/search-result.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const appRoutes: Routes = [
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: BookingSearchComponent },
  // { path: "", component: LoginComponent }
  { path: "search-result", component: SearchResultComponent },
  { path: "payment", component: PaymentComponent },
  { path: "booking-details", component: BookingDetailsComponent }

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
    FooterComponent,
    SearchResultComponent,
    BookingSearchComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MaterialcomponentsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
