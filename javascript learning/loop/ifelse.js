console.log("1. check if a number is positive or negative using if/else.");
let number = -5;
if(number < 0){
    console.log("The number is negative.");
}
else if(number > 0){
    console.log("The number is negative.");
}
else if(number = 0){
    console.log("The number is zero.");
}
else{
    console.log("This is not a number.");
}

console.log("2. check if a user is eligible to vote .");
let age =24;
if(age >= 18){
    console.log("You are eligible to vote.");
}
else if(age < 18){
    console.log("You are not eligible to vote.");
}
else{
    console.log("Invalid age.");
}

console.log("3. to determine the day of the week based on a given number.");
let day = 5;
if(day == 1){
    console.log("Today is Sunday.");
}
else if(day == 2){
    console.log("Today is Monday.");
}
else if(day == 3){
    console.log("Today is Tuesday.");
}
else if(day == 4){
    console.log("Today is Wednesday.");
}
else if(day == 5){
    console.log("Today is Thursday.");
}
else if(day == 6){
    console.log("Today is Friday.");
}
else if(day == 7){
    console.log("Today is Saturday.");
}
else {
    console.log("Invalid day.");
}

console.log("4. check if a string is longer than 10 characters or not.");
let string = "hello";
if(string.length >= 10){
    console.log("The string is longer than 10 characters.");
}
else if(string.length < 10){
    console.log("The string is not longer than 10 characters.");
}
else{
    console.log("Invalid string.");
}

console.log("5. determine the grade of a student based on their exam score.");
let score = 80;
if(score >= 90){
    console.log("Your grade is A.");
}
else if(score >= 80){
    console.log("Your grade is B.");
}
else if(score >= 70){
    console.log("Your grade is C.");
}
else if(score >= 60){
    console.log("Your grade is D.");
}
else if(score >= 50){
    console.log("Your grade is E.");
}
else if(score >= 40){
    console.log("Your grade is F.");
}
else {
    console.log("Invalid grade.");
}

//not done
console.log("6. code that takes a month number and returns the number of days in that month.");
let month = 2;
if(month == 1){
    console.log("January has 31 days.");
}
else if(month == 2){
    console.log("February has 28 days.");
}
else if(month == 3){
    console.log("March has 31 days.");
}
else if(month == 4){
    console.log("April has 30 days.");
}
else if(month == 5){
    console.log("May has 31 days.");
}
else if(month == 6){
    console.log("June has 30 days.");
}
else if(month == 7){
    console.log("July has 31 days.");
}
else if(month == 8){
    console.log("August has 30 days.");
}
else if(month == 9){
    console.log("September has 31 days.");
}
else if(month == 10){
    console.log("October has 30 days.");
}
else if(month == 11){
    console.log("November has 31 days.");
}
else if(month == 12){
    console.log("December has 30 days.");
}
else{
    console.log("Invalid month.");
}

console.log("7. check if a year is leap year or not.");
let year = 2023;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("This year is a leap year.");
}
else {
    console.log("This year is not a leap year.");
}