// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

// type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

type Trim<T extends string,P = TrimLeft<T>> = P extends  `${infer Rest}${'\n' | '\t' | ' '}` ? Trim<Rest> : P;