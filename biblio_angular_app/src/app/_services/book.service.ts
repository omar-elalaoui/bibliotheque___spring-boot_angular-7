import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Book} from '../_models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  springDataUrl= environment.apiUrl + "books/";
  myApiUrl= environment.apiUrl + "api/books/";
  constructor(private http: HttpClient) { }


  getBooks(){
    return this.http.get(this.springDataUrl)
  }

  getBook(id: number){
    return this.http.get(this.springDataUrl+id);
  }

  saveOrUpdateBook(book: Book){
    return this.http.post(this.myApiUrl, book);
  }

  deleteBook(id: number){
    return this.http.delete(this.springDataUrl+id);
  }
}
