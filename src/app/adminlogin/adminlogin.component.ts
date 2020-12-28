import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  errorMessage:string='';
  ngOnInit(): void {
  }
  constructor(private router : Router,private authService:AuthService) {

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
    this.errorMessage='';
    if(this.form.valid)
      this.authService.login(this.form.value).subscribe(responseData => {
           this.authService.setToken(responseData)
          this.router.navigate([""])
         },
         error => {this.errorMessage = JSON.stringify(error?.error?.error)}
         )    
  
  }
}
