// function Opration(){
//     console.log(1+1);
//     console.log(2-1);
// }
// Opration();


// What is  Generator Function :
// A generator function is a special kind of function that produces a sequence of values over time, instead of computing them all at once and returning the final


//valid syntax : 
// function* All(){

// }
// function *All(){

// }
// function*All(){

// }

// function* All(){
//     yield "First Print",
//     yield "second Print"
// }

// var Output = All();// Object Assign

// // console.log(typeof Output);
// console.log(Output.next().value)//"First Print"
// console.log(Output.next().value)//"Second Print"
// console.log(Output.next().value)//undefined

// function* All(){
//     yield 1,
//     yield 2,
//     yield 3,
//     yield 4,
//     yield 5
// }
// .value
// var Output = All();// Object Assign

// console.log(typeof Output);

// for (const iterator of Output) {
//     console.log(Output.next());
// }

// Next () Method

// {value : iterator,Done : false/true }