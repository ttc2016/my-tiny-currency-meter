export interface CurrencySymbolsDto {
    success: boolean;
    symbols: {
        [key: string]: string;
    };
}