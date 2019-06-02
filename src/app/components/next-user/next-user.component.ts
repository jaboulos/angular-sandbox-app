import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-user',
  templateUrl: './next-user.component.html',
  styleUrls: ['./next-user.component.css']
})
export class NextUserComponent implements OnInit {

  // PROPERTIES
  firstName: string;
  lastName: string;
  age: number = 30;
  address = {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  };
  foo: any;
  hasKids: boolean;
  // typescript for this one is saying it has to be an array of numbers
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  // METHODS
  // runs when app is initialized
  constructor() {
    this.sayHello();
    this.changeAddress();
    this.changeName();
    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1,2,3,4,5,];
    this.stringArray = ['Hello', 'World'];
    this.mixedArray = [1,2,'three',true];
    this.myTuple = ['first', 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    console.log('addNumbers() :', this.addNumbers(2,3));
   }

   sayHello() {
    console.log('initial age: ', this.age);
    this.hasBirthday();
    console.log('age after method updating the age is put in the constructor: ', this.age);

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

   addNumbers(num1: number, num2:number): number {
     return num1+num2
   }


  // LIFE CYCLE HOOK
  ngOnInit() {
  }

}