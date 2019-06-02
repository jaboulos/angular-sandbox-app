import { Component, OnInit } from "@angular/core";

// import interface
import { User } from "../../Models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  // Property users that uses the User model as array of users
  users: User[];

  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        address: {
          street: "1234 My Street",
          city: "Folsom",
          state: "CA"
        }
      },
      {
        firstName: "Sean",
        lastName: "Johnson",
        age: 34,
        address: {
          street: "4321 Sean Street",
          city: "Lynn",
          state: "MA"
        }
      },
      {
        firstName: "Keira",
        lastName: "Williams",
        age: 27,
        address: {
          street: "55 Mill Street",
          city: "Miami",
          state: "FL"
        }
      }
    ];

    this.addUser({
      firstName: "David",
      lastName: "Davidson",
      age: 24,
      address: {
        street: "51 Fake Street",
        city: "Miami",
        state: "FL"
      }
    });
  }

  // Method to add data to HTML template
  addUser(user: User) {
    this.users.push(user);
  }
}
