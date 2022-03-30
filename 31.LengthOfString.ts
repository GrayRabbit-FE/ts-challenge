// Compute the length of a string literal, which behaves like String#length.

type LengthOfString<S extends string,A extends unknown[] = []>  = S extends `${infer First}${infer Rest}` ? 
        LengthOfString<Rest,[...A,First]>
    : A['length']