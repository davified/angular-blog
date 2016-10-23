// This component is responsible for getting blogposts and posting a blogpost
import { Component, OnInit, OnChanges, HostBinding,
  trigger, transition, animate,
  style, state } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComponent } from '../post/post.component'
import { Post } from '../shared/post'
import { PostsService} from '../post/posts.service'

// loading components for animated routing
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
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
        }),
        animate('0.3s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
        }))
      ])
    ])
  ]
})

export class NewPostComponent {
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

  private selectedId: number;

  constructor(
    private ps: PostsService,
    private service: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  // typing/creating our variables.
  errorMessage: string;
  posts: Post[];
  mode = 'Observable';
  id: number;
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

  onSelect(post: Post) {
    this.router.navigate(['/posts', post.id]);
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
