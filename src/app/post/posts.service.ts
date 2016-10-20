// importing libraries for http requests
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {Post} from '../shared/'
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PostsService {
  private PostsUrl = 'http://express-blog-wdi5.herokuapp.com/blogposts'
  public anyChange: boolean
  constructor(private http: Http) { }

  // public posts: Post[] = [{
  //   title: 'first post',
  //   body: 'hello world'
  // }, {
  //     title: 'second post',
  //     body: 'hello again'
  //   }, {
  //     title: 'third post',
  //     body: 'it\'s me again'
  //   }];

  // old method. no http request. hard coded array
  // getPosts() {
  //   return this.posts
  // }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.PostsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addPost(post: Post) {
    // necessary for APIs that require headers/options configured
    // let body = JSON.stringify({ post });
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // to include options in your http request, add it as the third argument, after your {post} object, like so:
    // return this.http.post(this.PostsUrl, post, options)

    return this.http.post(this.PostsUrl, post)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    // NOTE: be careful to always inspect body first to see the content of the response.
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
