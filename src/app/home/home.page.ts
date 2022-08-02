import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from './../services/apicall.service';
import { GlobalService } from './../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user:any;
  constructor(public apiCall: ApicallService, public global: GlobalService, public router: Router) {
    this.global.Login.subscribe(res=> {
      this.user = res[0];
      console.log(this.user);
    });
  }

  update() {
      this.router.navigate(['update']);
  }
  delete() {
    const x = {id:this.user.id};
    this.apiCall.api_deleteSignup(x);
    this.router.navigate(['login']);
  }

}
