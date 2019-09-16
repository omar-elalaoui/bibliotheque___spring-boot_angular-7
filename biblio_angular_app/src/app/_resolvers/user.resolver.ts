import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';

@Injectable()
export class UserResolver implements Resolve<User>{
  jwtHelper= new JwtHelperService();
  constructor(private authService: AuthService, private userService: UserService){}
  resolve(): Observable<User> {
    const token= localStorage.getItem("token");
    if(token){
      const decToken= this.jwtHelper.decodeToken(token);
      this.authService.decodedToken= decToken;
      if(!decToken.roles.includes("ADMIN")){
        return this.userService.getUser(decToken.username);
      }
    }
    return undefined;}

}
