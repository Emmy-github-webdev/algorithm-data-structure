/* 
Challenge: implement swap

Swap function
A key step in many sorting algorithms (including selection sort) is swapping the location of two items in an array. Here's a swap function that looks like it might work, but doesn't:
-the code prints out [9, 9, 4] when it should print out [9, 7, 4].

Fix the swap function.

Hint: Work through the code line by line, writing down the values of items in the array after each step. Could you use an extra temporary variable to solve the problem that shows up?

Once implemented, uncomment the Program.assertEqual() at the bottom to verify that the test assertion passes.
*/

/*
## Pseudocode

There are many different ways to sort the cards. Here's a simple one, called selection sort, possibly similar to how you sorted the cards above:
Find the smallest card. Swap it with the first card.
Find the second-smallest card. Swap it with the second card.
Find the third-smallest card. Swap it with the third card.
Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.
This algorithm is called selection sort because it repeatedly selects the next-smallest element and swaps it into place.
*/
var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

