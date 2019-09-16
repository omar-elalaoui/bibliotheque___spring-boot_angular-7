import { Component, OnInit } from '@angular/core';
import {Emprunt} from '../../../models/emprunt';
import {EmpruntService} from '../../../services/emprunt.service';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-user-emprunt-list',
  templateUrl: './user-emprunt-list.component.html',
  styleUrls: ['./user-emprunt-list.component.scss']
})
export class UserEmpruntListComponent implements OnInit {
  empruntes: Emprunt[];
  studentId: number;
  constructor(private empruntService: EmpruntService, private studentService: StudentService) { }

  ngOnInit() {
    this.studentId= this.studentService.student.id;
    this.loadEmprunts();
  }

  loadEmprunts(){
    this.studentService.getEmpruntes(this.studentId).subscribe(
      data => {
        this.empruntes= data;
      }
    )
  }

}
