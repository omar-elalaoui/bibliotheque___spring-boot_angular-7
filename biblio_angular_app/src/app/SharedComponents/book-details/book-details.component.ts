import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.loadBook();
  }

  loadBook(){
    const bookId= this.route.snapshot.params['id'];
    this.bookService.getBook(bookId).subscribe(
      book =>{
        this.book= book;
        this.loadBookCategory(bookId);
      }
    )
  }

  loadBookCategory(id: number){
    this.bookService.getBookCategory(id).subscribe(
      category =>{
        this.book.category= category;}
    )
  }

}
