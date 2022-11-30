import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import {RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule, routingComponent} from './app-routing.module';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    routingComponent,
    CustomerComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        RouterOutlet,
        MatIconModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
