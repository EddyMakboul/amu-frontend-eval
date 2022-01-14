import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer.type';
import { Invoices } from 'src/app/shared/models/invoice.type';
import { CustomersService } from 'src/app/shared/services/customers.service';
import { InvoicesService } from 'src/app/shared/services/invoices.service';

@Component({
  selector: 'app-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.css']
})
export class CustomerDetailsPageComponent implements OnInit {
  customer: Customer;
  invoices: Invoices;
  id: number;

  constructor(private customersService: CustomersService,
    private route: ActivatedRoute,
    private invoicesService: InvoicesService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))

    this.customersService.findOne(this.id).subscribe( customer => {
      console.log(customer[0])
      this.customer = customer[0];
    })

    this.invoicesService.findAllByCustomerId(this.id).subscribe( invoices => {
      this.invoices =invoices;
    })
  }

  redirect(): void {
    this.router.navigate(['/',this.id,'/invoices/add'])
  }

}
