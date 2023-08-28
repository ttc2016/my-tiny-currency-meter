import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRatesContainerComponent } from './currency-rates-container.component';

describe('CurrencyRatesContainerComponent', () => {
  let component: CurrencyRatesContainerComponent;
  let fixture: ComponentFixture<CurrencyRatesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyRatesContainerComponent]
    });
    fixture = TestBed.createComponent(CurrencyRatesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
