// VISWA YADEEDYA
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { autoLogout } from '../auth/store/auth.actions';
import { AuthResponseData } from '../model/AuthResponseData.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logoutInterval: any;
  constructor(private http: HttpClient, private store: Store) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASEE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASEE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expiredData = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email, data.idToken, data.localId, expiredData);
    return user;
  }

  formatError(err) {
    switch (err) {
      case 'EMAIL_NOT_FOUND':
        return 'Invalid EmailId';
      case 'INVALID_PASSWORD':
        return 'Please enter correct password';
      case 'EMAIL_EXISTS':
        return 'Email exists please try to login';
      default:
        return 'Unknown error occurred';
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.setAutoLogout(user);
  }

  getUserFromLocalStorage() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      const expiredDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expiredDate
      );
      this.setAutoLogout(user);
      return user;
    }
    return null;
  }

  setAutoLogout(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();

    const autoLogoutTime = expirationDate - todaysDate;

    this.logoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
    }, autoLogoutTime);
  }
  logout() {
    localStorage.removeItem('userData');
    if (this.logoutInterval) {
      clearTimeout(this.logoutInterval);
      this.logoutInterval = null;
    }
  }
}
