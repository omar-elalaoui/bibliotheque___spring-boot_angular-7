import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Book} from '../_models/book';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Category} from '../_models/category';

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

  getBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.springDataUrl+id)
  }

  getBookCategory(id: number): Observable<Category>{
    return this.http.get<Category>(this.springDataUrl+id+"/category")
  }

  saveOrUpdateBook(file: File, book: Book){
    let formdata: FormData = new FormData();
    formdata.append('image', file);
    formdata.append("book", JSON.stringify(book) );
    const req = new HttpRequest('POST', environment.apiUrl + "api/books", formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders({'Authorization': "Bearer "+localStorage.getItem("token")})
    });
    return this.http.request(req);
  }

  deleteBook(id: number){
    return this.http.delete(this.springDataUrl+id);
  }
}
