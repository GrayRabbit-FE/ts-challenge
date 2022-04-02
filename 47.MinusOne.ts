

// ans1:
// 当数字过大时认为无限递归，会报Error
type NumberToArr<T extends number, A extends number[] = []> = A['length'] extends T ?
    A :
    NumberToArr<T, [number, ...A]>

type MinusOne<T extends number> = NumberToArr<T> extends [infer N, ...infer R] ?
    R['length'] :
    0

// ans2:
type MinusOneMap = { "0": "9", "1": "0", "2": "1", "3": "2", "4": "3", "5": "4", "6": "5", "7": "6", "8": "7", "9": "8" }

type StringToArr<T extends string> = T extends `${infer F}${infer Rest}` ?
    [F, ...StringToArr<Rest>] :
    [];

type ArrToString<T extends unknown[]> = T extends [infer F, ...infer Rest] ?
    F extends string ?
    Rest extends string[] ?
    `${F}${ArrToString<Rest>}` :
    F :
    "" :
    "";

type Decrease<T extends string[]> =
T extends [...infer H, infer Last] ?
    Last extends '0' ?
        H extends string[] ?
            [...Decrease<H> extends ['0'] ? 
                [] : 
                Decrease<H>, 
                MinusOneMap[Last]
            ] :
        never :
        Last extends keyof MinusOneMap ?
            [...H, MinusOneMap[Last]] :
            never :
    never;

type StringToLenghtArr<T extends string, Res extends any[] = []> =
    `${Res['length']}` extends T
    ? Res
    : StringToLenghtArr<T, [...Res, 1]>

type PraseInt<T, Res extends unknown[] = []> = T extends `${infer Head}${infer Rest}` ?
    PraseInt<Rest, [...XTen<Res>, ...StringToLenghtArr<Head>]> :
    Res['length'];

type XTen<T extends unknown[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
type MinusOne2<T extends number> = PraseInt<ArrToString<Decrease<StringToArr<`${T}`>>>>;

let a: MinusOne2<1313> = 1312;