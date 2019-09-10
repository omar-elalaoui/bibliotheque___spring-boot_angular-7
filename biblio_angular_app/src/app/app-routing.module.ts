import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCategoryListComponent} from './Admin/categories/admin-category-list/admin-category-list.component';
import {AdminBookListComponent} from './Admin/Books/admin-book-list/admin-book-list.component';
import {AdminBookFormComponent} from './Admin/Books/admin-book-form/admin-book-form.component';
import {AdminDashboardComponent} from './Admin/admin-dashboard/admin-dashboard.component';
import {LoginComponent} from './Admin/login/login.component';
import {RegisterComponent} from './Admin/register/register.component';
import {AdminHomeComponent} from './Admin/admin-home/admin-home.component';
import {AuthGuard} from './_guards/auth.guard';
import {AdminCategoryEditComponent} from './Admin/categories/admin-category-edit/admin-category-edit.component';
import {AdminCategoryAddComponent} from './Admin/categories/admin-category-add/admin-category-add.component';

const appRoutes:Routes= [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adminHome', component: AdminHomeComponent, canActivate:[AuthGuard], children:[
      {path: '', component: AdminDashboardComponent},
      {path: 'categories', component: AdminCategoryListComponent},
      {path: 'categories/add', component: AdminCategoryAddComponent},
      {path: 'categories/edit/:id', component: AdminCategoryEditComponent},
      {path: 'livres', component: AdminBookListComponent},
      {path: 'livres/form', component: AdminBookFormComponent}
    ]},
  {path: '**', redirectTo: 'adminHome', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
