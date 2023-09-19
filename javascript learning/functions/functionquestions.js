console.log("5. Callback function");
function hello(hi){
    console.log("Hello World");
    hi("Rahul");
}
function hi(name){
    console.log("Hello " + name);
}
hello(hi);

console.log("1. function that takes two parameters and returns their sum");
function add(a, b){
    return a+b;
}
const sum = add(1,2);
console.log(sum);

console.log("2. function that the average of an array of numbers");
function average(array){
    let sums = 0;
    for(let i = 0; i < array.length; i++){
        sums = sums + array[i];
    }
    return sums/array.length;
}
const averageNumber = average([1,2,3,4,5]);
console.log(averageNumber);

console.log("3. function that checks if a given number is even or odd");
function isEven(number){
    return number % 2 === 0;
}
const evenOdd = isEven(2); 
console.log(evenOdd);

console.log("4. function that reverses a string");
function reverseString(str){
    let reversedStr = "";
    for(let i = str.length-1; i >= 0; i--){
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
}
const resultReversedString = reverseString("hello");
console.log(resultReversedString);

console.log("5. function that finds maximum value in array of numbers.");
function findMaximumValue(array){
    let maximumValue = array[0];
    for(let i = 0; i <= array.length; i++){
        if (array[i] > maximumValue) 
        maximumValue = array[i];
    }
    return maximumValue;
}
const resultMaximumValue = findMaximumValue([1,2,3,4,5]);
console.log(resultMaximumValue);

console.log("6. function that converts Celsius into Fahrenheit.");
function convertCelsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
const resultCelsiusToFahrenheit = convertCelsiusToFahrenheit(32);
console.log(resultCelsiusToFahrenheit);

console.log("7. function that generates a random number between a given minimum and maximum.");
function generateRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const resultGenerateRandomNumber = generateRandomNumber(2,10);
console.log(resultGenerateRandomNumber);

console.log("8. function that checks if a string is palindrome.");
function checkPalindrome(str){
    var reversedPalindrome = "";
    for(let i = str.length-1; i >= 0; i--){
        reversedPalindrome = reversedPalindrome + str[i];
    }
    if(reversedPalindrome === str){
        return true;
    }
    return false;
}
const resultPalindrome = checkPalindrome("madam");
console.log(resultPalindrome);

console.log("9. function that capitalizes the first letter of each sentence.");
function capitalize(str){
    var arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
const resultCapitalize = capitalize("hello world");
console.log(resultCapitalize);

console.log("10. function that returns factorial of a number.");
function factorial(number){
    if(number <= 1) return 1;
    return number * factorial(number-  1);
}
const resultFactorial = factorial(5);
console.log(resultFactorial);

console.log("11. function that counts the number of occurrences of a specific element in an array");
function countOccurrences(array, searchElement){
    var count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === searchElement){
            count ++;
        }
    }
    return count;
}
const resultCountOccurrences = countOccurrences([1,2,3,4,5] , 1);
console.log(resultCountOccurrences);

console.log("12. function that checks if a given year is leap year.");
function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0);
}
const checkIsLeapYear = isLeapYear(2023);
console.log(checkIsLeapYear);

console.log("13. function that merges two arrays and returns the result");
function mergeAndSort(array1, array2){
    var array3 = array1.concat(array2);
    return array3.sort((a,b) => a-b);
}
const resultMergeAndSort = mergeAndSort([1,2,3,4,5], [6,7,8,9,10]);
console.log(resultMergeAndSort);

//not done
console.log("14. function that converts a number to its Roman numeral representation.");
function numberToRoman(number){
    const romanNumerals = {1000:'M', 900:'CM', 500:'D', 400:'CD', 100:'C', 90:'XC', 50:'L', 40:'XL', 10:'X', 9:'IX',
                           5:'V', 4:'IV', 1:'I'};
    let result = '';
    for(let i = 0; i < romanNumerals.length; i++){
        while(number >= i){
            result = result + romanNumerals[i];
            number = number - i;
        }
    }
    return result;
}
const resultNumberToRoman = numberToRoman(10);
console.log(resultNumberToRoman);

function intToRoman(num) {
    const romanNumerals = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };
  
    let result = '';
    for (let value in romanNumerals) {
      while (num >= value) {
        result += romanNumerals[value];
        num -= value;
      }
    }
    return result;
  }
  const resultToRoman = intToRoman(5);
console.log(resultToRoman);
  


console.log("15. finds the second smallest number in an array of numbers.");
function findSecondSmallest(array){
   const sortedArray = array.sort((a,b) => a-b);
   return sortedArray[1]; 
}
const resultFindSecondSmallest = findSecondSmallest([1,2,3,4,5]);
console.log(resultFindSecondSmallest);

console.log("16. calculate the area of a circle given its radius.");
function calculateCircleArea(radius){
    return Math.PI * radius * radius;
}
const resultCalculateCircleArea = calculateCircleArea(5);
console.log(resultCalculateCircleArea);

console.log("17. function that truncates a string if it exceeds a specified length and appends to the end.");
function truncateString(string, number){
    if(string.length > number){
        return string.slice(0, number) + "...";
    }
    return string;
}
const resultTruncateString = truncateString("hello world", 5);
console.log(resultTruncateString);

console.log("18. function that checks if a given string contains only digits.");
function checkDigits(string){
    for(let i = 0; i < string.length; i++){
        if(!Number.isInteger(parseInt(string[i]))){
            return false;
        }
    }
    return true;
}
const resultCheckDigits = checkDigits("12345");
console.log(resultCheckDigits);

console.log("19. function that removes all falsy values from an array.");
function removeFalsyValues(array){
    return array.filter(Boolean);
}
const resultRemoveFalsyValues = removeFalsyValues([false, null, 0, "", undefined, NaN, 1,2,3,4,5,6,7,8,9,10]);
console.log(resultRemoveFalsyValues);

console.log("20. function that generates a new array with unique values from a given array.");
function uniqueValues(array){
    return [...new Set(array)];
}
const resultUniqueValues = uniqueValues([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]);
console.log(resultUniqueValues);