import { from, pipe, Subject } from "rxjs";
import { buffer, filter, tap } from "rxjs/operators";

const text = `#images|picture
id|string||id
url|string|null|地址
type|number|null|类型

#images|picture
id|string||id
url|string|null|地址
type|number|null|类型
`;
const data = text.split(/\n/);
const parts = from<string[]>(data);
const subject$ = new Subject<string>();

subject$
  .pipe(
    filter((x) => !!x),
    buffer(subject$.pipe(filter((x) => !x))),
    log()
  )
  .subscribe();

parts.subscribe(subject$);

function log() {
  return pipe(tap(console.log));
}
