// // Object Iteretor
// // const obj1 = {
// //     fname : "Raj",
// //     lname : "Patel",
// //     Age : 10
// // }

// // console.log(obj1);



// // // 2)
// // const obj2 = new Object();

// // obj2.fname = "Ajay";
// // obj2.lname = "Shah";
// // obj2.Age = 20;
// // console.log(obj2);

// ///////////////////////////////////////

// // What is Constructor in a JS :
// // A constructor is a special method of JavaScript that allows you to create objects with properties and methods.
// // There are divide in a Two types.
// // a) in-built Constructor
//     // ex : Object(),Array(),Date()......etc

// // b) User Defined Constructor

// //1)  using Function 
// function Person(fname,Age)
// {
//     this.Firstname = fname;
//     this.Age =Age;
//     // Method
//     this.All = ()=>{
//         return `Your Name is ${this.Firstname}.And Your Salary is a ${Age}.`
//     }
// }

// const p1 = new Person("Raj",20);
// const p2 = new Person(12,"Ajay");
// console.log(p1);
// console.log(p2);
// console.log(p1.All());

// //2)  using class 
// class Employee{
//     constructor(fname,salary)
//     {
//         this.Name = fname;
//         this.salary = salary;
//         // Method
//         this.All = ()=>{
//             return `Your Name is ${this.Name}.And Your Salary is a ${salary}.`
//         }
//     }
// }

// const emp1 = new Employee("Raj",100000);
// const emp2 = new Employee("Ajay",10000);

// // console.log(emp1);
// // console.log(emp2);

// // // Access Value
// // console.log(emp1.Name);



// // Modify Value
// emp1.Name = "Jay";
// // console.log(emp1);
// // console.log(emp2);
// // console.log(emp1.Name);

// // // delete Value

// // delete emp1.salary;

// // console.log(emp1);
// // console.log(emp2);



// // Not Accepted 
// // delete Employee.Name;
// // console.log(emp1);
// // console.log(emp2);
// // Employee.Gender = "Male";
// // ---------//

// console.log(emp1);
// console.log(emp2);

// console.log(emp1.All());

// --------------------------------------------------------------------
/*
Write a JavaScript Program to create a class named 'Person' with the properties:
- firstName (string)
- lastName (string)
- age (number)
- email (string)

The class should have following methods:
- A method called 'fullName' that returns full name as a string. Example: For first
name='John', last name='Doe', it should return 'John Doe'.

- Another method called 'isAdult' which checks if the person is an adult or not.
An adult is defined as someone who is older than 18 years old. It should return true
if the person is an adult and false otherwise.
Example: If age=19 then it should return true.

- One more method called 'introduce' that introduces the person in the format:
"Your name is ABC." where ABC is replaced by fullName().

*/