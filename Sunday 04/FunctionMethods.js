// const obj1 = {
//     fname : "Raj",
//     lname : "Kumar",
//     sayHello(Age,Gender){
//         console.log(`Hello ${this.fname} ${this.lname}.${Age},${Gender}`);
//     }
// }
// const obj2 = {
//     fname : "Ajay",
//     lname : "Patel"
// }
// obj1.sayHello();
// obj1.sayHello.call(obj2, 30,"Male"); 
// obj1.sayHello.apply(obj2,[30,"Male"]);

// var ans = obj1.sayHello.bind(obj2, 30,"Male"); 
// ans();

// function Person(){
//     console.log("Hello All");
// }
// Person();
// Person.call();
// Person.apply();
// Person.bind();
// console.log(window===this);


/*

1. Write a function `calculate` that takes three arguments: `num1`, `num2`, and `operation`. Implement the function using `switch` statements to perform addition, subtraction, multiplication, and division based on the value of `operation`. Use `apply` to call the correct arithmetic function.

2. Create an object `person` with properties `firstName` and `lastName`. Write a function `greet` that logs a greeting message using the person's full name. Use `call` to invoke the `greet` function with `person` object as the context.

3. Define a function `sum` that calculates the sum of all its arguments. Use `apply` to pass an array of numbers to the `sum` function.

4. Write a function `printArgs` that logs all its arguments to the console. Use `call` to pass the context as `null` and an array of arguments to `printArgs`.

5. Create a function `addToCart` that adds an item to a shopping cart array. The function should take arguments `itemName` and `price`. Use `bind` to create a curried version of `addToCart` where `itemName` is pre-set to a specific value.

6. Write a function `logMessage` that logs a message with a customizable prefix. Use `bind` to create a new function `errorLog` with a preset prefix of "[ERROR]".

7. Implement a function `max` that finds the maximum number in an array of numbers. Use `apply` to pass the array to the `Math.max` function.

8. Create an object `calculator` with methods `add`, `subtract`, `multiply`, and `divide` which perform basic arithmetic operations. Use `call` to invoke these methods on `calculator` object.

9. Write a function `fullName` that takes two arguments `firstName` and `lastName` and returns the full name. Use `apply` to pass an object with `firstName` and `lastName` properties to `fullName` function.

10. Implement a function `calculateDiscountedPrice` that calculates the discounted price of an item based on the discount percentage. Use `bind` to create a new function `tenPercentDiscount` with the discount percentage preset to 10%.

*/ 