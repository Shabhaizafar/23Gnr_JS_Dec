// what is  Callback Function :
// A callback function in JavaScript is a function that passes an argument to another function, which is called at some point later. The purpose of the callback


// 
// function Add(n1,n2){
//     return n1+n2;
// }
// function Sub(n1,n2){
//     return n1-n2;
// }
// function Mul(n1,n2){
//     return n1*n2;
// }
// var result = Add(5,3);
// console.log("The sum of 5 and 3 is: "+result);
// var result2 = Sub(5,3);
// console.log("The subtraction of 5 from 3 gives: "+result2);



//name ,field ,Course

function Science(){
    return "\nYou are seclect Science.";
}
function Arts(){
    console.log("\nYou are select Art.");
}
function Commerce(){
    console.log("\nYou are Select Commerce");
}


function Intro(name,fs){
    
    console.log(`Hello ${name}.${fs}`);
}

Intro("Raj",Science());

//banana

//IIFE 

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.




//  Generator  

//  

function Add(n1,n2){
    return n1+ n2; 
}

function All(num1,num2,op){
    op(num1,num2);
}