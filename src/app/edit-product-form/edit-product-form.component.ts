import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  editProductForm; 
  productId:any;

  constructor(private router : Router,private fb: FormBuilder,private http: HttpClient,private route: ActivatedRoute) {

    this.editProductForm=this.fb.group({
      product_id:[null,Validators.required],
      product_name:[null,Validators.required],
      stock:[0,Validators.required],
      selling_price:[0,Validators.required],
      cost_price:[0,Validators.required],
    })

  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id');


    this.http.get("http://localhost:8000/api/products/"+this.productId+"/").subscribe(product=>{
   const productObb:any = product;
   
    this.editProductForm.controls.product_id.setValue(productObb.product_id);
    this.editProductForm.controls.product_name.setValue(productObb.product_name);
    this.editProductForm.controls.stock.setValue(productObb.stock);
    this.editProductForm.controls.selling_price.setValue(productObb.selling_price);
    this.editProductForm.controls.cost_price.setValue(productObb.cost_price);




    })
  }

 

  onEditProd() {
    // Send Http request
   const formValue = this.editProductForm.value;
    this.http
      .put(
        'http://localhost:8000/api/products/'+this.editProductForm.controls.product_id.value+"/",
        formValue
      )
      .subscribe(responseData => {
      this.router.navigate(["/products"])
      });
  }

}
