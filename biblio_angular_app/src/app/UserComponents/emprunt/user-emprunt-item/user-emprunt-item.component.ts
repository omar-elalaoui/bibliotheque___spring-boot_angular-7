import {Component, Input, OnInit} from '@angular/core';
import {Emprunt} from '../../../models/emprunt';
import {EmpruntService} from '../../../services/emprunt.service';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-use-emprunt-item',
  templateUrl: './user-emprunt-item.component.html',
  styleUrls: ['./user-emprunt-item.component.scss']
})
export class UserEmpruntItemComponent implements OnInit {
  @Input() emprunt: Emprunt;
  constructor(private empruntService: EmpruntService, private  bookService: BookService) { }

  ngOnInit() {
    this.loadBook();
  }

  loadBook(){
    this.empruntService.getEmpruntBook(this.emprunt.id).subscribe(
      data => {
        this.emprunt.book= data;
      }
    )
  }

}
