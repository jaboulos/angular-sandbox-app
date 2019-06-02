import { Component, OnInit } from "@angular/core";

// Import models/interfaces
import { User } from '../../Models/User'

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  
  // Properties
  
  // Set this variable type to our model/interface  
  user: User;
  
  constructor() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        street: "1234 My Street",
        city: "Folsom",
        state: "CA"
      }
    };
  }

  ngOnInit() {}
}

