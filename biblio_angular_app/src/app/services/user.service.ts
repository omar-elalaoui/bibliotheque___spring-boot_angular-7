import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../models/student';
import {map} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApiUrl= environment.apiUrl + "api/appUsers/";
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.myApiUrl)
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.myApiUrl+id)
  }

  toggleBlockUser(user: User){
    return this.http.post(this.myApiUrl + "update", user)
  }

}
