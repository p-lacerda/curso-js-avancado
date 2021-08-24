// let varA = 'A' // B
// let varB = 'B' // C
// let varC = 'C' // A

// let AB = 'A'
// let BA = 'B'
// let CA = 'C'

// varA = BA;
// varB = CA
// varC = AB

// console.log(varA, varB, varC)

// Desestruturação

let varA = 'A'; // B
let varB = 'B';// C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)