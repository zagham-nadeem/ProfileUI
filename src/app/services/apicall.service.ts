import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {GlobalService} from './global.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  login: any;
  appo: any;

  constructor(private router: Router ,private authservice: AuthService , public global: GlobalService , public httpClient : HttpClient) { }

    //Login
    api_addLogin(login : any ){
      this.authservice.con(login, 'getsignup').then(async (res) => {
        this.login = JSON.parse(String(res).toString());
        if (this.login.error === false) {
          console.log(this.login.user);
          this.router.navigate(['home']);
          this.global.set_login(this.login.user);
          return;
        }
      }, (err) => {
        console.log(err);
      });
    }
    // Add Signup
    api_addSignup(login : any ){
      this.authservice.con(login, 'addSignup').then(async (res) => {
        this.login = JSON.parse(String(res).toString());
        if (this.login.error === false) {
          console.log(this.login);
          this.router.navigate(['login']);
          return;
        }
      }, (err) => {
        console.log(err);
      });
    }
    // Add Signup
    api_updateSignup(login : any ){
      this.authservice.con(login, 'updateSignup').then(async (res) => {
        this.login = JSON.parse(String(res).toString());
        if (this.login.error === false) {
          console.log(this.login);
          return;
        }
      }, (err) => {
        console.log(err);
      });
    }
    // Delete Signup
    api_deleteSignup(login : any ){
      this.authservice.con(login, 'deleteSignup').then(async (res) => {
        this.login = JSON.parse(String(res).toString());
        if (this.login.error === false) {
          console.log(this.login);
          return;
        }
      }, (err) => {
        console.log(err);
      });
    }
}
