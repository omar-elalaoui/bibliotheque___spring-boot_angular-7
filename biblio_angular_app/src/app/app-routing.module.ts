import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCategoryListComponent} from './Admin/admin-category-list/admin-category-list.component';
import {AdminCategoryFormComponent} from './Admin/admin-category-form/admin-category-form.component';
import {AdminBookListComponent} from './Admin/admin-book-list/admin-book-list.component';
import {AdminBookFormComponent} from './Admin/admin-book-form/admin-book-form.component';
import {AdminDashboardComponent} from './Admin/admin-dashboard/admin-dashboard.component';
import {LoginComponent} from './Admin/login/login.component';
import {RegisterComponent} from './Admin/register/register.component';
import {AdminHomeComponent} from './Admin/admin-home/admin-home.component';
import {AuthGuard} from './_guards/auth.guard';

const appRoutes:Routes= [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adminHome', component: AdminHomeComponent, canActivate:[AuthGuard], children:[
      {path: '', component: AdminDashboardComponent},
      {path: 'categories', component: AdminCategoryListComponent},
      {path: 'categories/form', component: AdminCategoryFormComponent},
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
