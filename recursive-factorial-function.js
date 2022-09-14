


/**
 * 
 * @param {Challenge: Iterative factorial
Report a problem
Iterative factorial
Finish the provided factorial function, so that it returns the value n!. Your code should use a for loop to compute the product 1 * 2 * 3 * ... * n. If you write the code carefully, you won't need a special case for when n equals 0.

Once implemented, uncomment the Program.assertEqual() statements at the bottom to verify that the test assertions pass.} n 
 * @returns 
 */
var factorial = function(n) {
  var result = 1;
  for(var i = 1; i <= n; i++ ){
      result = result * i;
  }

  return result;
};

println("The value of 5! should be " + 5*4*3*2*1);
println("The value of 5! is " + factorial(5));
println("The value of 0! should be 1");
println("The value of 0! is " + factorial(0));

Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(0), 1);
