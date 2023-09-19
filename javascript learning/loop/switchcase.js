//not done
console.log("1. check if a number is positive or negative.");
let number = 5;
switch (number > 0){
    case 1:
        console.log("This number is positive.");
        break;
    case 2:
        console.log("This number is negative.");
        break;
    default:
        console.log("Invalid number.");
        break;
}

//not done
console.log("2. check if a user is eligible to vote.");
let age = 24;
switch (age >= 18){
    case 1:
        console.log("The user is eligible to vote.");
        break;
    case 2:
        console.log("The user is not eligible to vote.");
        break;
    default:
        console.log("Invalid age.");
        break;
}

console.log("3. determine the day of the week based on a given number.");
let day = 5;
switch (day){
    case 1:
        console.log("Today is Sunday.");
        break;
    case 2:
        console.log("Today is Monday.");
        break;
    case 3:
        console.log("Today is Tuesday.");
        break;
    case 4:
        console.log("Today is Wednesday.");
        break;
    case 5:
        console.log("Today is Thursday.");
        break;
    case 6:
        console.log("Today is Friday.");
        break;
    case 7:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Invalid day.");
        break;
}

//not done
console.log("4. check if a given string is longer than 10 characters or not.");
let string = "hello";
switch (string.length > 10){
    case 1:
        console.log("The string is longer than 10 characters.");
        break;
    case 2:
        console.log("The string is not longer than 10 characters.");
        break;
    default:
        console.log("Invalid string.");
        break;
}

//not done
console.log("5. determine the grade of a student based on their exam score.");
let score = 60;
switch (score >= 90){
    case 1:
        console.log("Your grade is A.");
        break;
    case 2:
        console.log("Your grade is B.");
        break;
    case 3:
        console.log("Your grade is C.");
        break;
    case 4:
        console.log("Your grade is D.");
        break;
    case 5:
        console.log("Your grade is E.");
        break;
    case 6:
        console.log("Your grade is F.");
        break;
    default:
        console.log("Invalid grade.");
        break;
}

console.log("6. code that takes a month number as input and returns the number of days in that month.");
let month = 5;
switch (month){
    case 1:
        console.log("January has 31 days.");
        break;
    case 2:
        console.log("February has 28 days.");
        break;
    case 3:
        console.log("March has 31 days.");
        break;
    case 4:
        console.log("April has 30 days.");
        break;
    case 5:
        console.log("May has 31 days.");
        break;
    case 6:
        console.log("June has 30 days.");
        break;
    case 7:
        console.log("July has 31 days.");
        break;
    case 8:
        console.log("August has 30 days.");
        break;
    case 9:
        console.log("September has 31 days.");
        break;
    case 10:
        console.log("October has 30 days.");
        break;
    case 11:
        console.log("November has 31 days.");
        break;
    case 12:
        console.log("December has 30 days.");
        break;
    default:
        console.log("Invalid month.");
        break;
}

//not done
console.log("7. check if a given year is a leap year or not.");
let year = 2023;
switch ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    case 1:
        console.log("This year is a leap year.");
        break;
    case 2:
        console.log("This year is not a leap year.");
        break;
    default:
        console.log("Invalid year.");
        break;
}