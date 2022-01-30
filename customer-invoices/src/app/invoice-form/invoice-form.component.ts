import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../shared/types/invoice.type';
import { InvoicesService } from '../shared/services/invoices.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  invoice: Invoice;
  id:number;

  constructor(private invoicesService: InvoicesService,
    private router: Router,
    private route: ActivatedRoute) { }

  form = new FormGroup({
    amount: new FormControl((''),Validators.required),
    status: new FormControl((''),Validators.required),
  });
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  hasError(): boolean{
    return !this.form.valid;
  }

  onSubmit(){
    this.invoice = this.form.value;
    this.invoice.id_customer = this.id;

    this.invoicesService.create(this.form.value).subscribe( (invoice)=> {
      this.router.navigate(['/',this.id]);
    })
  }

}
