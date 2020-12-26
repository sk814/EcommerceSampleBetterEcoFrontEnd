import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"login",component:AdminloginComponent},
  {path:"add-product",component:AddProductFormComponent},
  {path:"edit-product/:id",component:EditProductFormComponent},
  {path:"products",component:ProductsComponent},
  {path:"",component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
