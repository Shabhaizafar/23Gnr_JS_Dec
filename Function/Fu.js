// What is Function in JS :
// 
//Function is a special type of variable that holds the code which can be executed whenever required. It allows us to package up a block of code.

// 1) In-Built Function 
        // ex : prompt,comfirm,alert..etc

// 2) User Defined Function 

// -with argument and with return type 
// -with argument and without return type 
// -without argument and with return type 
// -without argument and without return type 


// Function Declaration  


// -without argument and without return type 
function sayHello()
{
    console.log("Hello World");
}
// sayHello();//Function Call
//---------------------------------------

// -with argument and without return type 
function Addition(num1,num2)// perameter
{
    console.log(num1 + num2);   
}
var n1 =  10;
var n2 = 30;
// Addition(n1,n2);//argument
//------------------------------------

// -without argument and with return type 
var n3 = 14;
var n4 = 13;
function Sub()
{
    return n3-n4;
}

var ans = Sub()
// console.log(ans);//1
// console.log(Sub());//1
//--------------------------------------

// -with argument and with return type 

function Mul(n5,n6)
{
    return n5*n6;
}
var number1 = 12;
var number2= 8;
// console.log(Mul(number1,number2));

/////////////////////////////////////////////////////////////
// Function Expression 

// -without argument and without return type 
var sayHello =  function ()
{
    console.log("Hello World");
}
// sayHello();//Function Call
// console.log(sayHello());
//---------------------------------------

// -with argument and without return type 
var Addition = function (num1,num2)// perameter
{
    console.log(num1 + num2);   
}
var n1 =  10;
var n2 = 30;
// Addition(n1,n2);//argument
//------------------------------------

// -without argument and with return type 
var n3 = 14;
var n4 = 13;
var Sub = function ()
{
    return n3-n4;
}

// console.log(typeof Sub)
var ans = Sub()
// console.log(ans);
// console.log(Sub());
//--------------------------------------

// -with argument and with return type 

var Mul = function (n5,n6)
{
    return n5*n6;
}
var number1 = 12;
var number2= 8;
// console.log(Mul(number1,number2));

////////////////////////////////////////////////////
// Arrow Function 


var sayHello =  function ()
{
    console.log("Hello World");
}
// -without argument and without return type 
var sayHello = ()=> console.log("Hello World");
// sayHello();//Function Call
//---------------------------------------

// -with argument and without return type 
var Addition =  num1=> console.log(num1);   

var n1 =  10;
var n2 = 30;
Addition(n1);//argument
//------------------------------------

// -without argument and with return type 
var n3 = 14;
var n4 = 13;
var Sub =  ()=>
{
    return n3-n4;
}

// console.log(typeof Sub)
var ans = Sub()
// console.log(ans);
// console.log(Sub());
//--------------------------------------

// -with argument and with return type 

var Mul =  (n5,n6)=> {return n5;}

var number1 = 12;
var number2= 8;
// console.log(Mul(number1));



/*
// without R & A
1. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 


// with A & without return
2)Write a JavaScript function that generates all combinations of a string.  [Array] 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g 


// without A & with return
3)Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. 


// with A & R
4) Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'


// Function Expression
5)  Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. 


// Arrow Function  with Arg and With return
6) Write a JavaScript function to convert an amount into coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1 .

[25,10,5,2,1]
46 = 25,10,10,1

58 = 25,25,5,2,1
*/ 

/*
// with A & R
4) Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/ 

var str = 'Web Development Tutorial';

function longest(s1){
    var Arr = s1.split(' ');
    for (let i = 0; i < Arr.length; i++) {
        for (let j = 0; j < Arr.length; j++) {
        if (Arr[i].length>Arr[j].length) {
            temp  = Arr[i];
            Arr[i]=Arr[j];
            Arr[j]=temp;
        }  
        }
    }
    return Arr[0];
}
console.log("Longest word: " +longest(str)); // Output: Web
