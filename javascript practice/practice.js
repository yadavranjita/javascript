console.log("1. function that takes two parameters and returns their sum.");
function checkSum(number1, number2){
    return number1 + number2;
}
const resultSum = checkSum(1,2);
console.log(resultSum);

console.log("2. function that calculates the average of an array of numbers.");
function checkArrayAverage(array){
    var sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum/array.length;
}
const resultArrayAverage = checkArrayAverage([1,2,3,4,5]);
console.log(resultArrayAverage);

console.log("3. function that checks if a given number is even or odd.");
function checkEven(number){
        return number % 2 === 0;
}
const resultEven = checkEven(3);
console.log(resultEven);

console.log("4. function that reverses a string.");
function checkReversedString(string){
    var reversedString = "";
    for(let i = string.length-1; i >= 0; i--){
        reversedString = reversedString + string[i];
    }
    return reversedString;
}
const resultReversedString = checkReversedString("hello");
console.log(resultReversedString);

console.log("5. function that finds the maximum value in an array of numbers.");
function checkMaximumValue(array){
    var maximumValue = array[0];
    for(let i = 0; i <= array.length; i++){
       if(array[i] > maximumValue){
        maximumValue = array[i];
       } 
    }
    return maximumValue;
}
const resultMaximumValue = checkMaximumValue([1,2,3,4,5]);
console.log(resultMaximumValue);

console.log("6. function that converts Celsius to Fahrenheit.");
function checkCelsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
const resultCelsiusToFahrenheit = checkCelsiusToFahrenheit(32);
console.log(resultCelsiusToFahrenheit);

console.log("7. function that generates a random number between a given minimum and maximum.");
function checkRandomNumber(minimum, maximum){
   return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
const resultRandomNumber = checkRandomNumber(1,5);
console.log(resultRandomNumber);

console.log("8. function that checks if a string is palindrome.");
function checkStringIsPalindrome(string){
    var palindromeString = "";
    for(let i = string.length-1; i >= 0; i--){
        palindromeString = palindromeString + string[i];
    }
    return palindromeString === string;
}
const resultStringIsPalindrome = checkStringIsPalindrome("madam");
console.log(resultStringIsPalindrome);

//hard
console.log("9. function that capitalizes the first letter of each word in a sentence.");
function checkCapitalizedFirstLetter(string){
    var capitalizedFirstLetter = string.split(" ");
    for(let i = 0; i < capitalizedFirstLetter.length; i++){
        capitalizedFirstLetter[i] = capitalizedFirstLetter[i][0].toUpperCase() + capitalizedFirstLetter[i].slice(1);
    }
    return capitalizedFirstLetter.join(" ");
}
const resultCapitalizedFirstLetter = checkCapitalizedFirstLetter("hello world");
console.log(resultCapitalizedFirstLetter);

console.log("10. function that returns the factorial of a given number.");
function checkFactorial(number){
    var factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
const resultFactorial = checkFactorial(5);
console.log(resultFactorial);

console.log("11. function that counts the number of occurrences of a specific element in an array.");
function checkOccurrencesOfElement(array, number){
    var occurrencesOfElement = 0;
    for(let i = 0; i <= array.length; i++){
        if(number === array[i]){
            occurrencesOfElement = occurrencesOfElement + 1;
        }
    }
    return occurrencesOfElement;
}
const resultOccurrencesOfElement = checkOccurrencesOfElement([1,2,3,4,5,1], 1);
console.log(resultOccurrencesOfElement);

console.log("12. function that checks if a given year is a leap year.");
function checkLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0);
}
const resultLeapYear = checkLeapYear(2023);
console.log(resultLeapYear);

//hard
console.log("13. function that merges two arrays and returns the sorted result.");
function checkMergeAndSort(array1, array2){
    var array3 = array1.concat(array2);
    return array3.sort((a,b) => a-b);
}
const resultMergeAndSort = checkMergeAndSort([1,2,3,4,5], [6,7,8,9,10]);
console.log(resultMergeAndSort);

//hard //not done
console.log("14. function that converts a number to its Roman numeral reprensentation.");
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

//hard
console.log("15. function that finds the second smallest element in an array of numbers.");
function checkSecondSmallest(array){
    const secondSmallest = array.sort((a,b) => a-b);
    return secondSmallest[1];
}
const resultSecondSmallest = checkSecondSmallest([1,2,3,4,5]);
console.log(resultSecondSmallest);

console.log("16. function that calculates the area of a circle given its radius.");
function checkAreaCircle(radius){
    return Math.PI * radius * radius;
}
const resultAreaCircle = checkAreaCircle(3);
console.log(resultAreaCircle);

//hard
console.log("17. function that truncates a string if it exceeds a specific length and appends to '...' to the end.");
function checkTruncatesAString(string, length){
    if(string.length > length){
        return string.slice(0, length)+"...";
    }
    return string;
}
const resultTruncatesAString = checkTruncatesAString("hello world" , 5);
console.log(resultTruncatesAString);

//hard
console.log("18. function that checks if a given string contains only digits.");
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

//hard
console.log("19. function that removes all falsy values from an array.");
function removeFalsyValues(array){
    return array.filter(Boolean);
}
const resultRemoveFalsyValues = removeFalsyValues([false, 1,2,3,4,5]);
console.log(resultRemoveFalsyValues);

//hard
console.log("20. function that generates a new array with unique values from a given array.");
function generateNewArray(array){
    return [...new Set(array)];
}
const resultGenerateNewArray = generateNewArray([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10]);
console.log(resultGenerateNewArray);