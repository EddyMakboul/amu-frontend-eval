import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

const routes: Routes = [
  {path: '', component: CustomersListComponent},
  {path: 'create', component: CreateCustomerComponent },
  {path: ':id', component: CustomerDetailComponent },
  {path: ':id/invoices/add', component:CreateInvoiceComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomersListComponent,
    CustomerDetailComponent,
    CreateInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
