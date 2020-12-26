import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loadedPosts:any ;

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.fetchPosts();

  }


  private fetchPosts() {
    console.log("I am called");
    this.http.get('http://localhost:8000/api/products/')
      .subscribe(posts => {

        console.log(posts);
        this.loadedPosts= posts;
      });
  }

  isAdminLoggedIn(){
    return false;
  }
}
