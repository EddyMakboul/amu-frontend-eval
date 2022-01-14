import { Component, Input, OnInit } from '@angular/core';
import { Customers } from '../shared/models/customer.type';

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
