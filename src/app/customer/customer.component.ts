import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Customer} from "./customer";
import {MatSnackBar} from "@angular/material/snack-bar";


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

  constructor(public customerService:CustomerService,private _snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loadAllCustomers();
  }

  loadAllCustomers(){
    this.customerService.getCustomer().subscribe(response =>{
      console.log(response)
      // @ts-ignore
      this.dataSource = response.data
    })
  }

  saveCustomer(){
    // @ts-ignore
    this.customer = this.addCustomerForm.value;
    let response = this.customerService.addCustomer(this.customer).subscribe((response:any) =>{
      console.log(response)
    })
    // @ts-ignore
    if (response.code == 200){
      this.loadAllCustomers()
      this.clearForm()
      // @ts-ignore
      this.openSnackBar(response.message,'close')
    }else {
      // @ts-ignore
      this.openSnackBar(response.error,'close')
    }
  }

  deleteCustomer(){
    let id = this.addCustomerForm.value.id
    console.log(id)
    // @ts-ignore
    this.customerService.deleteCustomer(id).subscribe((response:any) =>{
      console.log(response)

      if (response.message != null){
        this.loadAllCustomers()
        this.clearForm()
        // @ts-ignore
        this.openSnackBar(response.message,'close')
      }else {
        this.openSnackBar('Error','close')
      }

    })
  }

  updateCustomer(){
    // @ts-ignore
    this.customer  = this.addCustomerForm.value
    this.customerService.UpdateCustomer(this.customer).subscribe((response:any) =>{
      console.log(response)

      if (response.code = 200){
        this.loadAllCustomers()
        this.clearForm()
        this.openSnackBar(response.message,'close')
      }else {
        this.openSnackBar('Error','close')
      }

    })
  }

  clearForm(){
    this.addCustomerForm.reset()
  }

  openSnackBar(message:string,action:string){
    // @ts-ignore
    this._snackBar.open(message,action,{
      duration:5000
    })
  }

}
