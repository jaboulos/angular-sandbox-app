import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { PostService } from './../../services/post.service';
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    // private location: Location
    ) { }

  ngOnInit() {
    // get the id that is passed into the url
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // set this.post = to whatever the post is that is coming in
    this.postService.getPost(id).subscribe(post => this.post = post );
  }

}
