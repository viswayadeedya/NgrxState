// VISWA YADEEDYA
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsEffects } from './store/posts.effects';
import { postsReducer } from './store/posts.reducers';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'update/:id', component: AddPostComponent },
    ],
  },
];

@NgModule({
  declarations: [PostListComponent, AddPostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PostsEffects]),
    StoreModule.forFeature('posts', postsReducer),
  ],
})
export class PostsModule {}
