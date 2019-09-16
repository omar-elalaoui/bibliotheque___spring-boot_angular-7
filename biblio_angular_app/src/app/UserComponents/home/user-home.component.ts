import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  jwtHelper= new JwtHelperService();
  constructor(private authService: AuthService, private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.studentService.student= (data["user"]).student; }
    )
  }

}
