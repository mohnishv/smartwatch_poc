import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SiteAfterheaderComponent } from './components/site-afterheader/site-afterheader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    SiteAfterheaderComponent,
    ProfileComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports : [
    LoginComponent, 
    RegisterComponent 
  ]
})
export class AuthModule { }
