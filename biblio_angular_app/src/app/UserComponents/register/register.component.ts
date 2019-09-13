import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Student} from '../../models/student';
import {AlertifyService} from '../../services/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User= new User();
  confirmedPwd: string;
  constructor(private auth: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.user.student= new Student();
  }

  onSubmit(){
    this.register();
  }

  register(){
    if(this.user.password != this.confirmedPwd){
      this.alertify.error("les mots de passe ne correspondent pas")
    }else{
      this.user.username= this.user.student.email;
      this.auth.register(this.user).subscribe(next =>{
        this.login(this.user.username, this.user.password);
        this.alertify.success("Bienvenue "+ this.user.student.prenom);
      }, error => this.alertify.error(error))
    }
  }

  login(username: string, password: string){
    const model= {username: username, password: password};
    this.auth.login(model).subscribe(next => { this.router.navigate(["/adminHome"]) })
  }


}
