import { Component, OnInit } from '@angular/core';
import {Demande} from '../../../models/demande';
import {DemandeService} from '../../../services/demande.service';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-user-demande-list',
  templateUrl: './user-demande-list.component.html',
  styleUrls: ['./user-demande-list.component.scss']
})
export class UserDemandeListComponent implements OnInit {
  demandes: Demande[];
  studentId: number;
  constructor(private demandeService: DemandeService, private studentService: StudentService) { }

  ngOnInit() {
    this.studentId= this.studentService.student.id;
    this.loadDemandes();
  }

  loadDemandes(){
    this.studentService.getDemandes(this.studentId).subscribe(
      data => {
        this.demandes= data;
      }
    )
  }

}
