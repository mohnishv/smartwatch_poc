import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  loginForm: any;
  submitted = false;
  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.isUserLogin(); 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    console.log('Your form data : ', this.loginForm.value);
    this._api.postTypeRequest('user/login', this.loginForm.value).subscribe((res: any) => {
     
      if (res.status) { 
       
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['profile']);
      }
    })
  }
  isUserLogin(){
    if(this._auth.getUserDetails() != null){
        this.isLogin = true;
    }
  }
  logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}
