import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrencyActions } from '../../store/actions/currency.actions';

@Component({
  selector: 'app-currency-rates-container',
  templateUrl: './currency-rates-container.component.html',
  styleUrls: ['./currency-rates-container.component.scss'],
})
export class CurrencyRatesContainerComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CurrencyActions.loadLatestCurrencyRates());  
  }
}
