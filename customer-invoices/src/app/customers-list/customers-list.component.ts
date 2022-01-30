import { Component, Input } from '@angular/core';
import { Customers } from '../shared/types/customer.type';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  @Input()
  customers : Customers;

  constructor() { }


}
