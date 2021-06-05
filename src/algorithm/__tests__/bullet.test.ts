import { solution } from '../bullet';

describe('gets number of all bullets', () => {
  it('should be 2', () => {
    expect(
      solution([
        [1, 2],
        [1, 1],
        [2, 2],
        [2, 4],
      ])
    ).toBe(2);
  });

  it('should be 5', () => {
    expect(
      solution([
        [0, 1],
        [0, 2],
        [0, 3],
        [0, -1],
        [0, -2],
        [1, -1],
        [2, -2],
        [3, 5],
        [1, 3],
        [2, 6],
      ])
    ).toBe(5);
  });

  it('should be 3', () => {
    expect(
      solution([
        [1, 2],
        [-3, 4],
        [5, 6],
      ])
    ).toBe(3);
  });
});
