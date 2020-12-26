import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductFormComponent,
    AdminloginComponent,
    ProductsComponent,
    EditProductFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
