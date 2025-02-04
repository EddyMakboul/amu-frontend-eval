import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice, Invoices } from '../types/invoice.type';


const SUPABASE_URL = 'https://yudjaphrdielslricerd.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMTA0OSwiZXhwIjoxOTU3Mzk3MDQ5fQ.KfaDu6gbDwocAMGZB26G3kZeorWtS18HInqtBuiQzTk";

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }


  findAllByCustomerId(id_customer:number):Observable<Invoices> {
    return this.http.get<Invoices>(SUPABASE_URL + '?id_customer=eq.' + id_customer, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
    }
    });
  }

  create(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(SUPABASE_URL, {
      amount: invoice.amount,
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
