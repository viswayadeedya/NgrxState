// VISWA YADEEDYA

import { Action, createReducer, on } from '@ngrx/store';
import {
  addCustomValue,
  changeTitleText,
  decrement,
  increment,
  reset,
} from './counter.action';
import { CounterState, initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(addCustomValue, (state, action) => {
    return {
      ...state,
      counter: state.counter + +action.value,
    };
  }),
  on(changeTitleText, (state) => {
    return {
      ...state,
      title: 'Modified Title',
    };
  })
);

export function counterReducer(state: CounterState, action) {
  return _counterReducer(state, action);
}
