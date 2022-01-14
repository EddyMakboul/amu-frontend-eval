import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/models/customer.type';
import { Invoices } from '../shared/models/invoice.type';
import { CustomersService } from '../shared/services/customers.service';
import { InvoicesService } from '../shared/services/invoices.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  invoices: Invoices;

  constructor(private customersService: CustomersService,
    private route: ActivatedRoute,
    private invoicesService: InvoicesService) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.customersService.findOne(id).subscribe( customer => {
      console.log(customer[0])
      this.customer = customer[0];
    })

    this.invoicesService.findAllByCustomerId(id).subscribe( invoices => {
      this.invoices =invoices;
    })
  }

}
