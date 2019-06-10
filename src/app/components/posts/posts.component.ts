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

  // inject service into constructor
  constructor(private postService: PostService) { }

  ngOnInit() {
    // bring in individual posts, this comes from post service
    this.postService.getPosts().subscribe(posts => {
      // to gain access of the body and use in our template, set posts field variable = to what is returned
      this.posts = posts;
      console.log(posts);
    })
  }

}
