import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../shared/models/invoice.type';
import { InvoicesService } from '../shared/services/invoices.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  invoice: Invoice;
  id:number;

  constructor(private invoicesService: InvoicesService,
    private router: Router,
    private route: ActivatedRoute) { }

  form = new FormGroup({
    amount: new FormControl(),
    status: new FormControl(),
  });
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit(){
    this.invoice = this.form.value;
    this.invoice.id_customer = this.id;
    console.log(this.invoice)

    this.invoicesService.create(this.form.value).subscribe( (invoice)=> {
      this.router.navigate(['/',this.id]);
    })
  }

}
