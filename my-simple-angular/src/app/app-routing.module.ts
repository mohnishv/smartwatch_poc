import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './auth/components/home/home.component';
import { SiteAfterheaderComponent } from './auth/components/site-afterheader/site-afterheader.component';
import { ProfileComponent } from './auth/components/profile/profile.component';
import { NotfoundComponent } from './auth/components/notfound/notfound.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'login', component: LoginComponent, },
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    component: SiteAfterheaderComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'profile', component: ProfileComponent  },
      {path: '**', component: NotfoundComponent},
    ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
],
})
export class AppRoutingModule { }
