import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CurrencyRatesDto } from '../../models/dto/currency-rates.dto';
import { CurrencySymbolsDto } from '../../models/dto/currency-symbols.dto';
import { CurrencyRate } from '../../models/currency-state.model';

export const CurrencyActions = createActionGroup({
  source: 'Currency',
  events: {
    'Load Latest Currency Rates': emptyProps(),
    'Load Latest Currency Rates Success': props<{ rates: CurrencyRate[]}>(),
    'Load Latest Currency Rates Failure': props<{ error: unknown }>(),
  }
});
