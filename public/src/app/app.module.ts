import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavTopComponent } from './topNav/top-nav.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: OrderComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,NavTopComponent,OrderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
