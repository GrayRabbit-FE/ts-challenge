//FooBarBaz -> foo-bar-baz

type KebabCase<S, isFirst extends boolean = true> = S extends `${infer First}${infer Rest}` ? 
    isFirst extends true ? `${Lowercase<First>}${KebabCase<Rest, false>}` : 
    First extends Lowercase<First> ? `${First}${KebabCase<Rest, false>}` : 
    `-${Lowercase<First>}${KebabCase<Rest, false>}` : S;