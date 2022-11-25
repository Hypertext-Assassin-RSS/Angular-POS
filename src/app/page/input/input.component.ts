import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


export interface customerElements {
  customerId:string;
  customerName:string;
  customerAddress:string;
  customerSalary:number;
}

const CUSTOMER_ELEMENT_DATA : customerElements[] = [
  {customerId:'C000',customerName:'Rajith',customerAddress:'Thoppuwa',customerSalary:0.0}
]

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  customerForm = new FormGroup({
    customerId : new FormControl(''),
    customerName : new  FormControl(''),
    customerAddress : new FormControl(''),
    customerSalary : new FormControl(''),
  })

  columnNames : string[] = ['customerId','customerName','customerAddress','customerSalary'];

  newDataSource = CUSTOMER_ELEMENT_DATA;



  submit() {
    console.log(this.customerForm.value)
  }

  clearForm(){
    this.customerForm.reset()
  }

  ngOnInit() {

  }

}
