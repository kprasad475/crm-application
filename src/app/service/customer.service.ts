import { Injectable } from '@angular/core';
import { Customer } from '../customer-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    { id: 3, name: 'John m ayer', email: 'john@m.com', phone: '321-456-7890' },
    { id: 4, name: 'mashal abraham', email: 'marsh@example.com', phone: '980-765-4321' },
  ];
  constructor() { }

  getCustomers():Observable<Customer[]>{
    return of(this.customers)
  }

  getCustomer(id:number):Observable<Customer | undefined>{
    return of(this.customers.find(customer =>customer.id === id))
  }
}
