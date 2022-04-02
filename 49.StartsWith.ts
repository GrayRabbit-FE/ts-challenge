// Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

// For example

// type a = StartsWith<'abc', 'ac'> // expected to be false
// type b = StartsWith<'abc', 'ab'> // expected to be true
// type c = StartsWith<'abc', 'abcd'> // expected to be false

type StartsWith<T extends string, U extends string> = U extends `${infer UF}${infer UT}` ?
  T extends `${infer TF}${infer TT}`?
    TF extends UF ?
      StartsWith<TT,UT>:
      false:
    false:
  true