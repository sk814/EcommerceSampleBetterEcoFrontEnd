import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  ngOnInit(): void {
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
    // if(this.form.get('username')!="admin" || this.password!="admin")
    // {
      this.form.setErrors({
        invalidLogin: true
      });
    // }
    // else{}



  }

}
