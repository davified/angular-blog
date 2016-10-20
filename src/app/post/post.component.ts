// this component was responsible for getting posts via http GET request. I've however removed it from the app. This is left here for demonstration purposes.
import { Component, OnInit, OnChanges } from '@angular/core';
import {Post} from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  providers: [PostsService]
})
export class PostComponent implements OnInit {
  errorMessage: string;
  posts: Post[];
  mode = 'Observable';

  constructor(private ps: PostsService) { }

  // posts = this.ps.posts
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.ps.getPosts()
      .subscribe(
      posts => { this.posts = posts },
      error => this.errorMessage = <any>error);
  }
}
