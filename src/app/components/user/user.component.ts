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
  address = {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }

  // METHODS
  // runs when app is initialized
  constructor() {
    this.sayHello();
    this.changeAddress();
   }

   sayHello() {
    //  console.log(`Hello ${this.firstName} ${this.lastName}`)
    console.log('initial age: ', this.age);
    this.hasBirthday();
    console.log('age after method updating the age is put in the constructor: ', this.age);

    this.changeName();
   }

   hasBirthday() {
     this.age += 1;
   }

   changeName() {
     this.firstName = 'Joe';
     this.lastName = "Boulos"
   }

   changeAddress() {
     this.address.street = "1234 my st"
     this.address.city = 'Folsom'
     this.address.state = "CA"
   }


  // LIFE CYCLE HOOK
  ngOnInit() {
  }

}
