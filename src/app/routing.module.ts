import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'user/:id', component: UserEditComponent, canActivate: [AuthGuard] },
    { path: 'add', component: UserEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
