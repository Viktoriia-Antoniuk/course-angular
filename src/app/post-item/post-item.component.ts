import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  @Output() deletePostId = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(id: number) {
    this.deletePostId.emit(id);
  }
}
