import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {AlertifyService} from '../../_services/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model:any = {};
  constructor(private auth: AuthService, private alertify: AlertifyService, private router: Router) { }

  login(){
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success("Connecté avec succès");
      this.router.navigate(['/adminHome']);
    }, error => {
      this.alertify.error("Nom d'utilisateur ou mot de passe incorrect")
    })
  }
  loggedIn(){
    return this.auth.loggedIn();
  }
  ngOnInit() {
  }

}
