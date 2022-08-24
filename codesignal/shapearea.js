function solution(n) {
  let areaOfPolygon = 1;
  
  for (let i = 1; i <= n; i++){
      const x = (4 * i) - 4;
      areaOfPolygon += + x;
  };
  return areaOfPolygon;
   
}
