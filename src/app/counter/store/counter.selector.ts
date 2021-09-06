// VISWA YADEEDYA

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounterValue = createSelector(getCounterState, (state) => {
  return state.counter;
});
export const getTitleName = createSelector(getCounterState, (state) => {
  return state.title;
});
