function solution(s1, s2) {
  const s2Elements = s2.split("");
  let commonCount = 0;
  for(str of s1){
      let indx = s2Elements.findIndex(s => s === str)
      if(indx >= 0){
          commonCount++;
          s2Elements.splice(indx, 1);
      }
  }
  return commonCount;
}
