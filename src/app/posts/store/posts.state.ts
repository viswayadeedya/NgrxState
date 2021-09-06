// VISWA YADEEDYA

export interface PostsState {
  posts: Posts[];
}

export interface Posts {
  id?: string;
  title: string;
  description: string;
}

export const initialState: PostsState = {
  posts: null,
};
