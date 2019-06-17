import { Component, OnInit } from '@angular/core';

// import service for login
import { LoginService } from './../login/login.service';
// import loggedInUser model
import { LoggedInUserEventArgs } from './../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // inject login service
  constructor(private loginService: LoginService) { }

  isUserLogged = false;
  user: LoggedInUserEventArgs;

  ngOnInit() {
    // $isLoggedIn is the variable publishing the user data, need to subscribe to it
    this.loginService.$isLoggedIn
      // fetch the data
      .subscribe((data) => {
        console.log('I got this data', data);

        // this.isUserLogged = true;
        this.isUserLogged = !this.isUserLogged;
        // user data
        this.user = data;
      });
  }

}
