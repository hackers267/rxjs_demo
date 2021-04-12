import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

type Person = {
  name: string;
  age: number;
};

const person: Person[] = [
  { name: "Foo", age: 12 },
  { name: "Bar", age: 13 },
  { name: "Foo", age: 14 },
  { name: "Foo", age: 15 },
  { name: "Bar", age: 16 },
];

const data: number[] = [1, 2, 2, 2, 3, 3, 4, 2, 1];
from(data).pipe(distinctUntilChanged()).subscribe(console.log);

from(person)
  .pipe(distinctUntilChanged((p, q) => p.name === q.name))
  .subscribe(console.log);
