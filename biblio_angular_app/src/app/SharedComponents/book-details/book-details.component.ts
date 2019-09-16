import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../services/book.service';
import {StudentService} from '../../services/student.service';
import {Demande} from '../../models/demande';
import {DemandeService} from '../../services/demande.service';
import {AlertifyService} from '../../services/alertify.service';
import {Student} from '../../models/student';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  isStudent: boolean= false;
  constructor(private route: ActivatedRoute, private bookService: BookService, private studentService: StudentService,
              private demandeService: DemandeService,private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadBook();
    if(this.studentService.student){this.isStudent= true;}
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

  demanderBook(){
    let demande= new Demande();
    demande.book= new Book();
    demande.student= new Student();
    demande.book.id= this.book.id;
    demande.student.id= this.studentService.student.id;
    demande.date_demande= new Date();
    this.demandeService.demander(demande).subscribe(
      data =>{
        this.router.navigate(['/userHome/livres']);
        this.alertify.success("Votre demande est effectué")},
      error => {this.alertify.error(error)}
    );
  }

}
