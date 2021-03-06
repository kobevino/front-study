import { solution as getCandleKit } from '../candleKit';

describe('gets number of all candle kits.', () => {
  const input1 = [15, 11, 12, 39, 100, 65, 37, 11000];
  const input2 = [1, 2, 3];
  const input3 = [6, 9];

  it(`should be 7. (${input1})`, () => {
    expect(getCandleKit(input1)).toBe(7);
  });

  it(`should be 1. (${input2})`, () => {
    expect(getCandleKit(input2)).toBe(1);
  });

  it(`should be 1. (${input3})`, () => {
    expect(getCandleKit(input3)).toBe(1);
  });
});
