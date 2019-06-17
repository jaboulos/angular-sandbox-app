import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // inject login service
  constructor(private LoginService: LoginService) { }

  ngOnInit() {
    // $isLoggedIn is the variable publishing the user data, need to subscribe to it
    this.LoginService.$isLoggedIn
      // fetch the data
      .subscribe((data) => {
        console.log('I got this data', data)
      })
  }

}
