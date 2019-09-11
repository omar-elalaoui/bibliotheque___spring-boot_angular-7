import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../_services/book.service';
import {AlertifyService} from '../../../_services/alertify.service';
import {CategoryService} from '../../../_services/category.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books;
  categories;
  constructor(private bookService: BookService, private alertify: AlertifyService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadBooks();
    this.loadCategories();
  }

  loadBooks(){
    this.bookService.getBooks().subscribe(
      books =>{this.books= books},
      error => {this.alertify.error(error)})
  }

  loadCategories(){
    this.categoryService.getCaterogies().subscribe(
      categories =>{
        this.categories= categories;
      }
    )
  }

  loadCategoryBooks(categoryId) {
    if(categoryId == 0){
      this.loadCategories();
    }else{
      this.categoryService.getCategoryBooks(categoryId).subscribe(
        books =>{
          this.books= books;
        }
      )
    }
  }



}
