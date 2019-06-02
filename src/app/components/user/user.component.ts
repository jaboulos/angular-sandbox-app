import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // PROPERTIES
  firstName: string = 'John';
  lastName: string = 'Doe';
  age: number = 30;

  // METHODS
  // runs when app is initialized
  constructor() { }

  // LIFE CYCLE HOOK
  ngOnInit() {
  }

}
