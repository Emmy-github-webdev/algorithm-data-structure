// Binary Search Pseudocode

// Let min = 0 and max = n-1.
// If max < min, then stop: target is not present in array. Return -1.
// Compute guess as the average of max and min, rounded down (so that it is an integer).
// If array[guess] equals target, then stop. You found it! Return guess.
// If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// Otherwise, the guess was too high. Set max = guess - 1.
// Go back to step 2.
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    while(max >= min){
        guess = Math.floor((min + max) / 2);
        if(array[guess] === targetValue){
            return guess;
        }else if (array[guess] < targetValue){
            min = guess + 1;
        } else {
            max = guess -1;
        }
        
    }
    

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

/*
We have several different types of functions here, so we start by thinking about the general properties of those function types and how their rate of growth compares. Here's a reminder of different function types, in order of their growth:
Constant functions
Linear functions
Polynomial functions
Exponential functions
Hint #22 / 4
Which type is each of the presented options?
Constant functions:
111
Linear functions:
nnn
Polynomial functions:
n^2n 
2
 n, squared, n^3n 
3
 n, cubed
Exponential functions:
2^n2 
n
 2, start superscript, n, end superscript, (3/2)^n(3/2) 
n
*/