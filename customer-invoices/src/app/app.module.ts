import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';
import { InvoicesService } from './shared/services/invoices.service';
import { CustomersService } from './shared/services/customers.service';
import { CustomersListPageComponent } from './pages/customers-list-page/customers-list-page.component';
import { CustomerDetailsPageComponent } from './pages/customer-details-page/customer-details-page.component';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';

const routes: Routes = [
  {path: '', component: CustomersListPageComponent},
  {path: 'create', component: CreateCustomerComponent },
  {path: ':id', component: CustomerDetailsPageComponent },
  {path: ':id/invoices/add', component:CreateInvoiceComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CreateInvoiceComponent,
    CustomerDetailsPageComponent,
    CustomersListPageComponent,
    CustomersListComponent,
    CustomerInvoicesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ],
  providers: [InvoicesService,CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
