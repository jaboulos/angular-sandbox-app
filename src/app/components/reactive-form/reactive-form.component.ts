import { CustomValidators } from './../../CustomValidators/CustomValidators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // define a field, name it form, set it to a new instance of the FormGroup() object
  // assign one or more validators when defining formControl objects in constructor of FormControl object

  formOne = new FormGroup({
    // use FormGroup for complex forms
    // angular has built in validators, check documentation for full list
    // for multiple validators in one field, put into an array
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      CustomValidators.cannotContainSpace,
      CustomValidators.cannotContainNumbers
    ]),
    password: new FormControl('', Validators.required),
  });

  // we can define properties that give us access to the username object
  // if we do this, we can access this property in our template, so we dont have to do it twice
  get username() {
    return this.formOne.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
