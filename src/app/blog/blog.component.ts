import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getAllPosts().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

}
