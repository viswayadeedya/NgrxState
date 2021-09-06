//  VISWA YADEEDYA
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import {
  addPost,
  addPostSucess,
  deletePost,
  deletePostSucess,
  loadPosts,
  loadPostsSucess,
  updatePost,
  updatePostSucess,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private action$: Actions,
    private store: Store,
    private postsService: PostsService
  ) {}

  loadPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            return loadPostsSucess({ posts });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((post) => {
            const postAdded = { ...action.post, id: post.name };
            return addPostSucess({ post: postAdded });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updatePost),
      mergeMap((action) => {
        return this.postsService.updatePosts(action.post).pipe(
          map((data) => {
            return updatePostSucess({ post: action.post });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deletePost),
      mergeMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSucess({ id: action.id });
          })
        );
      })
    );
  });
}
