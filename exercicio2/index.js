let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varD = varA;

varA = varB; // A = B
varB = varC; // B = C
varC = varD; // C = A

console.log(varA, varB, varC); 