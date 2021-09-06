// VISWA YADEEDYA

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounterValue } from '../store/counter.selector';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounterValue);
  }
}
