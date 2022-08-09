function solution(inputArray) {
  var max = inputArray[0].length;
  inputArray.map(item => max = Math.max(max, item.length));
  Str = inputArray.filter(item => item.length == max);
  return Str;
}
