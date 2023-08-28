export interface CurrencyState {
  currencyRates : CurrencyRate [];
  currencySymbols: {[key: string]: number} ;
  
}

export interface CurrencyRate {
  currencyAbbreviation: string;
  currencyName: string;
  rate: number;
  date: string; 
}






            



