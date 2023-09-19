class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello, my name is "+this.name+ " and I am "+this.age+" years old." );
        // console.log("Hello, my name is "+this.name+ "and I am "+this.age+"years old." );
    }
}
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name);
console.log(person1.age);

console.log(person2.name);
console.log(person2.age);

person1.greet();
person2.greet();
