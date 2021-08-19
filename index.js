

//brute force

var twoSum = function(numbers, target) {

    const result = [];
    for(let i=0; i<numbers.length; i++){
        const diff = target - numbers[i];
        
        if(numbers.indexOf(diff)!==-1 && numbers.indexOf(diff)!==i){
            result.push(i+1, numbers.indexOf(diff)+1)
        }
        if(result.length===2){
            return result.sort((a, b) => a - b);
      } 
    }
};

//O(1)
// function twoSum(numbers, target) {
//     for(let start = 0, end = numbers.length-1; start < end;){
//         let sum = numbers[start] + numbers[end]
//         if(sum === target)return [++start, ++end]
//         else sum > target ? end-- : start++
//     }
// };


//my notes:

    
    //given an array of integers
    //an integer
    
    //return an array the length of 2 that is the indexes of two integers that
    //add up to the target integer
    //loop through the array, if the target - element = another element that's 
    //included in the array, return the index of both of those elelments