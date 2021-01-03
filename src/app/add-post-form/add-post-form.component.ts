import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit {

  addPostForm: FormGroup;
  @Output() newPost = new EventEmitter<Post>();

  constructor(
    private fb: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  sendPost() {
    this.postService.addPost({...this.addPostForm.value, userId: 1}).subscribe((post) => {
      console.log(post);
      this.newPost.emit(post);
    });
  }
}
