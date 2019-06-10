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

  // boolean for changing innertext on form button
  isEdit: boolean = false;

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

    // going to pass isEdit into post-form.html and ts
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    // loop through all of the posts
    // inside the forEach, going to get the current post and the index
    this.posts.forEach((cur, index) => {
      // check to see if post.id, the post coming from our eventemitter is equal to the current id
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    });
  }

  removePost(post: Post) {
    // confirm if you want to remove post
    if(confirm('Are you sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        // loop through posts and check to see if post id matches current iteration, if it does
        // splice it out
        this.posts.forEach((cur, index) => {
          // check to see if post.id, the post coming from our eventemitter is equal to the current id
          if (post.id === cur.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
