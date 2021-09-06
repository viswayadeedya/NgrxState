// VISWA YADEEDYA
import { createAction, props } from '@ngrx/store';

const SET_LOADING_ACTION = '[loading spinner] set spinner';
const SET_ERROR_MESSAGE = '[error message] set error';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ error: string }>()
);
