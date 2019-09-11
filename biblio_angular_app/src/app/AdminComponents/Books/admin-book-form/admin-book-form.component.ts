import { Component, OnInit } from '@angular/core';
import {Book} from '../../../_models/book';
import {BookService} from '../../../_services/book.service';
import {AlertifyService} from '../../../_services/alertify.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {CategoryService} from '../../../_services/category.service';

@Component({
  selector: 'app-admin-book-form',
  templateUrl: './admin-book-form.component.html',
  styleUrls: ['./admin-book-form.component.css']
})
export class AdminBookFormComponent implements OnInit {
  localFileUrl="assets/img/default_cover.png";
  image=new File([""], "image");
  book= new Book();
  categories;
  constructor(private bookService: BookService, private alertify: AlertifyService,
              private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  saveBook(){
    if(this.image.size == 0){
      this.alertify.error("Image n'est pas choisi");
    }else{
      this.bookService.saveOrUpdateBook(this.image, this.book).subscribe(
        next =>{
          if(next instanceof HttpResponse) {
            this.router.navigate(['/adminHome/livres']);
            this.alertify.success("livre ajouté avec succès");
          }
        },
        error => {
          this.alertify.error(error);}
      )
    }

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

  loadCategories(){
    this.categoryService.getCaterogies().subscribe(
        categories =>{this.categories= categories;},
        error => {this.alertify.error(error)}
    )
  }

}
