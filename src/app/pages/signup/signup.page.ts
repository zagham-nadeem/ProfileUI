import { Component, OnInit } from '@angular/core';
import { ApicallService } from './../../services/apicall.service';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public user:any = {first_name:'', last_name:'', email:'', password:''};
  constructor(public apiCall: ApicallService, public global: GlobalService) { }

  ngOnInit() {
  }
  signup() {
    this.apiCall.api_addSignup(this.user);
  }
}
