import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer, Customers } from "../models/customer.type";

const SUPABASE_URL = 'https://yudjaphrdielslricerd.supabase.co/rest/v1/customers';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMTA0OSwiZXhwIjoxOTU3Mzk3MDQ5fQ.KfaDu6gbDwocAMGZB26G3kZeorWtS18HInqtBuiQzTk";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<Customers>{
    return this.http.get<Customers>(SUPABASE_URL, {
      headers: {
          "Content-Type": "application/json",
          apiKey: SUPABASE_API_KEY
      }
  });
  }

  findOne(id: number): Observable<Customers> {
    return this.http.get<Customers>(SUPABASE_URL + '?id=eq.' + id, {
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation"
        }
    });
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(SUPABASE_URL, {
      fullName: customer.fullName,
      email: customer.email
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_API_KEY,
        Prefer: "return=representation"
    }
  });
  }
}

