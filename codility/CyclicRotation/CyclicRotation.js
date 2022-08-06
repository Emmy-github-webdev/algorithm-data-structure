// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let temp = 0;
  const aLength = A.length;
  k = K % aLength;
  for(i=0; i< k; i++){
      temp = A.pop();
      A.unshift(temp)
  }
  return A;
}
