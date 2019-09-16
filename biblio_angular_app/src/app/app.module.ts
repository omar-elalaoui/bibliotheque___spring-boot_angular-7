import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { AdminSidebarComponent } from './AdminComponents/admin-home/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './AdminComponents/admin-home/admin-header/admin-header.component';
import { AdminBookListComponent } from './AdminComponents/Books/admin-book-list/admin-book-list.component';
import { AdminBookItemComponent } from './AdminComponents/Books/admin-book-item/admin-book-item.component';
import { AdminBookFormComponent } from './AdminComponents/Books/admin-book-form/admin-book-form.component';
import { AdminCategoryListComponent } from './AdminComponents/categories/admin-category-list/admin-category-list.component';
import {AppRoutingModule} from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './SharedComponents/login/login.component';
import { RegisterComponent } from './UserComponents/register/register.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AlertifyService} from './services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import {ErrorInterceptorProvider} from './services/error.interceptor';
import {AuthGuard} from './guards/auth.guard';
import {JwtModule} from '@auth0/angular-jwt';
import {CategoryService} from './services/category.service';
import {BookService} from './services/book.service';
import { AdminCategoryEditComponent } from './AdminComponents/categories/admin-category-edit/admin-category-edit.component';
import { AdminCategoryAddComponent } from './AdminComponents/categories/admin-category-add/admin-category-add.component';
import { BookDetailsComponent } from './SharedComponents/book-details/book-details.component';
import {AdminDashboardComponent} from './AdminComponents/admin-dashboard/admin-dashboard.component';
import { AdminUserListComponent } from './AdminComponents/users/admin-user-list/admin-user-list.component';
import { AdminUserProfileComponent } from './AdminComponents/users/admin-user-profile/admin-user-profile.component';
import { UserHomeComponent } from './UserComponents/home/user-home.component';
import { UserSidebarComponent } from './UserComponents/home/user-sidebar/user-sidebar.component';
import { UserHeaderComponent } from './UserComponents/home/user-header/user-header.component';
import { UserBookListComponent } from './UserComponents/book/user-book-list/user-book-list.component';
import { UserProfileComponent } from './UserComponents/profile/user-profile/user-profile.component';
import { UserBookItemComponent } from './UserComponents/book/user-book-item/user-book-item.component';
import { UserDemandeListComponent } from './UserComponents/demande/user-demande-list/user-demande-list.component';
import { UserDemandeItemComponent } from './UserComponents/demande/user-demande-item/user-demande-item.component';
import { UserEmpruntListComponent } from './UserComponents/emprunt/user-emprunt-list/user-emprunt-list.component';
import { UserEmpruntItemComponent } from './UserComponents/emprunt/user-emprunt-item/user-emprunt-item.component';
import { UserProfileEditComponent } from './UserComponents/profile/user-profile-edit/user-profile-edit.component';
import {EmpruntService} from './services/emprunt.service';
import {DemandeService} from './services/demande.service';
import {UserResolver} from './_resolvers/user.resolver';

export function tokenGetter(){
   return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminBookListComponent,
    AdminBookItemComponent,
    AdminBookFormComponent,
    AdminCategoryListComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    AdminCategoryEditComponent,
    AdminCategoryAddComponent,
    BookDetailsComponent,
    AdminUserListComponent,
    AdminUserProfileComponent,
    UserHomeComponent,
    UserSidebarComponent,
    UserHeaderComponent,
    UserBookListComponent,
    UserProfileComponent,
    UserBookItemComponent,
    UserDemandeListComponent,
    UserDemandeItemComponent,
    UserEmpruntListComponent,
    UserEmpruntItemComponent,
    UserProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8086'],
        blacklistedRoutes: ['localhost:8086/login', 'localhost:8086/register']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    ErrorInterceptorProvider,
    AuthGuard,
    CategoryService,
    BookService,
    EmpruntService,
    DemandeService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
