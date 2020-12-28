import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loadedPosts: any;
  isLoggedIn: boolean = false
  searchByProuctName = null;
  filterByStock: any;

  constructor(private productService: ProductService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getToken() != null
    this.fetchPosts();

  }


  search() {
    this.productService.search(this.searchByProuctName).subscribe(posts => {
      this.loadedPosts = posts;
    });
  }


  filter() {
    this.productService.filterByStock(this.filterByStock).subscribe(posts => {
      this.loadedPosts = posts;
    });
  }

  public fetchPosts() {
    this.productService.getProducts()
      .subscribe(posts => {

        console.log(posts);
        this.loadedPosts = posts;
      });
  }

  public fetchProductById(product_id: number) {
    this.productService.getProductsById(product_id)
      .subscribe(posts => {
        console.log(posts);
        this.loadedPosts = posts;
      });
  }

  public deleteProduct(product_id: number) {
    this.productService.delete(product_id)
      .subscribe(posts => {
        this.fetchPosts();
        console.log(posts);
      });
  }

  logout() {
    this.authService.removeToken();
    this.ngOnInit();
  }
}
