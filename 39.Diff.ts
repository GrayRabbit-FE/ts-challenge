// Get an Object that is the difference between O & O1


type Diff<O, O1> = {
    [K in (Exclude<keyof O,keyof O1>) | (Exclude<keyof O1,keyof O>) ]: 
      K extends keyof O ? 
      O[K] : 
        K extends keyof O1 ? 
        O1[K] : 
      never;
  }
  