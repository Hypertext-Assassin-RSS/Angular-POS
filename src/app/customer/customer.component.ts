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

  Columns:string[] = ['id','name','address','salary','edit']

  btnName:string = 'Add Customer';
  btnColor:string = 'primary'

  id:string = '';
  name:string = '';
  address:string = '';
  salary:string = '';

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

  submit(){
    if(this.btnName == 'Add Customer'){
      let response = this.customerService.addCustomer(this.customer).subscribe((response:any) =>{
        console.log(response)
  
        // @ts-ignore
        if (response.code = 200){
          this.loadAllCustomers()
          this.clearForm()
          // @ts-ignore
          this.openSnackBar(response.message,'close')
        }else {
          // @ts-ignore
          this.openSnackBar(response.error,'close')
        }
      })

    }else if(this.btnName == 'Update Customer'){
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
  }

  saveCustomer(){
    // @ts-ignore
    this.customer = this.addCustomerForm.value;
    let response = this.customerService.addCustomer(this.customer).subscribe((response:any) =>{
      console.log(response)

      // @ts-ignore
      if (response.code = 200){
        this.loadAllCustomers()
        this.clearForm()
        // @ts-ignore
        this.openSnackBar(response.message,'close')
      }else {
        // @ts-ignore
        this.openSnackBar(response.error,'close')
      }
    })

  }

  deleteCustomer(element: any){
    this.customerService.deleteCustomer(element.id).subscribe((response:any) =>{
      console.log(response)

      if (response.code = 200){
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

  edit(element:any){    

    this.btnName = 'Update Customer'

    this.id = element.id
    this.name = element.name
    this.address = element.address
    this.salary = element.salary
  }
}
