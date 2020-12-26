import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  editProductForm; 

  constructor(private fb: FormBuilder,private http: HttpClient) { 

    this.editProductForm=this.fb.group({
      product_id:[null,Validators.required],
      product_name:[null,Validators.required],
      stock:[0,Validators.required],
      selling_price:[0,Validators.required],
      cost_price:[0,Validators.required],
    })

  }

  ngOnInit(): void {
    
  }

 

  onEditProd() {
    // Send Http request
   const formValue = this.editProductForm.value;
    this.http
      .put(
        'http://localhost:8000/api/products/'+this.editProductForm.controls.product_id.value,
        formValue
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
