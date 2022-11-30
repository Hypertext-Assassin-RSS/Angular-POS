import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./customer/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private  http:HttpClient) {}

  public getCustomer(){
    const url  = 'http://localhost:4000/customer';
    return this.http.get(url)
  }

  public addCustomer(customer:Customer){
    const url = 'http://localhost:4000/customer';
    return this.http.post<any>(url,customer)
  }

  public deleteCustomer(id: string){
    const url = 'http://localhost:4000/customer';
    return this.http.delete(url,{params:{id}})
  }
}
