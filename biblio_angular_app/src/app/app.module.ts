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
import {AuthService} from './_services/auth.service';
import {AlertifyService} from './_services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import {AuthGuard} from './_guards/auth.guard';
import {JwtModule} from '@auth0/angular-jwt';
import {CategoryService} from './_services/category.service';
import {BookService} from './_services/book.service';
import { AdminCategoryEditComponent } from './AdminComponents/categories/admin-category-edit/admin-category-edit.component';
import { AdminCategoryAddComponent } from './AdminComponents/categories/admin-category-add/admin-category-add.component';
import { BookDetailsComponent } from './SharedComponents/book-details/book-details.component';
import {AdminDashboardComponent} from './AdminComponents/admin-dashboard/admin-dashboard.component';

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
    BookDetailsComponent
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
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
