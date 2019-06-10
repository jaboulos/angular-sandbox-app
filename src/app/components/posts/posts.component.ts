import { Component, OnInit } from '@angular/core';
// import service for http requests
import { PostService } from '../../services/post.service';

// import post model
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // property for posts
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  // inject service into constructor
  constructor(private postService: PostService) { }

  ngOnInit() {
    // bring in individual posts, this comes from post service
    this.postService.getPosts().subscribe(posts => {
      // to gain access of the body and use in our template, set posts field variable = to what is returned
      this.posts = posts;
      // console.log(posts);
    });
  }

  // method for event emitter that was implemented on posts.component.html inside post-form selector (post-form emmits the event)
  onNewPost(post: Post) {
    // here we're adding the new post to the top of the post array from the get request
    this.posts.unshift(post);
  }

  // takes in a post, set type to Post model
  editPost(post: Post) {
    // set currentPost property = to whatever post is passed in (whaterever post we click on, edit button on form)
    // we are going to bind this to our post-form, so currentPost needs some default values.
      // We set those default values when we declared the field at the top of this page.
      // We want the form to be blank by default
    this.currentPost = post;
  }
}
