import { Component, OnInit } from '@angular/core';
import { Customer, Customers } from '../shared/models/customer.type';
import { CustomersService } from '../shared/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers : Customers = [];

  constructor(private customersService : CustomersService) { }

  ngOnInit(): void {
    this.customersService.findAll().subscribe( (customers) => {
      this.customers = customers;
    })
  }


}
