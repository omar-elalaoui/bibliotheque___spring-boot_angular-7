import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Category} from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  springDataUrl= environment.apiUrl + "categories/";
  myApiUrl= environment.apiUrl + "api/categories/";
  constructor(private http: HttpClient) { }


  getCaterogies(){
    return this.http.get(this.springDataUrl)
  }

  getCategory(id: number){
    return this.http.get(this.springDataUrl+id);
  }

  saveCategory(category: Category){
    return this.http.post(this.myApiUrl, category);
  }

  deleteCategory(id: number){
    return this.http.delete(this.springDataUrl+id);
  }

}
