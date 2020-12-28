import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']

})
export class AddProductFormComponent implements OnInit {

  addProductForm;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.addProductForm = this.fb.group({
      product_name: [null, Validators.required],
      stock: [0, Validators.required],
      selling_price: [0, Validators.required],
      cost_price: [0, Validators.required],
    })
  }

  ngOnInit() {
  }

  onCreatePost() {
    const formValue = this.addProductForm.value;
    this.productService.create(formValue).subscribe(responseData => {
      console.log(responseData);
      this.router.navigate([""])
    });
  }
}