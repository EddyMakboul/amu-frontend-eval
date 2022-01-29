import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/shared/types/customer.type';
import { CustomersService } from 'src/app/shared/services/customers.service';

@Component({
  selector: 'app-customers-list-page',
  templateUrl: './customers-list-page.component.html',
  styleUrls: ['./customers-list-page.component.css']
})
export class CustomersListPageComponent implements OnInit {

  customers : Customers = [];
 
  constructor(private customersService : CustomersService) { }

  ngOnInit(): void {
    this.customersService.findAll().subscribe( (customers) => {
      this.customers = customers;
    })
  }

}
