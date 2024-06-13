/* Problem-Two Sum-Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target */

let twoSum = function(){
    let nums = [2,7,11,15];
    let target = 9;
    let hash = {};
    for (let i = 0; i<nums.length; i++){
        hash[nums[i]] = i;
    }
    for(let i = 0; i<nums.length; i++){
        let a = target-nums[i];
        if(hash[a] !== undefined && hash[a] != i){
            return [i,hash[a]];
        }
    }
    return [-1,-1];
}
twoSum();