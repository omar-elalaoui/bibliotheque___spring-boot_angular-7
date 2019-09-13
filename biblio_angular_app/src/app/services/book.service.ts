import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  springDataUrl= environment.apiUrl + "books/";
  myApiUrl= environment.apiUrl + "api/books/";
  constructor(private http: HttpClient) { }


  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.springDataUrl).pipe(
      map(data => { const temp: any= data; return temp._embedded.books; })
    )
  }

  getBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.springDataUrl+id)
  }

  getBookImage(id: number): Observable<Blob>{
    return this.http.get(this.myApiUrl+id+'/getPic', {responseType: "blob"})
  }

  getBookCategory(id: number): Observable<Category>{
    return this.http.get<Category>(this.springDataUrl+id+"/category")
  }

  saveOrUpdateBook(file: File, book: Book){
    let formdata: FormData = new FormData();
    formdata.append('image', file);
    formdata.append("book", JSON.stringify(book) );
    const req = new HttpRequest('POST', this.myApiUrl, formdata, {
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
