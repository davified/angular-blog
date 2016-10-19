import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComponent } from '../post/post.component'
import {Post} from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'
})

export class NewPostComponent {

  constructor(private ps: PostsService) { }
  // post: Post

  onSubmit(chicken: Post) {
    // this.post = new Post(chicken.title, chicken.body)
    this.ps.addPost(chicken)
  }
}
