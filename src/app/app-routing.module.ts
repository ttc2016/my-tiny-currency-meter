import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyRatesContainerComponent } from './currency/components/currency-rates-container/currency-rates-container.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [  
  { path: '', component: CurrencyRatesContainerComponent },
  { path: 'error', component: ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
