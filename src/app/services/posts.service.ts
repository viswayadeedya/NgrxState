// VISWA YADEEDYA
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Posts } from '../posts/store/posts.state';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http
      .get(`https://ngrx-counter-80bf3-default-rtdb.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          const posts = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addPost(post: Posts) {
    return this.http.post<{ name: string }>(
      `https://ngrx-counter-80bf3-default-rtdb.firebaseio.com/posts.json`,
      post
    );
  }

  updatePosts(post: Posts) {
    const postData = {
      [post.id]: { title: post.title, description: post.description },
    };
    return this.http.patch(
      `https://ngrx-counter-80bf3-default-rtdb.firebaseio.com/posts.json`,
      postData
    );
  }

  deletePost(id: string) {
    return this.http.delete(
      `https://ngrx-counter-80bf3-default-rtdb.firebaseio.com/posts.json?id=${id}`
    );
  }
}
