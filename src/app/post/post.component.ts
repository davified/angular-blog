import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor() { }

  posts = [{
    title: 'first post',
    body: 'hello world'
  }, {
      title: 'second post',
      body: 'hello again'
    }, {
      title: 'third post',
      body: 'it\'s me again'
    }]
  ngOnInit() {
  }

  ngOnChanges() {

  }

}
