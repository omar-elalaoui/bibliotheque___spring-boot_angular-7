import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../_services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertifyService} from '../../../_services/alertify.service';
import {Category} from '../../../_models/category';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss']
})
export class AdminCategoryEditComponent implements OnInit {
  category;
  constructor(private categoryService: CategoryService, private router: Router,
              private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCategory();
  }

  updateCategory(){
    this.categoryService.saveCategory(this.category).subscribe(
      next =>{
        this.router.navigate(['/adminHome/categories']);
        this.alertify.success("catégorie mise à jour avec succès");
      },
      error => {this.alertify.error(error)});
  }

  loadCategory(){
    const CategoryId: number= this.route.snapshot.params['id'];
    this.categoryService.getCategory(CategoryId).subscribe(
      category =>{this.category= category},
      error => {this.alertify.error(error)})
  }

}
