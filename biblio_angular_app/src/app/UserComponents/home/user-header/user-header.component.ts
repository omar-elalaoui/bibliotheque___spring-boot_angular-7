import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {Student} from '../../../models/student';
import {Router} from '@angular/router';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  name: string;
  student: Student;
  imgIcon: string;
  constructor(private studentService: StudentService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.student= this.studentService.student;
    this.name= this.student.prenom +" "+ this.student.nom;
    this.imgIcon= this.studentService.myApiUrl+this.student.id+"/getPic";
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
