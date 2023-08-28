import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrencyService } from '../../services/currency.service';
import { map, exhaustMap, mergeMap } from 'rxjs/operators';
import { CurrencyActions } from '../actions/currency.actions';
import { forkJoin, from } from 'rxjs';
import { CurrencyRate } from '../../models/currency-state.model';

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}

  loadLatestCurrencyRates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CurrencyActions.loadLatestCurrencyRates),
      mergeMap(() =>
        from(
          forkJoin([
            this.currencyService.getLatestCurrencyRatesAsync(),
            this.currencyService.getCurrencyNamesAsync(),
          ]).pipe(
            map(([ratesDto, namesDto]) => {
            
             
              const rates = Object.keys(ratesDto.rates).map((key) => {
                return {
                  currencyAbbreviation: key,
                  rate: ratesDto.rates[key],
                  date: ratesDto.date,
                  currencyName: namesDto.symbols[key],
                };
              }) as CurrencyRate[];
         


               return CurrencyActions.loadLatestCurrencyRatesSuccess({ rates  });
            })
          )
        )
      )
    );
  });
}
