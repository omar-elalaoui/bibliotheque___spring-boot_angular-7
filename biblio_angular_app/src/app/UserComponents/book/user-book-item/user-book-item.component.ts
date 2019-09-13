import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-user-book-item',
  templateUrl: './user-book-item.component.html',
  styleUrls: ['./user-book-item.component.scss']
})
export class UserBookItemComponent implements OnInit {
  @Input() book: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
