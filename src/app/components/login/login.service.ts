import { Injectable, EventEmitter } from '@angular/core';
import { LoggedInUserEventArgs } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // field to hold boolean value that will be emitted
  $isLoggedIn = new EventEmitter();

  // set usertype to user interface, interface was defined on login.component.ts
  user: LoggedInUserEventArgs = {
    user: '',
    usertype: '',
    role: ''
  };

  constructor() { }

  // basic method to test and see if boolean affects ngIf statement and data is passed between sibling components
  login() {
    console.log('Login Service');
    this.user.user = 'codewithsrini';
    this.user.usertype = 'internal';
    this.user.role = 'admin';

    // publish user data so it can be subscribed by another component, in this example, the navbar
    // navbar will be the target component and will consume the value emitted
    this.$isLoggedIn.emit(this.user);
  }
}
