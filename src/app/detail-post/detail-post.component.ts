// This component is responsible for getting blogposts and posting a blogpost
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostComponent } from '../post/post.component'
import { PostsService} from '../post/posts.service'

// routing
import {RouterModule, ActivatedRoute } from '@angular/router'
import {Subscription} from 'rxjs/Rx'


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})

export class DetailPostComponent implements OnDestroy {

  private subscription: Subscription; // preventing memory leaks

  constructor(private ps: PostsService, activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    )
  }
  // typing/creating our variables.
  id: string;
  errorMessage: string;
  post: any;
  mode = 'Observable';
  title: string;
  body: string;

  getSinglePost() {
    this.ps.getPost(this.id)
      .subscribe(
      post => { this.post = post; console.log(this.post) },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getSinglePost()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
