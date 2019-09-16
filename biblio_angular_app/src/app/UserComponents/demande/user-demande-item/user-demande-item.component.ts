import {Component, Input, OnInit} from '@angular/core';
import {Demande} from '../../../models/demande';
import {BookService} from '../../../services/book.service';
import {DemandeService} from '../../../services/demande.service';

@Component({
  selector: 'app-use-demande-item',
  templateUrl: './user-demande-item.component.html',
  styleUrls: ['./user-demande-item.component.scss']
})
export class UserDemandeItemComponent implements OnInit {
  @Input() demande: Demande;
  constructor(private demandeService: DemandeService,private  bookService: BookService) { }

  ngOnInit() {
    this.loadBook();
  }

  loadBook(){
    this.demandeService.getDemandeBook(this.demande.id).subscribe(
      data => {
        this.demande.book= data;
      }
    )
  }

}
