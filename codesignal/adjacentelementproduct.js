function solution(inputArray) {
  let products = [];
  for(let i = 0; i <= inputArray.length - 2; i++){
      products.push(inputArray[i] * inputArray[i + 1])
  }
  
  return Math.max(...products);
}