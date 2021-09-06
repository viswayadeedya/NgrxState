// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { autoLogout } from 'src/app/auth/store/auth.actions';
import { isAuthenticated } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(isAuthenticated).subscribe((data) => {
      this.isAuthenticated = data;
    });
  }
  onLogout(event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }
}
