import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComponent } from '../post/post.component'
import { Post } from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'
})

export class NewPostComponent {

  constructor(private ps: PostsService) { }
  // typing/creating our variables.
  errorMessage: string;
  posts: Post[];
  mode = 'Observable';

  getPosts() {
    this.ps.getPosts()
      .subscribe(
      posts => { this.posts = posts },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getPosts()
  }

  addPost(post: Post) {
    if (!post) { return; }
    this.ps.addPost(post)
      .subscribe(
      post => { this.posts.push(post) },
      error => this.errorMessage = <any>error);
    this.title = ''
    this.body = ''
    this.getPosts();
  }

}
