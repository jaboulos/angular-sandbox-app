import { Injectable } from '@angular/core';
// import HTTP client
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import model
import { Post } from '../Models/Post';

// make variable for any header types we want to send
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // need URL that we are going to fetch from
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // has type of observable, observable has subtype of our model
  getPosts(): Observable<Post[]> {
    // making a request to postsUrl
    return this.http.get<Post[]>(this.postsUrl);
  }

  // when making a post request, want to add header value of the content type
  // back on the post-form component.ts file, savePost takes in an object with properties for title and body
  // this returns an observable of a single post, not an array of posts, so dont add [] brackets in the subtype field
  savePost(post: Post): Observable<Post> {
    // include the post request type, our Post model
    // in the post request, pass in the url, the post object which is coming in through savePost(post:Post), and httpOptions
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
}
