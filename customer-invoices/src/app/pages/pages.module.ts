import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListPageComponent } from './customers-list-page/customers-list-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';



@NgModule({
  declarations: [
    CustomersListPageComponent,
    CustomerDetailsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
