/**
 * @description
 * 촛불 키트 최대 개수 구하기
 * 예외조건) 6, 9는 같이 사용할 수 있다.
 */
export function solution(ages: number[]): number {
  const kit: number[] = new Array(9).fill(0);

  ages.forEach((age) => {
    while (age > 0) {
      let idx = age % 10;
      if (idx === 9) idx = 6;
      kit[idx]++;
      age = Math.floor(age / 10);
    }
  });
  kit[6] = Math.ceil(kit[6] / 2);

  return Math.max(...kit);
}
