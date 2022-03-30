// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

// For example:

// type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<T extends unknown[]>  = T extends [infer F,...infer Rest] ?
    F extends unknown[] ? [...Flatten<F>,...Flatten<Rest>] : [F,...Flatten<Rest>] 
    : never;