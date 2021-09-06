// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deletePost, loadPosts } from '../store/posts.actions';
import { getPosts } from '../store/posts.selectors';
import { Posts } from '../store/posts.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Posts[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }
  deletePost(id: string) {
    this.store.dispatch(deletePost({ id }));
  }
}
