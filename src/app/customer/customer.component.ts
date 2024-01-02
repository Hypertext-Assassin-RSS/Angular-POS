import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Customer} from "./customer";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  customer: Customer = new Customer();
  customers: Customer[] = [];
  dataSource = new MatTableDataSource();


  Columns: string[] = ['id', 'name', 'address', 'salary', 'edit']

  btnName: string = 'Add Customer';
  btnColor: string = 'primary'

  id: string = '';
  name: string = '';
  address: string = '';
  salary: string = '';

  addCustomerForm: FormGroup;

  constructor(public customerService: CustomerService, private _snackBar: MatSnackBar) {
    this.addCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.loadAllCustomers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadAllCustomers() {
    this.customerService.getCustomer().subscribe(response => {
      let obj =  JSON.parse(JSON.stringify(response))
      this.customers = obj.data
      this.dataSource =  obj.data
    })
  }

  submit() {
    let customer =  this.setFormValue();
    if (this.btnName == 'Add Customer') {
      this.customerService.addCustomer(customer).subscribe((response: any) => {
        if (response.code == 200) {
          this.loadAllCustomers()
          this.clearForm()
          this.openSnackBar(response.message, 'close')
        } else {
          this.openSnackBar(response.error, 'close')
        }
      });
    } else if (this.btnName == 'Update Customer') {
      this.customerService.UpdateCustomer(customer).subscribe((response: any) => {
        if (response.code == 200) {
          this.loadAllCustomers()
          this.clearForm()
          this.openSnackBar(response.message, 'close')
        } else {
          this.openSnackBar('Error', 'close')
        }

      })

    }
  }

  saveCustomer() {
    let customer =  this.setFormValue();

    let response = this.customerService.addCustomer(customer).subscribe((response: any) => {
      console.log(response)

      if (response.code == 200) {
        this.loadAllCustomers()
        this.clearForm()
        this.openSnackBar(response.message, 'close')
      } else {
        this.openSnackBar(response.error, 'close')
      }
    })

  }

  deleteCustomer(element: any) {
    this.customerService.deleteCustomer(element.id).subscribe((response: any) => {
      if (response.code == 200) {
        this.loadAllCustomers()
        this.clearForm()
        this.openSnackBar(response.message, 'close')
      } else {
        this.openSnackBar('Error', 'close')
      }

    })
  }

  updateCustomer() {
    this.customer.id = this.addCustomerForm.get('id')?.value;
    this.customer.name = this.addCustomerForm.get('name')?.value;
    this.customer.address = this.addCustomerForm.get('address')?.value;
    this.customer.salary = this.addCustomerForm.get('salary')?.value;

    this.customerService.UpdateCustomer(this.customer).subscribe((response: any) => {
      console.log(response)

      if (response.code == 200) {
        this.loadAllCustomers()
        this.clearForm()
        this.openSnackBar(response.message, 'close')
      } else {
        this.openSnackBar('Error', 'close')
      }

    })
  }

  clearForm() {
    this.addCustomerForm.reset()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }

  edit(element: any) {
    this.btnName = 'Update Customer'
    this.id = element.id
    this.name = element.name
    this.address = element.address
    this.salary = element.salary
  }

  setFormValue() {
    let customer = new Customer();

    customer.id = this.addCustomerForm.get('id')?.value;
    customer.name = this.addCustomerForm.get('name')?.value;
    customer.address = this.addCustomerForm.get('address')?.value;
    customer.salary = this.addCustomerForm.get('salary')?.value;

    return customer
  }


  filter(){
    this.customers.forEach(customer => {
      if ((customer.id.toUpperCase()) == this.id.toUpperCase()){
       this.edit(customer)
      } else {
        this.btnName = 'Add Customer'
      }
    })
  }
}
