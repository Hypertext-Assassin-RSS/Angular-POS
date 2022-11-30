import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Customer} from "./customer";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  // @ts-ignore
  customer: Customer;
  customers:Customer[] = []

  addCustomerForm = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required]),
  })

  constructor(public customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(response =>{
      console.log(response)
    })
  }

  saveCustomer(){
    // @ts-ignore
    this.customer = this.addCustomerForm.value;
    this.customerService.addCustomer(this.customer).subscribe((response:any) =>{
      console.log(response)
      this.customers.push()
    })


  }


}
