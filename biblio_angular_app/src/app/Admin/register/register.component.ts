import { Component, OnInit } from '@angular/core';
import {User} from '../../_model/user';
import {AuthService} from '../../_services/auth.service';
import {Student} from '../../_model/student';
import {AlertifyService} from '../../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User= new User();
  confirmedPwd: string;
  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.user.student= new Student();
  }

  onSubmit(){
    if(this.user.password != this.confirmedPwd){
      this.alertify.error("les mots de passe ne correspondent pas")
    }else{
      this.user.username= this.user.student.email;
      this.auth.register(this.user).subscribe(next =>{

      }, error => this.alertify.error(error))
    }
  }

}
