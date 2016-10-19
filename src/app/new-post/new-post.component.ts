import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComponent } from '../post/post.component'
import {Post} from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {

  constructor(private ps: PostsService) { }
  post: Post

  onSubmit(post: Post) {
    this.post = new Post(post.title, post.body)
    this.ps.addPost(this.post)
    console.log(this.ps)
  }
}
