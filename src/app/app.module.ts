import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './page/input/input.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import {RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule, routingComponent} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeScreenComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterOutlet,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
