// for-bar-baz -> forBarBaz

type CamelCase<S> = S extends `${infer L}-${infer T}${infer R}` 
  ? T extends Uppercase<T> 
    ? `${L}-${CamelCase<`${T}${R}`>}`
    : `${L}${Uppercase<T>}${CamelCase<R>}`
  : S ;