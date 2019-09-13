import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {AlertifyService} from '../../../services/alertify.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.getCaterogies().subscribe((categories) => {
      this.categories= categories;
    }, error => this.alertify.error(error));
  }

  deleteCategory(id: number){
    this.alertify.confirm("Categorie","vous etes sur de supprimer cette catégorei ?", function() {
      this.categoryService.deleteCategory(id).subscribe(
        next => {this.loadCategories();},
        erro => {this.alertify.error(erro)});
    }.bind(this));
  }
}
