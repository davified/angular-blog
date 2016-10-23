// This component is responsible for getting blogposts and posting a blogpost
import { Component, OnInit, OnDestroy, HostBinding,
  trigger, transition, animate,
  style, state } from '@angular/core';
import { PostComponent } from '../post/post.component'
import { PostsService} from '../post/posts.service'

// routing
import {Router, RouterModule, ActivatedRoute } from '@angular/router'
import {Subscription} from 'rxjs/Rx'


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],

  // adding animation
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          // optional animations for left right slidey movements
          // transform: 'translateX(-100%)'
          // transition: '700ms linear'
        }),
        animate('1s ease-in')
      ]),
      transition('* => void', [
        animate('1s ease-out', style({
          opacity: 0,
          // transform: 'translateX(100%)'
          // transition: '700ms linear'
        }))
      ])
    ])
  ]
})

export class DetailPostComponent implements OnDestroy {
  // adding animations
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  // defining the class for a basic HTTP GET request
  private subscription: Subscription; // preventing memory leaks

  constructor(
    private ps: PostsService,
    activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
  ) {
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
    // get a post
    this.getSinglePost()
  }

  gotoPosts() {
    let id = this.post ? this.post.id : null;
    // Pass along the post id if available
    // so that the NewPostComponent can select that post.
    this.router.navigate(['/posts']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
