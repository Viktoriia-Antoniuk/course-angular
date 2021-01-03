import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    console.log(id);
    this.postService.deletePost(id).subscribe((post) => {
      console.log(post);
      // tslint:disable-next-line: triple-equals
      const indexPost = this.posts.findIndex((item) => item.id == id);
      this.posts.splice(indexPost, 1)
    });
  }
}
