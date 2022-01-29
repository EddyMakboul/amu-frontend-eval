import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../shared/services/customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customersService: CustomersService, private router: Router) { }
  form: FormGroup;
 

  ngOnInit(): void {
    this.form = new FormGroup({
      fullName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email])
    });
  }

  onSubmit(){
    this.customersService.create(this.form.value).subscribe( (customer)=> {
      this.router.navigate(['/']);
    })
  }

  hasError(): boolean{
    return !this.form.valid;
  }

}
