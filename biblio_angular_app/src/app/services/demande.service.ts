import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Demande} from '../models/demande';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  springDataUrl= environment.apiUrl + "demandes/";
  myApiUrl= environment.apiUrl + "api/demandes/";
  constructor(private http: HttpClient) { }

  getDemandeBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.springDataUrl+id+"/book");
  }

  getDemandes(): Observable<Demande[]>{
    return this.http.get<Demande[]>(this.springDataUrl).pipe(
      map(data => { const temp: any= data; return temp._embedded.demandes; })
    )
  }

  getDemande(id: number): Observable<Demande>{
    return this.http.get<Demande>(this.springDataUrl+id);
  }


  demander(demande: Demande){
    return this.http.post(this.myApiUrl, demande);
  }

  deleteDemande(id: number){
    return this.http.delete(this.springDataUrl+id);
  }

}
