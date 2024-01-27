// hoisting 


// console.log("Before Initialization :");
// All();
// function All(){
//     console.log("Hello");
// }
// console.log("After Initialization :");
// All();


// console.log(x);
// var x = 12;
// console.log(x);


// console.log(x);
// let x = 12;
// console.log(x);

// console.log(x);
// const x = 12;
// console.log(x);


// x=12;
// console.log(x);

// var x;
// console.log(x);
// x=12;
// console.log(x);
// const x;
// console.log(x);

// console.log("Before Initialization :");
// All();
// var All =  ()=>{
//     console.log("Hello");
// }
// console.log("After Initialization :");
// All();

/////////////////////////////////////////////////////////
//Array Destructuring 
// const Arr1 = [1,2,3,4,5];
// const Arr2 = [6,7,8,1];
// console.log(Arr1);
// console.log(Arr2);

// Spread Operator 

// const newArr = [...Arr1,...Arr2,100];
// console.log(newArr);

// abcdefghi
// var Arr3 = [..."12345678"];
// console.log(Arr3);

// const Arr = ["item1","item2","item3","item4","item5"];

// const v1 = Arr[0];
// const [x1,,v2,...remainingData] = Arr;
// console.log(v2);
// console.log(remainingData);

//////////////////////////////////
// Object Destructuring  
// const obj1 = {
//     fname:"John",
//     lname : "Doe"
// }
// const obj2 = {
//     fname:"Raj",
//     lname : "Patel",
//     Age : 12
// }
// console.log(obj1);
// console.log(obj2);

// // Spread Operator
// const NewObj = {...obj2,...obj1};
// console.log(NewObj);


// const obj1 = {
//     fname:"John",
//     lname : "Doe",
//     age:25,
//     country:"USA",
//     Gender : "male"
// }
// console.log(obj1);

// const {fname:firstname,age,...obj2} = obj1;

// console.log(age);
// console.log(firstname);
// console.log(obj2);