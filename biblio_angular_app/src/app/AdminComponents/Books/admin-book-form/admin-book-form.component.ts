import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';
import {AlertifyService} from '../../../services/alertify.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-admin-book-form',
  templateUrl: './admin-book-form.component.html',
  styleUrls: ['./admin-book-form.component.css']
})
export class AdminBookFormComponent implements OnInit {
  localFileUrl="assets/img/default_cover.png";
  image:any=new File([""], "image");
  book= new Book();
  categories: Category[];
  editMode= false;


  constructor(private bookService: BookService, private alertify: AlertifyService,
              private router: Router, private categoryService: CategoryService, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.loadCategories();
    this.editMode= this.route.snapshot.params['id'] != null;
    if(this.editMode){
      const id= +this.route.snapshot.params['id'];
      this.localFileUrl= this.bookService.myApiUrl+id+'/getPic';
      this.bookService.getBookImage(id).subscribe(
        imgFile=>{this.image=imgFile;}
      )
      this.bookService.getBook(id).subscribe(
        book => { this.book= this.removeLinksAttr(book) ; this.loadBookCategory(id); console.log(this.book)}
      )
    }else { this.book.category= new Category(); }
  }

  saveBook(){
    if(this.image.size == 0){
      this.alertify.error("Image n'est pas choisi");
    }else{
      this.bookService.saveOrUpdateBook(this.image, this.book).subscribe(
        next =>{
          if(next instanceof HttpResponse) {
            this.router.navigate(['/adminHome/livres']);
            if(this.editMode){ this.alertify.success("Livre mise à jour avec succès"); }
            else { this.alertify.success("Livre ajouté avec succès"); }
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

  loadBookCategory(id: number){
    this.bookService.getBookCategory(id).subscribe(
      category =>{ this.book.category= new Category(); this.book.category.id= category.id;}
    )
  }

  removeLinksAttr(objVal: any){
    delete  objVal._links;
    return objVal;
  }

}
