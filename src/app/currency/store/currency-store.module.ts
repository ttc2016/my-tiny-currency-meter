import { NgModule, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './effects/currency.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
})
export class CurrencyStoreModule {}
