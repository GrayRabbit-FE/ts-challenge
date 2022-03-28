// Implement the type version of Array.unshift

// For example

// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

type Unshift<T extends unknown[],U> = Includes<T,U> extends true ? T :[U,...T];