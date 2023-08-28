import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { CurrencyRatesDto } from '../models/dto/currency-rates.dto';
import { firstValueFrom } from 'rxjs';
import { CurrencySymbolsDto } from '../models/dto/currency-symbols.dto';
import { environment } from 'environment';
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  async getLatestCurrencyRatesAsync(): Promise<CurrencyRatesDto> {
    try {
      console.log('getLatestCurrencyRatesAsync');
      return firstValueFrom(
        await this.http
          .get<CurrencyRatesDto>(
            `http://data.fixer.io/api/latest?access_key=${environment.fixerApiKey}`
          )
          .pipe(
            tap((rates) => {
              console.log(rates);
            })
          )
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
 
  async getCurrencyNamesAsync(): Promise<CurrencySymbolsDto> {
    try {
      console.log('getLatestCurrencyRatesAsync');
      return firstValueFrom(
        await this.http
          .get<CurrencySymbolsDto>(
            `http://data.fixer.io/api/symbols?access_key=${environment.fixerApiKey}`
          )
          .pipe(
            tap((rates) => {
              console.log(rates);
            })
          )
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

