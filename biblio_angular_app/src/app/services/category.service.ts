import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  springDataUrl= environment.apiUrl + "categories/";
  myApiUrl= environment.apiUrl + "api/categories/";
  constructor(private http: HttpClient) { }


  getCaterogies(): Observable<Category[]>{
    return this.http.get<Category[]>(this.springDataUrl).pipe(
      map(data => { const temp: any= data; return temp._embedded.categories; })
    )
  }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>(this.springDataUrl+id);
  }

  getCategoryBooks(id: number): Observable<Book[]>{
    return this.http.get<Book[]>(this.springDataUrl+id+"/bookList").pipe(
      map(data => { const temp: any= data; return temp._embedded.books; })
    )
  }

  saveCategory(category: Category){
    return this.http.post(this.myApiUrl, category);
  }

  deleteCategory(id: number){
    return this.http.delete(this.springDataUrl+id);
  }

}
