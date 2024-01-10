// what is Object in a JS :
// An object is an instance of the class "Object" which is part of JavaScript's standard library. 
// It is an unordered collection of properties, each property being a key-value pair. 
 
// 1) Using Object Literal
// 'use strict';
// const Myobj = {sdf}

// console.log(typeof Myobj)

// const myobj = {
// //   key  +  value       =    property
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// }
// console.log(myobj);


// 2)  Using Object (with new Keyword)

// const myobj2 = new Object({fname:"Raj",lname : "Shah"});
// console.log(myobj2);
// console.log(typeof myobj2);

//  3) Using Constructor 


/////////////////////////////////////
// const myobj3 = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12,
//     "First Name" : "Jay"
// }
// console.log("Your Object is : ",myobj3);

// Access Property  
// 1) Dot Notation  (.)
// 2) Bracket Notation ([]) / Array Bracket

// console.log("Your First Name is : ",myobj3.fname);
// console.log("Your Last Name is : ",myobj3["lname"]);

// console.log(myobj3."First Name")
// console.log(myobj3["First Name"]);


// Modify/Add Property
// 1) Dot Notation  (.)
// 2) Bracket Notation ([]) / Array Bracket

// myobj3.Gender  = "Male";
// console.log("Your Object is : ",myobj3);
// myobj3["Hobby"] = "Cricket";
// console.log("Your Object is : ",myobj3);

// Delete Property 
 
// 1) Dot Notation  (.)
// 2) Bracket Notation ([]) / Array Bracket

// delete myobj3.Age;
// console.log("Your Object is : ",myobj3);
// delete myobj3["lname"];
// console.log("Your Object is : ",myobj3);

////////////////////////
const myobj3 = {
    fname : "Raj",
    lname : "Shah",
    Age : 12,
}
// console.log("Your Object is : ",myobj3);


// 1) Basic For Loop   (X)
// 2) foreach Loop     (X)
// 4) for-of Loop      (X)

// 3)  For in Loop (✔)
// for (const key in myobj3) {
//     // console.log(key,myobj3.key);
//     console.log(key,myobj3[key]);
// }

//////////////////////////////////
// Computed Property 

var key1 = "fname";
var key2 = "lname";
var value1 = "Raj";
var value2 = "Shah";


// var myobj = {
//     [key1] : value1,
//     key2 : value2
// }
// console.log(myobj);

const myobj5 = new Object();

myobj5[key1] = value1;

console.log(myobj5);