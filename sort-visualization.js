/**
 * Spin-off of Selection sort visualizer

In this project, you'll visualize the swapping strategy of selection sort, similar to the screenshot on the right.

To start off with, you'll need to bring in the selection sort algorithm code from the last challenge. Then, come up with an array of data and send that through the algorithm. For each iteration of the algorithm, display the current state of the array on the canvas, and then draw a line or arrow that shows the numbers being swapped.

Once you've successfully displayed the array being sorted, create 3 more arrays and display them as well, in a quadrant on the canvas. Create one array with reverse sorted values, one array where a few values are the same, and one array where only one value is out of order.
 */

var displayArray = function(array) {
  fill(255, 0, 0,0);
  stroke(0, 0, 0);
  rect(array[0],array[0],array.length*28,array.length*20);
  textFont(createFont("monospace"), 12);
 fill(255, 0, 0);
  text(array, array[0]+3,array[0]+15);
  
};

var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[secondIndex] = array[firstIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex){
  var minValue = array[startIndex];
  var minIndex = startIndex;
  for(var i = minIndex + 1; i < array.length; i++){
    if(array[i] < minValue) {
        minIndex = i;
        minValue = array[i];
    }
} 
return minIndex;
};

var selectionSort = function(array) {
var tem ;
for(var j = 0; j < array.length; j++){
   tem = indexOfMinimum(array, j);
   swap(array, j, tem);
}
displayArray(array);
};

var array = [2, 1, 3];
selectionSort(array);