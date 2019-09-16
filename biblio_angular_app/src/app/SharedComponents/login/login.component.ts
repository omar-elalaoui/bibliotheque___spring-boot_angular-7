import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AlertifyService} from '../../services/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model:any = {};
  isLoading=false;
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  login(){
    this.isLoading=true;
    this.authService.login(this.model).subscribe(next => {
      this.isLoading=false;
      const roles: string[]= this.authService.decodedToken.roles;
      if(roles.includes("ADMIN")){ this.router.navigate(['/adminHome']);}
      else { this.router.navigate(['/userHome']); }
      this.alertify.success("Connecté avec succès");
    }, error => {
      this.isLoading=false;
      this.alertify.error("Nom d'utilisateur ou mot de passe incorrect");
    })
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  ngOnInit() {
  }

}
