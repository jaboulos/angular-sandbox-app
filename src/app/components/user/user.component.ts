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
  
  constructor() { }

  ngOnInit() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      email: "johnEmail@email.com",
      hide: true
    };
  }
  
}

