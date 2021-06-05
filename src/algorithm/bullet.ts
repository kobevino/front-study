/**
 * @description
 * 풍선을 터트리는 총알 갯수 구하기
 * 예외 조건)
 * 1. [0, 0]에서 시작한다.
 * 2. [0, 0]에 풍선은 위치할 수 없다.
 * 3. 관통할 수 있는 위치에 있는 풍선은 하나의 총알로 계산한다.
 */
export function solution(coordinates: [number, number][]): number {
  const resultSet = Array.from({ length: 4 }, () => new Set());
  coordinates.forEach(([x, y]) => {
    const inclination = y / x;
    const quadrant = x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
    resultSet[quadrant - 1].add(inclination);
  });
  return resultSet.reduce((acc, set) => acc + set.size, 0);
}
