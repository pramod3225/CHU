import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



import { AppComponent }  from './app.component';
import { NavTopComponent } from './topNav/top-nav.component';
import { OrderComponent } from './order/order.component';

// import { PreTreeComponent } from './pre-tree.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { CKEDITOR } from './ck-editor.component';


@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,NavTopComponent,OrderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
