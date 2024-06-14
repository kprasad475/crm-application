import { Component } from '@angular/core';
import { Customer } from '../customer-model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
customer:Customer | undefined;

constructor(private route:ActivatedRoute,private service:CustomerService){}
    ngOnInit():void{
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.service.getCustomer(id).subscribe(customer =>this.customer = customer)
      console.log(this.customer)
    }
}
