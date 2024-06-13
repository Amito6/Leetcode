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

/* LeetCode 21 Problem-Valid Parantheses-Given a string s containing just the characters "(",")","{","}","[","]" dtetermine if the input String is Valid*/
/* An Input String is valid if
1.open brackets must be closed by the same type of brackets.
2.Open brackets must be closed in the correct order.
3.Every close bracket has a corresponding open bracket of the same type. */


/* Algo-Prepare a stack-in javascript we are making it with Array-and try testing  */

let validParantheses = function(s){
    let array = [];
    for (let i=0 ; i<s.length; i++){
        if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
            array.push(s[i]);
        }
        else if((array[array.length-1] == "(" && s[i] == ")") || (array[array.length-1] == "[" && s[i] == "]") || (array[array.length-1] == "{" && s[i] == "}")){
            array.pop();
        }
        else {
            return false
        }
    }
    return (array.length > 0) ? false : true
}

validParantheses();
