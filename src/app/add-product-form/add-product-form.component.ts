import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']

})
export class AddProductFormComponent implements OnInit {
  
  addProductForm;
  

  constructor(private fb: FormBuilder,private http: HttpClient) { 
this.addProductForm=this.fb.group({
  product_name:[null,Validators.required],
  stock:[0,Validators.required],
  selling_price:[0,Validators.required],
  cost_price:[0,Validators.required],
})



  }

  ngOnInit() {
  }

  onCreatePost() {
    // Send Http request
   const formValue = this.addProductForm.value;
    this.http
      .post(
        'http://localhost:8000/api/products/',
        formValue
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }



  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
  
}