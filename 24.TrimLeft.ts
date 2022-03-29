// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace

//  beginning removed.

// For example

// type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type TrimLeft<T extends string> = T extends `${'\n' | '\t' | ' '}${infer Rest}` ? TrimLeft<Rest> : T;
