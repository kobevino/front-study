import { solution as getCandleKit } from '../candleKit';

describe('candleKit', () => {
  const input1 = [15, 11, 12, 39, 100, 65, 37, 11000];
  const input2 = [1, 2, 3];
  const input3 = [6, 9];

  it(`gets number of all candle kits. (${input1})`, () => {
    expect(getCandleKit(input1)).toBe(7);
  });

  it(`gets number of all candle kits. (${input2})`, () => {
    expect(getCandleKit(input2)).toBe(1);
  });

  it(`gets number of all candle kits. (${input3})`, () => {
    expect(getCandleKit(input3)).toBe(1);
  });
});
