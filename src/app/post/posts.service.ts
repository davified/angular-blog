import {Post} from '../shared/'

export class PostsService {
  public posts: Post[] = [{
    title: 'first post',
    body: 'hello world'
  }, {
      title: 'second post',
      body: 'hello again'
    }, {
      title: 'third post',
      body: 'it\'s me again'
    }];

  constructor() { }

  getPosts() {
    return this.posts
  }

  addPosts(posts: Post[]) {
    Array.prototype.push.apply(this.posts, posts)
  }

  addPost(post: Post) {
    this.posts.push(post)
  }
}
