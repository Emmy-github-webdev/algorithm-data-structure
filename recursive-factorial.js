/**
 * Challenge: Recursive factorial
Report a problem
Base case
In this challenge you will write a recursive function that returns the value of n!.

Start by writing the base case:
if n is zero, then factorial should just return the value 1.

Once implemented, uncomment the Program.assertEqual() for factorial(0) at the bottom to verify that the test assertion passes.
 */

var factorial = function(n) {
	// base case: 
	  var result = 1;
  for(var i = 1; i <= n; i++ ){
     if(n === 0){
        return 1;
     }else {
        result = result * i;
     }
  }

  return result;
	// recursive case:
}; 

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");

Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(5), 120);