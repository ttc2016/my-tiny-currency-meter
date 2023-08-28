// create a selector for the currency rates from the store
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyState } from '../../models/currency-state.model';

export const selectCurrencyState =
  createFeatureSelector<CurrencyState>('currency');

export const selectCurrencyRates = createSelector(
  selectCurrencyState,
  (state: CurrencyState) => state.currencyRates
);

export const selectCurrencyRatesAsArray = createSelector(
  selectCurrencyRates,
  (currencyRates) => Object.values(currencyRates)
);
