import {Component, Input, OnInit} from '@angular/core';
import {AlertifyService} from '../../../services/alertify.service';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-admin-book-item',
  templateUrl: './admin-book-item.component.html',
  styleUrls: ['./admin-book-item.component.css']
})
export class AdminBookItemComponent implements OnInit {
  @Input() book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log()
  }
}
