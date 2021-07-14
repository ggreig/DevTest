import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerTypeService } from '../services/customer-type.service';
import { CustomerModel } from '../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customers: CustomerModel[] = [];

  public customerTypes: string[] = [];

  public newCustomer: CustomerModel = {
    customerId: null,
    name: null,
    type: null
  };

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService) { }

    ngOnInit() {
      this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
      this.customerTypeService.GetCustomerTypes().subscribe(customerTypes => this.customerTypes = customerTypes);
    }
  
    public createCustomer(form: NgForm): void {
      if (form.invalid) {
        alert('form is not valid');
      } else {
        this.customerService.CreateCustomer(this.newCustomer).then(() => {
          this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
        });
      }
    }

}
