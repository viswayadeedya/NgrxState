// VISWA YADEEDYA

import { createReducer, on } from '@ngrx/store';
import {
  addPostSucess,
  deletePostSucess,
  loadPostsSucess,
  updatePostSucess,
} from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPostSucess, (state, action) => {
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostSucess, (state, action) => {
    const updatedPost = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePostSucess, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post.id !== action.id;
      }),
    };
  }),
  on(loadPostsSucess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
