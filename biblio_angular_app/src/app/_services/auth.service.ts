import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators"
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlApi: string= "http://localhost:8086/";
  jwtHelper= new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.urlApi + "login", model, {observe: "response"}).pipe(
      map( res => {
        const token= res.headers.get("authorization");
        localStorage.setItem("token", token);
        this.decodedToken= this.jwtHelper.decodeToken(token);
      } )
    );
  }

  loggedIn(){
    const token= localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(model: any){
    return this.http.post(this.urlApi + "register", model);
  }

}
