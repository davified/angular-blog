// This component is responsible for getting blogposts and posting a blogpost
import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComponent } from '../post/post.component'
import { Post } from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {

  constructor(private ps: PostsService) { }
  // typing/creating our variables.
  errorMessage: string;
  posts: Post[];
  mode = 'Observable';
  title: string;
  body: string;

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
    post['image_url'] = 'https://source.unsplash.com/random'
    post['likes'] = '0'
    post['author'] = 'david'
    this.ps.addPost(post)
      .subscribe(
      post => { this.posts.push(post); this.getPosts() },
      error => this.errorMessage = <any>error);
    this.title = ''
    this.body = ''
  }
}
