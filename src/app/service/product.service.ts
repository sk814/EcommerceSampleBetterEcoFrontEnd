import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  create(formValue: any) {
    return this.http
      .post(
        environment.backendUrl + '/api/products/',
        formValue
      );
  }


  get(productId: any) {
    return this.http.get(environment.backendUrl + '/api/products/' + productId + "/")
  }

  edit(formValue: any, productId: number) {
    return this.http
      .put(
        environment.backendUrl + '/api/products/' + productId + "/",
        formValue
      );
  }

  getProducts() {
    return this.http.get(environment.backendUrl + '/api/productview/');
  }

  getProductsById(product_id: number) {
    // return this.http.get(environment.backendUrl+'/api/productview/'+ product_id);
    return this.http.get(environment.backendUrl + '/api/products/' + product_id + "/");
  }


  delete(product_id: number) {
    return this.http.delete(environment.backendUrl + '/api/products/' + product_id + '/');
  }


  search(productName: any) {
    return this.http.get(environment.backendUrl + '/api/filterview/?search=' + productName)
  }

  filterByStock(stockSize: any) {
    const url = `/api/filterview/?stock__lte=${stockSize}`;
    return this.http.get(environment.backendUrl + url)
  }

}
