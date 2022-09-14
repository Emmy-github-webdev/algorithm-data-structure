function insertion_Sort(input_array, array_length)
{
    let i, pivot_value, j;  
    for (i = 1; i = 0 && input_array[j] > pivot_value)
        {
            input_array[j + 1] = input_array[j];
            j = j - 1;
        }
        input_array[j + 1] = pivot_value;
    }
    return input_array;
}  
let input_array = [15,47,25,55,20,10 ];
let array_length = input_array.length;
insertion_Sort(input_array, array_length);
console.log("final sorted array : ", input_array);