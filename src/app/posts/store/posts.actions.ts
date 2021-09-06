// VISWA YADEEDYA

import { createAction, props } from '@ngrx/store';
import { Posts } from './posts.state';

export const addSinglePost = '[posts page] add post';
export const ADD_POST_SUCESS = '[posts page] add postSucess';
export const updateSinglePost = '[posts page] update post';
export const UPDATE_POST_SUCESS = '[posts page] update sucess';
export const deleteSinglePost = '[posts page] delete post';
export const DELETE_POST_SUCESS = '[posts page] delete sucess';
export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCESS = '[posts page] load postsSucess';

export const loadPosts = createAction(LOAD_POSTS);

export const loadPostsSucess = createAction(
  LOAD_POSTS_SUCESS,
  props<{ posts: Posts[] }>()
);

export const addPost = createAction(addSinglePost, props<{ post: Posts }>());

export const addPostSucess = createAction(
  ADD_POST_SUCESS,
  props<{ post: Posts }>()
);

export const updatePost = createAction(
  updateSinglePost,
  props<{ post: Posts }>()
);

export const updatePostSucess = createAction(
  UPDATE_POST_SUCESS,
  props<{ post: Posts }>()
);

export const deletePost = createAction(
  deleteSinglePost,
  props<{ id: string }>()
);

export const deletePostSucess = createAction(
  DELETE_POST_SUCESS,
  props<{ id: string }>()
);
