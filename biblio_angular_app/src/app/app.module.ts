import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminSidebarComponent } from './Admin/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminBookListComponent } from './Admin/admin-book-list/admin-book-list.component';
import { AdminBookItemComponent } from './Admin/admin-book-item/admin-book-item.component';
import { AdminBookFormComponent } from './Admin/admin-book-form/admin-book-form.component';
import { AdminCategoryListComponent } from './Admin/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './Admin/admin-category-form/admin-category-form.component';
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
    AdminCategoryFormComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent
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
  providers: [AuthService, AlertifyService, ErrorInterceptorProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
