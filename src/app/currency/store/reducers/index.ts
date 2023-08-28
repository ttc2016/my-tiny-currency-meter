import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as currencyReducer from './currency.reducers';
import { CurrencyState } from '../../models/currency-state.model';


export interface State {

  [currencyReducer.currencyFeatureKey]:CurrencyState;
}

export const reducers: ActionReducerMap<State> = {

  [currencyReducer.currencyFeatureKey]: currencyReducer.currencyRatesReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];



