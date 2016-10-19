import { Component, OnInit, OnChanges } from '@angular/core';
import {Post} from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  constructor(private chicken: PostsService) { }

  posts = this.chicken.posts
  ngOnInit() {
    console.log(this.chicken)
    console.log(this.chicken.posts)
    console.log(this.chicken.zebra)
  }
}
