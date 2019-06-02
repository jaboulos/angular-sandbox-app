import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName: string = 'John';
  lastName: string = 'Doe';
  age: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
