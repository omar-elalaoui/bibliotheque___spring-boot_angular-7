import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private alertify: AlertifyService){}
  canActivate(): boolean  {
    if(this.auth.loggedIn()) {return true}
    this.router.navigate(['/login']);
    this.alertify.error('vous n\'êtes pas authentifié');
    return false;
  }

}
