// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addPost, updatePost } from '../store/posts.actions';
import { getPosts } from '../store/posts.selectors';
import { Posts } from '../store/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postTitle: string;
  postForm: FormGroup;
  post: Posts;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.keys.length === 0) {
        this.postTitle = 'Add Post';
        this.postForm = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(6)]],
          description: ['', [Validators.required, Validators.minLength(10)]],
        });
      } else {
        this.postTitle = 'Update Post';
        const id = params.get('id');
        this.store.select(getPosts).subscribe((posts) => {
          this.post = posts.find((post) => {
            return post ? post.id === id : null;
          });
        });
        this.postForm = this.fb.group({
          title: [
            this.post.title,
            [Validators.required, Validators.minLength(6)],
          ],
          description: [
            this.post.description,
            [Validators.required, Validators.minLength(10)],
          ],
        });
      }
    });
  }
  //  Validation check for title
  titleValidator(): string {
    const validDescription = this.postForm.controls['title'];
    if (validDescription.touched && !validDescription.valid) {
      return 'Title is required with minimum of 6 charecters';
    } else {
      return '';
    }
  }
  //  Validation check for description
  descriptionValidator(): string {
    const validDescription = this.postForm.controls['description'];
    if (validDescription.touched && !validDescription.valid) {
      return 'Description is required with minimum of 10 charecters';
    } else {
      return '';
    }
  }
  //  Adding Post
  addPost() {
    this.route.paramMap.subscribe((params) => {
      if (params.keys.length === 0) {
        const post: Posts = {
          title: this.postForm.value.title,
          description: this.postForm.value.description,
        };
        this.store.dispatch(addPost({ post }));
        this.postForm.reset();
        this.router.navigate(['/posts']);
      } else {
        const post: Posts = {
          id: params.get('id'),
          title: this.postForm.value.title,
          description: this.postForm.value.description,
        };
        this.store.dispatch(updatePost({ post }));
        this.postForm.reset();
        this.router.navigate(['/posts']);
      }
    });
  }
}
