import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // console logs ngModel
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    // get a json object that we can send to an api on a server that persists
    f.value;
  }

}
