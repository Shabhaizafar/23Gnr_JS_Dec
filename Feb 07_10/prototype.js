function Hello(){
    console.log("Hello Everyone!!");
}

// 1) function 
// 2) function + object 

Hello.ABC = function (){
    console.log("New Method");
};


// Hello();

// console.log(Hello.ABC);

// const obj1 = {
//     fname : "Raj"
// }

// obj1.lname = "Patel";
// console.log(obj1);

//protype
// give a Extra space . thats called object    =   {}

console.log(Hello.prototype);
// console.log(Hello.hasOwnProperty);
// Hello.call();


