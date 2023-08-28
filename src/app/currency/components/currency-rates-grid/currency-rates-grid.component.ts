// this component is responsible for displaying the currency rates in a grid format, the currency rates are from the store. add the relevant code to the component to display the currency rates in a grid format.
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrencyRate, CurrencyState } from '../../models/currency-state.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-currency-rates-grid',
  templateUrl: './currency-rates-grid.component.html',
  styleUrls: ['./currency-rates-grid.component.scss'],
})
export class CurrencyRatesGridComponent implements OnInit {
  currencyRates$: Observable<CurrencyRate[]> = new Observable<CurrencyRate[]>();
  currencyRatesLength$: Observable<number> = new Observable<number>();
  displayedColumns: string[] = [
    'currencyName',
    'currencyAbbreviation',
    'rate',
    'date',
  ];
  public dataSource = new MatTableDataSource<CurrencyRate>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private store: Store<any>) {
    this.currencyRates$ = this.store.select((state) => {
      return state.currency.currencyRates;
    });
    this.currencyRatesLength$ = this.store.select((state) => {
      return state.currency.currencyRates.length;
    });
  }

  ngOnInit() {
    this.currencyRates$.subscribe((currencyRates) => {
      this.dataSource.data = currencyRates;
    });
  }
}
