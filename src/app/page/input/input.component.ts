import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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


  submit() {
    console.log(this.customerForm.value)
  }
}
