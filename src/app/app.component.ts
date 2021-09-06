// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/store/auth.actions';
import {
  getErrorMessage,
  getLoadingState,
} from './store/shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  counter: number;
  isLoading: Observable<boolean>;
  errorMessage: Observable<string>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoading = this.store.select(getLoadingState);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin());
  }

  onIncrement() {
    this.counter = this.counter + 1;
  }
  onDecrement() {
    this.counter = this.counter - 1;
  }
  onReset() {
    this.counter = 0;
  }
}
