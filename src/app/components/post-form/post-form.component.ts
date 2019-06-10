import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // create mehtod to send post request
  addPost(title, body) {
    if(!title || !body) {
      alert('Please add post');
    } else {
      console.log(123);
    }
  }
}
