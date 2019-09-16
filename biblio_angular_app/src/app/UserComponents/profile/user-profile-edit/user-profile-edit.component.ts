import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {Student} from '../../../models/student';
import {HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertifyService} from '../../../services/alertify.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  student: Student;
  localFileUrl="assets/img/user.png";
  image:any=new File([""], "image");
  constructor(private studentService: StudentService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.student= this.studentService.student;
    this.localFileUrl= this.studentService.myApiUrl+this.student.id+'/getPic';
    this.studentService.getStudentImage(this.student.id).subscribe(
      imgFile=>{this.image=imgFile;}
    )
  }

  updateStudent(){
    this.studentService.updateStudent(this.image, this.student).subscribe(
      next =>{
        if(next instanceof HttpResponse) {
          this.router.navigate(['/userHome/profile']);
          this.alertify.success("Profile mise à jour avec succès");
        }
      },
      error => {
        this.alertify.error(error);}
    )
  }

  displayAndAssignImg(event){
    if (event.target.files && event.target.files[0]) {
      this.image= event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localFileUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
