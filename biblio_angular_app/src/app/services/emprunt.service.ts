import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Emprunt} from '../models/emprunt';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  springDataUrl= environment.apiUrl + "emprunts/";
  myApiUrl= environment.apiUrl + "api/emprunts/";
  constructor(private http: HttpClient) { }

  getEmpruntes(): Observable<Emprunt[]>{
    return this.http.get<Emprunt[]>(this.springDataUrl).pipe(
      map(data => { const temp: any= data; return temp._embedded.emprunts; })
    )
  }


  getEmpruntBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.springDataUrl+id+"/book");
  }


  deleteEmprunt(id: number){
    return this.http.delete(this.springDataUrl+id);
  }
}
