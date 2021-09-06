// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCustomValue, changeTitleText } from '../store/counter.action';
import { getTitleName } from '../store/counter.selector';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css'],
})
export class CounterCustomInputComponent implements OnInit {
  value: number;
  titleText$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.titleText$ = this.store.select(getTitleName);
  }

  addToCounter() {
    if (+this.value <= 0 || +this.value >= 0) {
      this.store.dispatch(addCustomValue({ value: this.value }));
    } else {
      console.log('Plaese enter number');
    }
    this.value = null;
  }
  changeTitle() {
    this.store.dispatch(changeTitleText());
  }
}
