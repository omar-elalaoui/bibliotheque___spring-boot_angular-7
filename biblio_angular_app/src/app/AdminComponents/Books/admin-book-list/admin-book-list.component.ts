import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service';
import {AlertifyService} from '../../../services/alertify.service';
import {CategoryService} from '../../../services/category.service';
import {Book} from '../../../models/book';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books: Book[];
  categories: Category[];
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
      this.loadBooks();
    }else{
      this.categoryService.getCategoryBooks(categoryId).subscribe(
        books =>{
          this.books= books;
        }
      )
    }
  }



}
