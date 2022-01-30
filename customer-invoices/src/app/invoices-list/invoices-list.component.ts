import { Component, Input, OnInit } from '@angular/core';
import { Invoices } from '../shared/types/invoice.type';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  @Input()
  invoices:Invoices

  constructor() { }

  ngOnInit(): void {
  }

}
