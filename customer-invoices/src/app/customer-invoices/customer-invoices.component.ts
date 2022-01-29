import { Component, Input, OnInit } from '@angular/core';
import { Invoices } from '../shared/types/invoice.type';

@Component({
  selector: 'app-customer-invoices',
  templateUrl: './customer-invoices.component.html',
  styleUrls: ['./customer-invoices.component.css']
})
export class CustomerInvoicesComponent implements OnInit {

  @Input()
  invoices:Invoices

  constructor() { }

  ngOnInit(): void {
  }

}
