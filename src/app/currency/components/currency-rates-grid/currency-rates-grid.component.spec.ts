import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRatesGridComponent } from './currency-rates-grid.component';

describe('CurrencyRatesGridComponent', () => {
  let component: CurrencyRatesGridComponent;
  let fixture: ComponentFixture<CurrencyRatesGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyRatesGridComponent]
    });
    fixture = TestBed.createComponent(CurrencyRatesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
