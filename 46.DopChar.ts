// Drop a specified char from a string.

// For example:

// type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<S extends string, C> =S extends `${infer F}${infer Rest}` ? `${F extends C ? '' :F}${DropChar<Rest,C>}` : S;
 