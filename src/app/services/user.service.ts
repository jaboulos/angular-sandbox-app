import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs';

import { User } from "../Models/User";


@Injectable({
  providedIn: "root"
})
export class UserService {
  // initialize users property and set it to user model
  users: User[];
  // create field for Observable <set to array><anything can be inside this array>>
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johnDoe@email.com",
        image: "http://lorempixel.com/600/600/people/9",
        isActive: true,
        registered: new Date("03/11/2017 06:20:00"),
        hide: true
      },
      {
        firstName: "Sean",
        lastName: "Johnson",
        email: "seanJohnson@gmail.com",
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        registered: new Date("03/11/2016 06:20:00"),
        hide: true
      },
      {
        firstName: "Keira",
        lastName: "Williams",
        email: "keiraWilliams@yahoo.com",
        image: "http://lorempixel.com/600/600/people/1",
        isActive: false,
        registered: new Date("03/11/2019 06:20:00"),
        hide: true
      }
    ];
    // End constructor bracket
  }


  // example of observable get request, open data stream
  getData() {
    this.data = new Observable(observer => {
      // publish anything that has subscribed to this observer
      setTimeout(() => {
      observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);

    })
    return this.data;
  }

  // Get users
  // give it a return type that is is an observable and match it to User model
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  // Post user data
  // takes in an argument user:User, body of the request
  addUser(user: User) {
    console.log('Post users success');
    // takes the user that was passed in and puts it to the front of the array
    this.users.unshift(user);
  }
}
