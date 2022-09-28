import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { MustMatch } from '../../../services/must-match.validator'
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router,
    private formBuilder: FormBuilder
  ) { }
  registerForm: any;
  submitted = false;



  
  ngOnInit() {
    this.isUserLogin(); 
    this.registerForm = this.formBuilder.group({
     // title: ['', Validators.required],
      username: ['', Validators.required],
      //Dob:['',[Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmpassword')
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
    this._api.postTypeRequest('user/register', this.registerForm.value).subscribe((res: any) => {
      if (res.status) { 
        console.log(res)
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['profile']);
      } else { 
        console.log(res)
        alert(res.msg)
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
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