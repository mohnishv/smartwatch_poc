import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  singleClass: boolean = false
  isLogin: boolean = false
  constructor(private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router,
    @Inject(DOCUMENT) private document: Document
    ) { }
    @HostListener('window:scroll', [])
    onWindowScroll() {
      if (document.body.scrollTop > 20 ||     
      document.documentElement.scrollTop > 20) {
      
       this.singleClass = true;
       
       
        
      }
      else{
        this.singleClass = false;
      }
    }
  ngOnInit(): void {
    this.isUserLogin(); 
  }
  isUserLogin(){
    if(this._auth.getUserDetails() != null){
        this.isLogin = true;
    }
  }
  logout(){
    this._auth.clearStorage()
    this._router.navigate(['login']);
  }
}
function getElementById(arg0: string) {
  throw new Error('Function not implemented.');
}

