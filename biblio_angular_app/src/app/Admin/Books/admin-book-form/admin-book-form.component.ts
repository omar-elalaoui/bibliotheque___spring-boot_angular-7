import { Component, OnInit } from '@angular/core';
import {Book} from '../../../_models/book';
import {BookService} from '../../../_services/book.service';
import {AlertifyService} from '../../../_services/alertify.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-admin-book-form',
  templateUrl: './admin-book-form.component.html',
  styleUrls: ['./admin-book-form.component.css']
})
export class AdminBookFormComponent implements OnInit {
  localFileUrl: any[];
  image;
  book= new Book();
  constructor(private bookService: BookService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  saveBook(){
    this.bookService.saveOrUpdateBook(this.image, this.book).subscribe(
      next =>{
        if(next instanceof HttpResponse) {
          this.router.navigate(['/adminHome/livres']);
          this.alertify.success("livre ajouté avec succès");
        }
        },
      error => {this.alertify.error(error)}
    )
  }

  displayAndAssignImg(event){
    if (event.target.files && event.target.files[0]) {
      this.image= event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localFileUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
