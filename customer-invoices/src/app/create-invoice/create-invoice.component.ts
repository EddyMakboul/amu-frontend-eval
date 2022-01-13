import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoicesService } from '../shared/services/invoices.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor(private invoicesService: InvoicesService,
    private router: Router,
    private route: ActivatedRoute) { }

  form = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl()
  });
  ngOnInit(): void {
  }

  onSubmit(){
    this.invoicesService.create(this.form.value).subscribe( (invoice)=> {
      this.router.navigate(['/']);
    })
  }

}
