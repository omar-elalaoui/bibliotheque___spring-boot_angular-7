import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCategoryListComponent} from './AdminComponents/categories/admin-category-list/admin-category-list.component';
import {AdminBookListComponent} from './AdminComponents/Books/admin-book-list/admin-book-list.component';
import {AdminBookFormComponent} from './AdminComponents/Books/admin-book-form/admin-book-form.component';
import {LoginComponent} from './SharedComponents/login/login.component';
import {RegisterComponent} from './UserComponents/register/register.component';
import {AdminHomeComponent} from './AdminComponents/admin-home/admin-home.component';
import {AuthGuard} from './_guards/auth.guard';
import {AdminCategoryEditComponent} from './AdminComponents/categories/admin-category-edit/admin-category-edit.component';
import {AdminCategoryAddComponent} from './AdminComponents/categories/admin-category-add/admin-category-add.component';
import {AdminDashboardComponent} from './AdminComponents/admin-dashboard/admin-dashboard.component';
import {BookDetailsComponent} from './SharedComponents/book-details/book-details.component';

const appRoutes:Routes= [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adminHome', component: AdminHomeComponent, canActivate:[AuthGuard], children:[
      {path: '', component: AdminDashboardComponent},
      {path: 'categories', component: AdminCategoryListComponent},
      {path: 'categories/add', component: AdminCategoryAddComponent},
      {path: 'categories/edit/:id', component: AdminCategoryEditComponent},
      {path: 'livres', component: AdminBookListComponent},
      {path: 'livres/form', component: AdminBookFormComponent},
      {path: 'livres/:id/details', component: BookDetailsComponent}
    ]},
  {path: '**', redirectTo: 'adminHome', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
