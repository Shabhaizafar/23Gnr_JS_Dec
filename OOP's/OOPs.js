// what is OOP's  Concept in a Javascript : 
// Object Oriented Programming (OOP) is a programming paradigm that uses "objects
// to design and structure the program. In JavaScript, objects are created using
// functions or by literal syntax.

// Constructor (blueprint)(class)
// 1) using function
// 2) using class 

// function Person(fname){
//     this.fname = fname;
// }

// var obj1 = new Person("Raj");
// console.log(obj1);

// class Employee{
//     constructor(fname){
//         this.fname = fname;
//     }
// }
// var emp1 = new Employee('John');
// console.log(emp1);

////////////////////////////////////////////////////////////////
//what is  Inheritance in a JS : 
//Inheritance is one of the fundamental concepts of object-oriented programming. It allows us
//to create new objects based on existing ones, inheriting properties and methods from those objects.

// class Person{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//         this.Fullname = () =>{
//             return `Your Name is ${this.fname} ${this.lname}.`;
//         }
//     }
// }
// class Child extends Person{
//     constructor(fname,lname,age){
//         super(fname,lname);
//         this.Age = age;
//     }
// }

// var child1 = new Child("Raj","Patel",1);

// console.log(child1.Fullname());
// console.log(child1.Age);


// var obj1 = new Person("John","Due");
// console.log(obj1.Fullname());

/////////////////////////////////////////////////////
// type of Inheritance : 
// 1) Single Inheritance : 
//   Here we have only single parent class from which all child class is derived.

// Parent -- A 
//           |
//           |   
//           |
// Child --  B 

////////////////////////////////////////////////////
// 2) Multiple Inheritance : 
//   When a class is derived from more than one classes then it is known as multiple inheritance.

    //   Mother M            Father F
    //      |                   |
    //      |                   |
    //      ---------------------
    //                 |
    //              Child  B
class Mother{
        constructor(){
            this.mothername = "";
            this.Mummy = ()=>{
                return "My Mother's name is "+this.mothername;
            }
        }
    }

class Father{
    constructor(){
        this.fathername = "";
        // this.Pappa = ()=>{
        //     return "My father's name is "+this.fathername;
        // }
    }
}

class Boy extends (Mother,Father){
    constructor(fname,Age){
        super();
        this.fname = fname;
        this.age = Age;
    }
}

var b1 = new Boy("Ajay",100);
b1.mothername = "Geeta";
b1.fathername = "A";

console.log(b1.mothername);
// console.log(b1.Pappa());
// console.log(b1.Mummy());


////////////////////////////////////////////////////
// 3) Multilevel Inheritance
// 4) Hierarchical Inheritance
// 5) Hybrid Inheritance




/*

Single  : 

 practice Question list of inheritance in js using single inheritance:
 Write a JavaScript program to demonstrate the concept of Single Inheritance (also called as one level inheritance)
    Q1: Create a class for employee and assign name ,age and salary to the employee .
    Q2: Create a derived class which inherits all properties & methods from employee class and add
    department property to the derived class.
*/
/*
 Multiple : 

practice Question list of inheritance in js using Multiple inheritance:
1)Create a class Animal with the properties species and color. Provide methods to set and get
species and color, as well as a method called speak that outputs “I am an animal”.
2)Create a subclass Mammal which inherits from Animal and has additional property age. It
should provide methods to set and get age, as well as a method called eat that outputs “I
am eating”.
3)Create another subclass Dog which also inherits from Mammal but overrides the speak method
to output “Woof!” instead of “I am an animal” and provides a method bark that outputs “I am barking”.
4)Create a main program that creates an object of type Dog, sets its species and color,
age, and calls all the provided methods. The output should be something like this:
Dog’s color is black.
Dog’s age is 5.
Dog says Woof!
Dog is eating.
Dog is barking.

*/ 