// mplement permutation type that transforms union types into the array that includes permutations of unions.

// type perm = Permutation<'A' | 'B' | 'C'>; 

// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T,C=T> = [T] extends [never] 
  ? []
  : T  extends infer U
    ? [U, ...Permutation<Exclude<C, U>>] // T 和 C已经不同，extends结构了T，所以现在T不是联合类型了，只是单个，所以应该是Exclude<C, U>
    : []

