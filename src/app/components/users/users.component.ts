import { Component, OnInit } from "@angular/core";

// import interface
import { User } from "../../Models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  // user property, will be used for input fields on form to bind to this
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  // Property users that uses the User model as array of users
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: "John",
          lastName: "Doe",
          age: 70,
          address: {
            street: "1234 My Street",
            city: "Folsom",
            state: "CA"
          },
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          hide: true
        },
        {
          firstName: "Sean",
          lastName: "Johnson",
          age: 34,
          address: {
            street: "4321 Sean Street",
            city: "Lynn",
            state: "MA"
          },
          // image: 'http://lorempixel.com/600/600/people/2',
          isActive: false,
          hide: true
        },
        {
          firstName: "Keira",
          lastName: "Williams",
          age: 27,
          address: {
            street: "55 Mill Street",
            city: "Miami",
            state: "FL"
          },
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: false,
          hide: true
        }
      ];
      // load the users after 2 seconds
      this.loaded = true;
    }, 2000)
    // call setCurrentClasses function to apply classes to ngClass elements
    this.setCurrentClasses();
    // this.showExtended = true;
    this.setCurrentStyles();
    
    // this.addUser({
    //   firstName: "David",
    //   lastName: "Davidson",
    //   age: 24,
    //   address: {
    //     street: "51 Fake Street",
    //     city: "Miami",
    //     state: "FL"
    //   }
    // });

  }


  // Method to add data to HTML template
  addUser(user: User) {
    this.users.push(user);
  }

  // take in the event that you pass in
  fireEvent(e) {
    // e.target.value gives actual value typed in
    console.log('Button clicked, all event info: ', e.target.value);
    console.log('Button clicked, all event info: ', e.type);
  }

  toggleShowExtended() {
    this.showExtended = !this.showExtended
  }

  // function to set values for currentClasses property
  setCurrentClasses() {
    this.currentClasses = {
      // this class will be applied to the ngClass button if this.enableAdd is true
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      // if showExtended is true, padding is 0, else padding is 40px
      'padding-top': this.showExtended ? '0' : '40px'
    }
  }

  // toggleHide(user:User) {
  //   user.hide= !user.hide
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

}
