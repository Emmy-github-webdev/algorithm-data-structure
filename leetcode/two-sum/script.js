function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; i++){
            if (i !== j){
                if (nums[i] + nums[j] === target){
                    // return [i, j];
                    console.log([i, j]);
                }
            }
        }
    }
};

twoSum([2,7,11,17], 9);