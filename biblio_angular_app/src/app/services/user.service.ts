import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApiUrl= environment.apiUrl + "api/appUsers/";
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.myApiUrl)
  }

  getUser(username: string): Observable<User>{
    return this.http.get<User>(this.myApiUrl+username)
  }

  toggleBlockUser(user: User){
    return this.http.post(this.myApiUrl + "update", user)
  }

}
