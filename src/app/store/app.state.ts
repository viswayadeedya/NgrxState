// VISWA YADEEDYA

import { AuthReducer } from '../auth/store/auth.reducers';
import { AUTH_STATE_NAME } from '../auth/store/auth.selectors';
import { AuthState } from '../auth/store/auth.state';
import { sharedReducer } from './shared/shared.reducers';
import { SHARED_STATE_NAME } from './shared/shared.selectors';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
