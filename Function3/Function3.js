
// function Science(){
//     return "\nYou are seclect Science.";
// }
// function Arts(){
//     console.log("\nYou are select Art.");
// }
// function Commerce(){
//     console.log("\nYou are Select Commerce");
// }

// // main function
// function Intro(name,fs){
    
//     console.log(`Hello ${name}.${fs}`);
// }

// //     string    function
// Intro("Zafar",Science());



// Higher Order Function 


// var Addition = function (v1,v2){
//         return v1+v2;
// }
// var Sunbtraction =  (v1,v2)=>{
//     return v1-v2;
// }
// var Firstname = "Raj";
// var n1 = 12;
// var n2 = 6;

// function Higher_Order(fname,num1,num2){
//     var your_choice = 2;
//     console.log(`Your Name is ${fname}.and Your Choice is ${your_choice}.`);
//         switch(your_choice){
//             case 1 : return Addition(num1,num2);

//             case 2: return Sunbtraction(num1,num2);
//         }
// }

// var ans = Higher_Order(Firstname,n1,n2);
// console.log(`The answer of the higher order function is ${ans}`);


// what is Higher Order Function : 
// A higher-order function is a function that takes functions as arguments and/or returns a function as its result. In other words, it’
// A high-order function in JavaScript is a function that takes one or more functions as arguments and/or returns another function as its result. In other words




// // Generator Function  : 
// function*Generator_fu3(){
//     yield 'I am a generator'
//     // yield* Generator_fu()

// }

// function*Generator_fu2(){
//     yield 4,
//     yield 5,
//     yield* Generator_fu3();

// }

// function* Generator_fu(){
//     yield 1,
//     yield 2,
//     yield 3,
//     yield* Generator_fu2(),
//     yield 6,
//     yield 7
// }
// var output = Generator_fu();
// for (const i of output) {
//     console.log(i);
// }

// console.log(typeof output);


////////////////////////////////////

//Recursive Function 

// Factorial 
// var n1 = 5;//120
// var  i = 1;
// var ans = 1;
// var Fact = ()=>{
//     if(i<n1){
//           ans = ans*(i+1);
//           i++;
//           Fact();
//     }
//     return ans;
// }

// var output = Fact();
// console.log("Factorial is "+output);



// [1,2,3,4,678,9,6543,3,456,1],9

var arr = [1,2,3,4,678,9,6543,3,456,1];

console.log(Math.floor((0+arr.length-1)/2));