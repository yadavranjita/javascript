// 3. write a javascript that generates all combinations of a string.
function checkCombinations(string){
    var combinationString = "";
    for(let i = 0; i < string.length; i++){
        combinationString = combinationString + string[i];
        return combinationString;
    }
    // return combinationString;
}
const resultCombinations = checkCombinations("dog");
console.log(resultCombinations);
