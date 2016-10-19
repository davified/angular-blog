import { Component, OnInit, OnChanges } from '@angular/core';
import {Post} from '../shared/post'
import { PostsService} from '../post/posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private ps: PostsService) { }

  posts = this.ps.posts
  ngOnInit() {
  }
}
