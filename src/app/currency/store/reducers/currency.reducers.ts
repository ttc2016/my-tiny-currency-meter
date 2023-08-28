import { createReducer, on } from '@ngrx/store';
import { CurrencyActions } from '../actions/currency.actions';
import { CurrencyState } from '../../models/currency-state.model';

export const currencyFeatureKey = 'currency';


export const initialState: CurrencyState = {
   currencyRates: [],
   currencySymbols: {}
};

export const currencyRatesReducer = createReducer(
  initialState,
  on(CurrencyActions.loadLatestCurrencyRatesSuccess, (state, {rates}) => ({ currencyRates: rates, currencySymbols: state.currencySymbols })),
);

