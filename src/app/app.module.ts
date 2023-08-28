import { ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyModule } from './currency/currency.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CurrencyModule, BrowserAnimationsModule, EffectsModule.forRoot([])],
  providers: [ {
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}





    
