import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output('change') change = new EventEmitter();

  // inject service
  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.service.login();
  }
}

// user details
export interface LoggedInUserEventArgs {
  user: string;
  usertype: string;
  role: string;
}
