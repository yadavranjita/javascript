//1. write a javascript function that reverses a number.
function reverseNumber(number){
    var numStr = number.toString();
    var num = '';
    for(let i = numStr.length-1; i >= 0; i--){
        num = num + numStr[i];
    }
    return parseInt(num);
}
const resultReversedNumber = reverseNumber(32243);
console.log(resultReversedNumber);

//  2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
function checkPalindrome(string){
    var str = '';
    for(let i = string.length-1; i >= 0; i--){
        str = str + string[i];
    }
    return str;
}
const resultPalindrome = checkPalindrome("madam");
console.log(resultPalindrome);

// 3. Write a JavaScript function that generates all combinations of a string.
function possibleCombinations(string){
   var combinations = [];
   for(let i = 0; i < string.length; i++){
       for(let j = i+1; j < string.length+1; j++){
          combinations.push(string.slice(i, j));
       }
   }
   return combinations; 
}
const resultPossibleCombinations = possibleCombinations("dog");
console.log(resultPossibleCombinations);

// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
function alphabeticalOrder(string){
    var arr = string.split("");
    res = arr.sort().join("");
    return res;
}
const resultAlphabeticalOrder = alphabeticalOrder("webmaster");
console.log(resultAlphabeticalOrder);

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function upperCase(string){
    let arr = string.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
const resultUpperCase = upperCase("the quick brown fox");
console.log(resultUpperCase);

// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function longestWord(string){
    string = string.match(/[a-zA-Z0-9]+/gi);
    let longest = "";
    for(let i = 0; i < string.length; i++){
        if(string[i].length > longest.length){
            longest = string[i];
        }
    }
    return longest;
}
const resultLongestWord = longestWord("Web Development Tutorial");
console.log(resultLongestWord);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(string){
    var count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" ||
           string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U"){
            count = count +1;
        }
    }
    return count;
}  
const resultCountVowels = countVowels("The quick brown fox");
console.log(resultCountVowels);

// 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function primeNumber(number){
    if(number === 1){
        return false;
    }
    if(number === 2){
        return true;
    }
    for( let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
        return true;
    }
}
const resultPrimeNumber = primeNumber(37);
console.log(resultPrimeNumber);

// 9. Write a JavaScript function that accepts an argument and returns the type.
function argumentType(value){
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    if(typeof value === "object" || typeof value === "function"){
        for(let x = 0, len = dtypes.length; x < len; x++){
            if(value instanceof dtypes[x]){
                return dtypes[x];
            }        
        }
    } 
    return typeof value;
}
const resultArgumentType = argumentType(12);
console.log(resultArgumentType);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n){
    var i, j;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j){
                console.log(' 1 ');
            }
            else{
                console.log(' 0 ');
            }
        }
        console.log('---------');
    }
}
const resultIdentityMatrix = identityMatrix(4);
console.log(resultIdentityMatrix);

