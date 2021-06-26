import { interval, timer, from } from 'rxjs';
import {
  take,
  map,
  filter,
  delay,
  mergeMap,
  last,
  first,
  debounceTime,
  mapTo,
  mergeAll,
} from 'rxjs/operators';

/**
 * @description 1초마다 출력된 5개의 값만 가져온다.
 * */
// interval(1000).pipe(take(5)).subscribe(console.log);

/**
 * @description 1초마다 출력된 값의 제곱 연산을 한다.
 */
// interval(1000)
//   .pipe(
//     take(5),
//     map((v) => v * v),
//   )
//   .subscribe(console.log);

/**
 * @description 1초마다 출력된 값의 홀수만 필터링한다.
 */
// interval(2000)
//   .pipe(filter((v) => v % 2 !== 0))
//   .subscribe(console.log);

/**
 * @description
 * 1. 1초마다 출력된 값을 2초 지연시킨다
 * 2. 2초 지연시킨 값을 3개만 가져온다. (0, 1, 2)
 * 3. 3개의 값의 홀수만 필터링한다.
 */
// interval(1000)
//   .pipe(
//     delay(2000),
//     take(3),
//     filter((v) => v % 2 !== 0)
//   )
//   .subscribe(console.log);

/**
 * @description
 * 1. 1초마다 출력된 값을 2초 지연시킨다
 * 2. 홀수값만 필터링한다. (1, 3, 5, 7, 9, ...)
 * 3. 3개의 값만 가져온다.
 */
// interval(1000)
//   .pipe(
//     delay(2000),
//     filter((v) => v % 2 !== 0),
//     take(3)
//   )
//   .subscribe(console.log);

function fakeFetch(index: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Rx ${index}`);
    }, 300);
  });
}
// interval(200)
//   .pipe(
//     take(5),
//     mergeMap((val) => fakeFetch(val)),
//     debounceTime(250)
//   )
//   .subscribe(console.log);

from([1, 2, 3])
  .pipe(
    // map((v) => fakeFetch(v)),
    // mergeAll()
    mergeMap((v) => fakeFetch(v))
  )
  .subscribe(console.log);
