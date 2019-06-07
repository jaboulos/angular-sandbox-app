import { Component, OnInit, ViewChild } from "@angular/core";
// ViewChild gives us access to a child component or directive, using ngForm directive

// import service
import { DataService } from '../../services/data.service';
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
    firstName: "",
    lastName: "",
    email: ""
  };
  // Property users that uses the User model as array of users
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  @ViewChild("userForm") form: any;

  // add data property for observable
  data: any;

  // private means we can only use it within this class
  // declare its name, the name can be anything, for here we'll call it dataService.  _ means its a private service, depeneds on your style
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    // subscribe to observable
    this._dataService.getData().subscribe(data => {
      console.log(data);
    });
    // put service into this.users property (not sure what that means)
    this.users = this._dataService.getUsers();

    setTimeout(() => {
      // load the users after 2 seconds
      this.loaded = true;
    }, 2000);
    // call setCurrentClasses function to apply classes to ngClass elements
    this.setCurrentClasses();
    // this.showExtended = true;
    this.setCurrentStyles();
  }

  // Method to add data to HTML template
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    // how to clear out form
    this.user = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  // take in the event that you pass in
  fireEvent(e) {
    // e.target.value gives actual value typed in
    console.log("Button clicked, all event info: ", e.target.value);
    console.log("Button clicked, all event info: ", e.type);
  }

  toggleShowExtended() {
    this.showExtended = !this.showExtended;
  }

  // function to set values for currentClasses property
  setCurrentClasses() {
    this.currentClasses = {
      // this class will be applied to the ngClass button if this.enableAdd is true
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      // if showExtended is true, padding is 0, else padding is 40px
      "padding-top": this.showExtended ? "0" : "40px"
    };
  }

  // toggleHide(user:User) {
  //   user.hide= !user.hide
  // }

  // onSubmit(e) {
  //   console.log(123);
  //   e.preventDefault();
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // user service post request
      // this.users.unshift(value);
      // pass in value, value object is coming from the form, see params for onSubmit
      this._dataService.addUser(value)
      this.form.reset();
    }
  }
}
