// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

// type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

type ReplaceAll<S extends string, F extends string, T extends string> =
    F extends '' ? S :
    S extends `${infer H}${F}${infer N}` ? `${H}${T}${ReplaceAll<N, F, T>}` : S;