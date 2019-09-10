import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminSidebarComponent } from './Admin/admin-home/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './Admin/admin-home/admin-header/admin-header.component';
import { AdminBookListComponent } from './Admin/Books/admin-book-list/admin-book-list.component';
import { AdminBookItemComponent } from './Admin/Books/admin-book-item/admin-book-item.component';
import { AdminBookFormComponent } from './Admin/Books/admin-book-form/admin-book-form.component';
import { AdminCategoryListComponent } from './Admin/categories/admin-category-list/admin-category-list.component';
import {AppRoutingModule} from './app-routing.module';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './Admin/login/login.component';
import { RegisterComponent } from './Admin/register/register.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import {AlertifyService} from './_services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import {AuthGuard} from './_guards/auth.guard';
import {JwtModule} from '@auth0/angular-jwt';
import {CategoryService} from './_services/category.service';
import {BookService} from './_services/book.service';
import { AdminCategoryEditComponent } from './Admin/categories/admin-category-edit/admin-category-edit.component';
import { AdminCategoryAddComponent } from './Admin/categories/admin-category-add/admin-category-add.component';
import { AdminBookDetailComponent } from './Admin/Books/admin-book-detail/admin-book-detail.component';

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
    AdminBookDetailComponent
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
