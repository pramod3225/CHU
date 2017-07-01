import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { NavTopComponent } from './topNav/top-nav.component';
import { OrderComponent } from './order/order.component';




@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule],
  declarations: [ AppComponent,NavTopComponent,OrderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
