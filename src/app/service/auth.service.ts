import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(credentials: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http
      .post(
        environment.backendUrl + '/api/tokenlogin/',
        credentials,
        {
          headers: headers
        }
      )

  }


  public setToken(token: any) {
    localStorage.setItem("token", token.token);
  }


  public removeToken() {
    localStorage.clear();
  }

  public getToken() {
    return localStorage.getItem("token");
  }

}

