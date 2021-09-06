// VISWA YADEEDYA
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCESS = '[auth page] login sucess';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCESS = '[auth page] signup sucess';

export const AUTO_LOGIN = '[auth page] auto login';
export const AUTO_LOGOUT = '[auth page] auto logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCESS,
  props<{ user: User; redirect: boolean }>()
);

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCESS,
  props<{ user: User }>()
);

export const autoLogin = createAction(AUTO_LOGIN);
export const autoLogout = createAction(AUTO_LOGOUT);
