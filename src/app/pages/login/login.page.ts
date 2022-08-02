import { Component, OnInit } from '@angular/core';
import { ApicallService } from './../../services/apicall.service';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:any = {email:'',password:''};
  constructor(public apiCall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
  }
  login() {
    console.log(this.user)
    this.apiCall.api_addLogin(this.user);
  }
}
