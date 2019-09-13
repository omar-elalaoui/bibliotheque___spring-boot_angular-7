import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCategoryListComponent} from './AdminComponents/categories/admin-category-list/admin-category-list.component';
import {AdminBookListComponent} from './AdminComponents/Books/admin-book-list/admin-book-list.component';
import {AdminBookFormComponent} from './AdminComponents/Books/admin-book-form/admin-book-form.component';
import {LoginComponent} from './SharedComponents/login/login.component';
import {RegisterComponent} from './UserComponents/register/register.component';
import {AdminHomeComponent} from './AdminComponents/admin-home/admin-home.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminCategoryEditComponent} from './AdminComponents/categories/admin-category-edit/admin-category-edit.component';
import {AdminCategoryAddComponent} from './AdminComponents/categories/admin-category-add/admin-category-add.component';
import {AdminDashboardComponent} from './AdminComponents/admin-dashboard/admin-dashboard.component';
import {BookDetailsComponent} from './SharedComponents/book-details/book-details.component';
import {AdminUserListComponent} from './AdminComponents/users/admin-user-list/admin-user-list.component';
import {AdminUserProfileComponent} from './AdminComponents/users/admin-user-profile/admin-user-profile.component';
import {UserHomeComponent} from './UserComponents/home/user-home.component';
import {UserBookListComponent} from './UserComponents/book/user-book-list/user-book-list.component';
import {UserDemandeListComponent} from './UserComponents/demande/user-demande-list/user-demande-list.component';
import {UserEmpruntListComponent} from './UserComponents/emprunt/user-emprunt-list/user-emprunt-list.component';
import {UserProfileComponent} from './UserComponents/profile/user-profile/user-profile.component';
import {UserProfileEditComponent} from './UserComponents/profile/user-profile-edit/user-profile-edit.component';

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
      {path: 'livres/:id/details', component: BookDetailsComponent},
      {path: 'livres/:id/edit', component: AdminBookFormComponent},
      {path: 'users', component: AdminUserListComponent},
      {path: 'users/:id/profile', component: AdminUserProfileComponent}
    ]},
  {path: 'userHome', component: UserHomeComponent, children:[
      {path: '', component: UserBookListComponent},
      {path: 'livres', component: UserBookListComponent},
      {path: 'livres/:id', component: BookDetailsComponent},
      {path: 'categories/:id/bookList', component: UserBookListComponent},
      {path: 'demandes', component: UserDemandeListComponent},
      {path: 'empruntes', component: UserEmpruntListComponent},
      {path: 'profile', component: UserProfileComponent},
      {path: 'profile/edit', component: UserProfileEditComponent}
    ]},
  {path: '**', redirectTo: 'adminHome', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
