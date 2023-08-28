import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyStoreModule } from './store/currency-store.module';
import { CurrencyRatesGridComponent } from './components/currency-rates-grid/currency-rates-grid.component';
import { CurrencyRatesContainerComponent } from './components/currency-rates-container/currency-rates-container.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    CurrencyRatesContainerComponent, CurrencyRatesGridComponent
   ],
  imports: [
    CommonModule, SharedModule, CurrencyStoreModule,HttpClientModule
  ],
  providers: [
   Router
  ],
  exports: [
    CurrencyRatesContainerComponent, CurrencyRatesGridComponent
  ]
})
export class CurrencyModule { }



