function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
const aLength = A.length;
let missingNunber = Math.floor((aLength+1)*(aLength+2)/2);
for(let i = 0; i<aLength; i++){
   missingNunber -= A[i];
}
return missingNunber;
}