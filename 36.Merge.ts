// Merge two types into a new type. Keys of the second type overrides keys of the first type.

type Merge<T, F> = {
    [P in keyof T | keyof F]: P extends keyof F ? F[P] :
    P extends keyof T ? T[P]
    : never;
}