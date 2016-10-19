import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComponent } from '../post/post.component'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  // @Input() title: string = '';

  postComponent = new PostComponent()

  posts = this.postComponent.posts

  post = {
    title: '',
    body: ''
  }

  onSubmit(form: NgForm) {
    this.posts.push(this.post)
  }
}
