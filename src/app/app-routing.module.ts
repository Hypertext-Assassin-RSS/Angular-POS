import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeScreenComponent} from "./page/home-screen/home-screen.component";
import {CustomerComponent} from "./customer/customer.component";



const routes : Routes = [
  {path:'home',component:HomeScreenComponent},
  {path:'customer',component:CustomerComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }

export const  routingComponent = [HomeScreenComponent,CustomerComponent]


