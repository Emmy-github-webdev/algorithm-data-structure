function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unpairedNumber = 0;
  for(i = 0; i<A.length; i++){
      unpairedNumber = unpairedNumber ^ A[i];
  }
  return unpairedNumber;
}