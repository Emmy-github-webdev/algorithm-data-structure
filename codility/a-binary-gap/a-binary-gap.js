// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function getGaps (BinaryArray, gaps) {
     // finding the first one via its index
     const firstOne = BinaryArray.indexOf("1");
     if (firstOne > -1) {
          // new array created taking a slice of original array 
          // from the index of the firstOne + 1 index
          let NewBinaryArray = BinaryArray.slice(firstOne + 1);
          // finding second one via its index in new array slice
          const secondOne = NewBinaryArray.indexOf("1");
          // accounting for no zeros
          if (secondOne > 0) {
               // adding 2 to our gaps array
               gaps.push(secondOne);
          }
 
          // Pass array minus second one and gaps array
          return getGaps(NewBinaryArray.slice(secondOne +1), gaps); 
     }
     
     // if gaps array length is empty return 0
     // otherwise return largest value in array
     return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}

// our function 
function solution (N) {
     
     // Tests if our value is an integer 
     // Tests if N is within range
     if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
          // Convert to binary
          const Binary = N.toString(2).split('');
          
          // calling our recursive function with initial empty gaps
          return getGaps(Binary, []);
     }
      
     // default if it doesn't meet the requirements
     return 0;
}
