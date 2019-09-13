import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';
import {AlertifyService} from '../../../services/alertify.service';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-book-list',
  templateUrl: './user-book-list.component.html',
  styleUrls: ['./user-book-list.component.scss']
})
export class UserBookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService, private alertify: AlertifyService,
              private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    const categoryId= this.route.snapshot.params['id'];
    if(categoryId){ this.route.params.subscribe((params: Params) => { this.loadCategoryBookList(+params['id']) }) }
    else { this.loadBooks(); }
  }

  loadBooks(){
    this.bookService.getBooks().subscribe(
      books =>{this.books= books},
      error => {this.alertify.error(error)})
  }

  loadCategoryBookList(id: number){
    this.categoryService.getCategoryBooks(id).subscribe(
      data => { this.books= data;}
    )
  }

}
