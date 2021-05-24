/**
 *
 * @description 촛불 키트 알고리즘
 *
 * 1. 우선 숫자 하나하나 split을 쪼개서 배열에 저장한다.
 * 2. 저장한 배열이 0이 될 때까지 Set 을 이용하여 중복되지 않게 이중배열을 형성한다.
 * 3. break 구문에서 빠져나와 촛불 키트 갯수를 구한다.
 *
 */
export function solution(arr: number[]): number {
  const result: string[] = arr.reduce(
    (acc: string[], curr: number) => [...acc, ...String(curr).split('')],
    []
  );

  let totalKit: Array<Array<string>> = [];

  for (let i = result.length; i > 0; i--) {
    if (!result.length) break; // 빈 배열이면 loop 중단하고 결과값으로 바로 도출

    const set = new Set(result);

    totalKit = set.size !== 0 ? [...totalKit, [...set]] : [...totalKit];

    set.forEach((item) => {
      const idx = result.findIndex((num) => num === item);
      result.splice(idx, 1);
    });
  }
  return totalKit.length;
}
