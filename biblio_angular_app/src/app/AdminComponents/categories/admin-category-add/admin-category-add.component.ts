import { Component, OnInit } from '@angular/core';
import {Category} from '../../../_models/category';
import {CategoryService} from '../../../_services/category.service';
import {Router} from '@angular/router';
import {AlertifyService} from '../../../_services/alertify.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent implements OnInit {
  category= new Category();
  constructor(private categoryService: CategoryService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  saveCategory(){
    this.category.date_creation= new Date();
    this.categoryService.saveCategory(this.category).subscribe(
      next =>{
        this.router.navigate(['/adminHome/categories']);
        this.alertify.success("Catégorie ajoutée avec succès");
      },
      error => {this.alertify.error(error)});
  }

}
