// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. 
//The output should be a boolean true or false.

// For example

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type Equal<X, Y> = <T>() => T extends X ? 1 : 2 extends <T>() => T extends Y ? 1 : 2 ? true : false;
type Includes<T, U> = T  extends [infer R,...infer Rest] ? Equal<R,U> extends true ? true : Includes<Rest,U> :false;