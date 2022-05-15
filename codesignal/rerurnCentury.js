function solution(year) {
  let century = 0;
  while(year > 0){
    year = year - 100;
    century = century + 1;
  }

  return century;
}