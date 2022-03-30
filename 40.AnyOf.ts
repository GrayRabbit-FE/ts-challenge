// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

// For example:

// type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
// type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.


type AnyOf<T extends readonly any[]> = T extends [infer F,...infer R]? 
  F extends 0 | '' | false | [] | { [key: string]: never }  ? 
    AnyOf<R> extends true ? 
      true:
      false:
  true:
false;
