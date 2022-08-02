import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
   //Login
   private login = new BehaviorSubject<any>('');
   public Login = this.login.asObservable();
 
   set_login(login : any){
     this.login.next(login)
   }

}
