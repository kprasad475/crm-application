import { Component } from '@angular/core';
import { Customer } from '../customer-model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
customers:Customer[] =[];

constructor(private service:CustomerService){

}
ngOnInit():void{
this.service.getCustomers().subscribe(customers =>this.customers =customers)
console.log(this.customers)
}
}
