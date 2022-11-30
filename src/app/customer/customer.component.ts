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
  customers:Customer[] = [];
  dataSource = [];

  addCustomerForm = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required]),
  })

  Columns:string[] = ['id','name','address','salary']

  constructor(public customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(response =>{
      console.log(response)
    // @ts-ignore
      this.dataSource = response
    })
  }

  saveCustomer(){
    // @ts-ignore
    this.customer = this.addCustomerForm.value;
    this.customerService.addCustomer(this.customer).subscribe((response:any) =>{
      console.log(response)
    })
  }

  clearForm(){
    this.addCustomerForm.reset()
  }


}
