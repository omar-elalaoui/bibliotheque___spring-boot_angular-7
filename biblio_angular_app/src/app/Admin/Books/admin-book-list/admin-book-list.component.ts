import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../_services/book.service';
import {AlertifyService} from '../../../_services/alertify.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books;
  constructor(private bookService: BookService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.getBooks().subscribe(
      books =>{this.books= books},
      error => {this.alertify.error(error)})
  }

}
