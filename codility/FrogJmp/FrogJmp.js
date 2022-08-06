
function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let numberOfJump = (Math.ceil((Y-X)/D));
  return numberOfJump;
}
