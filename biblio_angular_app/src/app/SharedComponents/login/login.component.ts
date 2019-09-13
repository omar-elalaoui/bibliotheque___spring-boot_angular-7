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
  constructor(private auth: AuthService, private alertify: AlertifyService, private router: Router) { }

  login(){
    this.isLoading=true;
    this.auth.login(this.model).subscribe(next => {
      this.isLoading=false;
      this.alertify.success("Connecté avec succès");
      this.router.navigate(['/adminHome']);
    }, error => {
      this.isLoading=false;
      this.alertify.error("Nom d'utilisateur ou mot de passe incorrect");
    })
  }
  loggedIn(){
    return this.auth.loggedIn();
  }
  ngOnInit() {
  }

}
