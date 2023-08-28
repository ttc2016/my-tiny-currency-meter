import { currencyRatesReducer, initialState } from './currency.reducers';

describe('Currency Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = currencyRatesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
