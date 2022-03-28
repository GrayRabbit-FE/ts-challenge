// Implement the generic version of Array.push

// For example

//type Result = Push<[1, 2], '3'> // [1, 2, '3']


type Push<T extends any[], U> = Includes<T,U> extends true? T : [...T,U];