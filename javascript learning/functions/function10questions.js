//1. Write a function that capitalizes the first letter of each word in a sentence.
function checkCapitalizedFirstLetter(string){
    var capitalizedFirstLetter = string.split(" ");
    for(let i = 0; i < capitalizedFirstLetter.length; i++){
        capitalizedFirstLetter[i] = capitalizedFirstLetter[i][0].toUpperCase() + capitalizedFirstLetter[i].slice(1);
    }
    return capitalizedFirstLetter.join(" ");
}
const resultCapitalizedFirstLetter = checkCapitalizedFirstLetter("hello world.");
console.log(resultCapitalizedFirstLetter);

//2.function that merges two arrays and returns the sorted result;
function checkMergeAndSort(array1, array2){
    var array3 = array1.concat(array2);
    return array3.sort((a,b) => a-b);
}
const resultMergeAndSort = checkMergeAndSort([1,2,3,4,5], [6,7,8,9,10]);
console.log(resultMergeAndSort);

//3.function that converts a number to its Roman numeral reprensentation.
function convertInRomanNumbers(number){
    const romanNumbers = { 1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X',
                            9: 'IX', 5: 'V', 4: 'IV', 1: 'I' };
    let result = '';
    for(let i in romanNumbers){
       
        while (number >= i) {
            result += romanNumbers[i];
            number -= i;
        }
      
    }                        
    return result;
}
const resultInRomanNumbers = convertInRomanNumbers(15);
console.log(resultInRomanNumbers);

//4.function that finds the second smallest element in an array of numbers.
function checkSecondSmallest(array){
    const secondSmallest = array.sort((a,b) => a-b);
    return secondSmallest[1];
}
const resultSecondSmallest = checkSecondSmallest([1,2,3,4,5]);
console.log(resultSecondSmallest);

//5.function that truncates a string if it exceeds a specific length and appends to '...' to the end.
function checkTruncatesAString(string, length){
    if(string.length > length){
        return string.slice(0, length)+"...";
    }
    return string;
}
const resultTruncatesAString = checkTruncatesAString("hello world" , 5);
console.log(resultTruncatesAString);

//6.function that checks if a given string contains only digits.
function checkOnlyDigits(string){
    for(let i = 0; i < string.length; i++){
        if(!Number.isInteger(parseInt(string[i]))){
            return false;
        }
    }
    return true;
}
const resultOnlyDigits = checkOnlyDigits("12345");
console.log(resultOnlyDigits);

//7.function that removes all falsy values from an array.
function removeFalsyValues(array){
    return array.filter(Boolean);
}
const resultRemoveFalsyValues = removeFalsyValues([false, 1,2,3,4,5]);
console.log(resultRemoveFalsyValues);

//8.function that generates a new array with unique values from a given array.
function generateNewArray(array){
    return [...new Set(array)];
}
const resultGenerateNewArray = generateNewArray([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10]);
console.log(resultGenerateNewArray);

//9.function that takes two parameters and returns their sum.");
function checkSum(number1, number2){
    return number1 + number2;
}
const resultSum = checkSum(1,2);
console.log(resultSum);

//10.function that calculates the average of an array of numbers.");
function checkArrayAverage(array){
    var sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum/array.length;
}
const resultArrayAverage = checkArrayAverage([1,2,3,4,5]);
console.log(resultArrayAverage);