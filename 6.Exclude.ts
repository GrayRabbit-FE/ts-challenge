// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U


type MyExclude<T,U> = T extends U? never : T; 

//  if T = A | B 
// T extends U?K:V === A extends U ? K :V | B extends U ? K :V