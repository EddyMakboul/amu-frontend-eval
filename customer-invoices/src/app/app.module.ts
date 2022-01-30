import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';
import { InvoicesService } from './shared/services/invoices.service';
import { CustomersService } from './shared/services/customers.service';
import { CustomersListPageComponent } from './pages/customers-list-page/customers-list-page.component';
import { CustomerDetailsPageComponent } from './pages/customer-details-page/customer-details-page.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';

const routes: Routes = [
  {path: '', component: CustomersListPageComponent},
  {path: 'create', component: CustomerFormComponent },
  {path: ':id', component: CustomerDetailsPageComponent },
  {path: ':id/invoices/add', component:InvoiceFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    InvoiceFormComponent,
    CustomerDetailsPageComponent,
    CustomersListPageComponent,
    CustomersListComponent,
    InvoicesListComponent
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
