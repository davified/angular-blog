import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor() { }
  title: string = 'first post'
  body: string = 'hello world'

  ngOnInit() {
  }

}
