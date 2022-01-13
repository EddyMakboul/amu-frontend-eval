import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/models/customer.type';
import { CustomersService } from '../shared/services/customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer?: Customer;

  constructor(private customersService: CustomersService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.customersService.findOne(id).subscribe( customer => {
      console.log(customer[0])
      this.customer = customer[0];
    })
  }

}
