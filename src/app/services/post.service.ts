import { Injectable } from '@angular/core';
// import HTTP client
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import model
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // need URL that we are going to fetch from
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  // has type of observable, observable has subtype of our model
  getPosts(): Observable<Post[]> {
    // making a request to postsUrl
    return this.http.get<Post[]>(this.postsUrl);
  }
}
