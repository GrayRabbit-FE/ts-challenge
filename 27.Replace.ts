// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

//type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<S extends string, F extends string, T extends string>
    = S extends `${infer H}${F}${infer N}` ?
    F extends '' ? S :
    `${H}${T}${N}` :
    S