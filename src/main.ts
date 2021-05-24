import { of, range, from } from 'rxjs';
import { last, map, filter } from 'rxjs/operators';

const numbers$ = of(1, 2, 3).pipe(
  map((val) => val * 1),
  filter((val) => val % 2 === 0)
);

const observer = {
  next: (x: number) => console.log(x),
  error: (err: Error) => console.log(err),
  complete: () => console.log('completed'),
};

// numbers$.subscribe(observer);

const rangeNumbers$ = range(1, 10).pipe(last());

// rangeNumbers$.subscribe(observer);

const array$ = from([10, 20, 30]).pipe(map((val: any) => val * 2));

array$.subscribe(observer);
