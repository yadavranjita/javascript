console.log("array");
const numberss = [1,2,3,4,5];
console.log(numberss);
console.log(numberss[0]);
console.log(numberss[2]);

console.log("object");
const person = { name: "John", age: 30, hobbies:["Reading", "Cooking", "Running"],};
console.log(person);
console.log(person.name);
console.log(person.hobbies);

const numbers = [3,1,5,2,4];
console.log(numbers);

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(-1, 0);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log("slice");
let number = [1,2,3,4,5];
let slicedNumbers = number.slice(1,4);
console.log(slicedNumbers);
console.log(number.slice(0, 4));

let numbe = ["a", "b", "c", "d", "e"];
console.log(numbe.slice(1, 4));
console.log(numbe.slice(1));
console.log(numbe.slice(1, 5));

let num = ["elephant", "lion", "tiger", "giraffe", "zebra"];
console.log(num.slice(2));

let numb = [1,2,3,4,5];
console.log(numb.slice(-1));
console.log(numb.slice(-3,-1));
console.log(numb.slice(-3,-2));
console.log(numb.slice(-3));

console.log("splice");
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1,0,'grape', 'kiwi');

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
console.log(colors.splice(2,2));
console.log(colors.splice(2,3));
console.log(colors.splice(0,1));

let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(colors.splice(2,2, 'X', 'Y','Z'));
console.log(colors.splice(2,3));
console.log(colors.splice(0,1));


const rectangle = { width: 10, height: 5, getArea: function(){ 
    return this.width * this.height;
}
};
console.log(rectangle.getArea());
console.log(rectangle.width);

const n = [10,20,30,40,50];

const foundNumber = n.find(num => num > 30);
console.log(foundNumber);

const squaredNumbers = n.map(num => num * num);
console.log(squaredNumbers);

