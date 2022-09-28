import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-afterheader',
  templateUrl: './site-afterheader.component.html',
  styleUrls: ['./site-afterheader.component.scss']
})
export class SiteAfterheaderComponent implements OnInit {
  isLogin: boolean = false
  constructor( private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void {
  }
  

  logout(){
    this._auth.clearStorage()
    this._router.navigate(['login']);
  }
}
