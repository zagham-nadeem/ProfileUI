import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from './../../services/apicall.service';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  public user:any ;
  constructor(public apiCall: ApicallService, public global: GlobalService, private router: Router) { 
    this.global.Login.subscribe(res => {
      this.user = res[0];
    })
  }

  ngOnInit() {
    
  }
  update() {
    this.apiCall.api_updateSignup(this.user);
    this.router.navigate(['login']);
  }

}
