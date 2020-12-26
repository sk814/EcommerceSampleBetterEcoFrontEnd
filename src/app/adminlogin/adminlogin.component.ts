import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(private router : Router, private http: HttpClient) {

  }
  
  form= new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login()
  {

    const headers=new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    
   this.http
     .post(
       'http://localhost:8000/api/login/',
       this.form.value,
       {
          headers: headers
       }
        // JSON.stringify(

        //   {
        //     username: this.form.get('username'),
        //     password: this.form.get('password')
        // }

        // ) 
     )
     .subscribe(responseData => {

        
    // else if (res.status === 200) {
    //     return [{ status: res.status, json: res }]
    // }

       console.log(responseData, responseData.valueOf);
      //  console.log(responseData.valueOf);

      this.router.navigate([""])

       
     },
     error => {console.log('USER NOT FOUND!'+ JSON.stringify(error));}

     )
     ;
  // this.http
  //    .post(
  //      this.form.value);
  }



}
