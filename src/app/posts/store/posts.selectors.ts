// VISWA YADEEDYA

import {
  createFeatureSelector,
  createReducer,
  createSelector,
} from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});
