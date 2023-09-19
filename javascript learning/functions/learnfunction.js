console.log("1. Name function");
function add(a, b){
    return a+b;
}
const result = add(1,2);
console.log(result);

console.log("2. Anonymous function"); 
const square = function (x) {
    return x * x;
}
console.log(square(5)); 

console.log("3. Arrow function"); 
const multiply = (a, b) => a*b;
console.log(multiply(2,3));

console.log("4. Constructor function");
function Person(name, age){
    this.name = name;
    this.age = age;
} 
let John = new Person("John", 25);
console.log(John);

console.log("5. Callback function");
function hello(hi){
    console.log("Hello World");
    hi("Rahul");
}
function hi(name){
    console.log("Hello " + name);
}
hello(hi);



  