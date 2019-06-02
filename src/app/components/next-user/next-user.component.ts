import { Component, OnInit } from "@angular/core";

// Import models/interfaces
import { NextUser } from '../../Models/NextUser'

@Component({
  selector: "app-next-user",
  templateUrl: "./next-user.component.html",
  styleUrls: ["./next-user.component.css"]
})
export class NextUserComponent implements OnInit {
  
  // Properties
  
  // Set this variable type to our model/interface  
  nextUser: NextUser;
  
  constructor() {
    this.nextUser = {
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

