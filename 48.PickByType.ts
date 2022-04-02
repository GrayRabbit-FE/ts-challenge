// From T, pick a set of properties whose type are assignable to U.

// For Example

// type OnlyBoolean = PickByType<{
//   name: string
//   count: number
//   isReadonly: boolean
//   isEnable: boolean
// }, boolean> // { isReadonly: boolean; isEnable: boolean; }

type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
}
