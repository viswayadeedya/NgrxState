// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { loginStart, signupStart } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: boolean;
  loginForm: FormGroup;
  logMessage: string = 'LogIn';
  switchMessage: string = 'SignUp';

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.login = true;
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  emailValidators() {
    const emailValidation = this.loginForm.controls['emailId'];
    if (emailValidation.touched && !emailValidation.valid) {
      return 'Please enter a valid Email Id';
    } else return '';
  }

  passwordValidators() {
    const passwordValidation = this.loginForm.controls['password'];
    if (passwordValidation.touched && !passwordValidation.valid) {
      return 'Please enter a valid Password with minimum 6 charecters';
    } else return '';
  }

  Onswitch() {
    if (this.logMessage === 'LogIn') {
      this.logMessage = 'SignUp';
      this.switchMessage = 'LogIn';
    } else {
      this.logMessage = 'LogIn';
      this.switchMessage = 'SignUp';
    }
  }

  onLoginSubmit(logMessage) {
    const email = this.loginForm.value.emailId;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    if (logMessage === 'LogIn') {
      this.store.dispatch(loginStart({ email: email, password: password }));
    }
    if (logMessage === 'SignUp') {
      this.store.dispatch(signupStart({ email: email, password: password }));
    }
  }
}
