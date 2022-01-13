import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice, Invoices } from '../models/invoice.type';


const SUPABASE_URL = 'https://yudjaphrdielslricerd.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMTA0OSwiZXhwIjoxOTU3Mzk3MDQ5fQ.KfaDu6gbDwocAMGZB26G3kZeorWtS18HInqtBuiQzTk";

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }


  findAllByCustomerId(customer_id:number):Observable<Invoices> {
    return this.http.get<Invoices>(SUPABASE_URL + '?customer_id = eq' + customer_id, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
    }
    });
  }

  create(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(SUPABASE_URL, {
      amount: invoice.amout,
      status: invoice.status,
      id_customer: invoice.id_customer
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
    }
  });
  }
}
