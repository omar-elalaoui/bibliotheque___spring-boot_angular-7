import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Emprunt} from '../models/emprunt';
import {Student} from '../models/student';
import {Demande} from '../models/demande';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  springDataUrl= environment.apiUrl + "students/";
  myApiUrl= environment.apiUrl + "api/students/";
  student: Student;

  constructor(private http: HttpClient) { }

  updateStudent(file: File, student: Student){
    let formdata: FormData = new FormData();
    formdata.append('image', file);
    formdata.append("student", JSON.stringify(student) );
    const req = new HttpRequest('POST', this.myApiUrl, formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders({'Authorization': "Bearer "+localStorage.getItem("token")})
    });
    return this.http.request(req);
  }

  getStudentImage(id: number): Observable<Blob>{
    return this.http.get(this.myApiUrl+id+'/getPic', {responseType: "blob"})
  }

  getEmpruntes(studentId: number): Observable<Emprunt[]>{
    return this.http.get<Emprunt[]>(this.springDataUrl+studentId+"/empruntList").pipe(
      map(data => { const temp: any= data; return temp._embedded.emprunts; })
    )
  }

  getDemandes(studentId: number): Observable<Demande[]>{
    return this.http.get<Demande[]>(this.springDataUrl+studentId+"/demandeList").pipe(
      map(data => { const temp: any= data; return temp._embedded.demandes; })
    )
  }

}
