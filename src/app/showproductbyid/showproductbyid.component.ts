import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-showproductbyid',
  templateUrl: './showproductbyid.component.html',
  styleUrls: ['./showproductbyid.component.css']
})
export class ShowproductbyidComponent implements OnInit {

  showProductFormbyid;
  productId: any;

  constructor(private router: Router, private fb: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {
    this.showProductFormbyid = this.fb.group({
      product_id: [null, Validators.required],
      product_name: [null, Validators.required],
      stock: [0, Validators.required],
      selling_price: [0, Validators.required],
      cost_price: [0, Validators.required],
      created_date: [0, Validators.required],
    })
  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id');


    this.productService.get(this.productId).subscribe(product => {
      const productObb: any = product;
      console.log(product);
      this.showProductFormbyid.controls.product_id.setValue(productObb.product_id);
      this.showProductFormbyid.controls.product_name.setValue(productObb.product_name);
      this.showProductFormbyid.controls.stock.setValue(productObb.stock);
      this.showProductFormbyid.controls.selling_price.setValue(productObb.selling_price);
      this.showProductFormbyid.controls.cost_price.setValue(productObb.cost_price);
      this.showProductFormbyid.controls.created_date.setValue(productObb.created_date);

    })
  }


}
