import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// bring in service for making http requests
import { PostService } from '../../services/post.service';

// bring in model for each post
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  // emmit the new post, that is returned in the subscribe method to oru Posts component
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  // create mehtod to send post request
  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      // pass in object with fields you want to save in the savePost method, include "as Post" at the end
      // subscribe, this returns an observable (like a promise)
      this.postService.savePost({title, body} as Post).subscribe(post => {
        // emmit the new post, that is returned in the subscribe method to our Posts component
        // we're emitting an event from post-form component and it includes the new post
        this.newPost.emit(post);
        console.log(post);
      });
    }
  }
}
