// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example

// type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'


type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S;