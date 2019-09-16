import { Component, OnInit } from '@angular/core';
import {Student} from '../../../models/student';
import {UserService} from '../../../services/user.service';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  imagepath="assets/img/user.png";
  student: Student;
  constructor(private userService: UserService, private studentService: StudentService) { }

  ngOnInit() {
    this.student= this.studentService.student;
    if(this.student.photo != null){
      this.imagepath= this.studentService.myApiUrl+this.student.id+"/getPic";
    }
  }

}
