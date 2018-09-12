// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutingModule } from './routing.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SignupComponent} from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
