/* model for fixer.io api Response */
export interface CurrencyRatesDto {  
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    [key: string]: number; 
  }
}


