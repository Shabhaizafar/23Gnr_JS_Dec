// ///////////////////////////////////////////////
// 1
// Write a JavaScript p to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// var str = "js string exercises";
// var mystr = "";
// for (let i = 0; i < str.split(' ').length; i++) {
//     mystr +=str.split(' ')[i].split('')[0].toUpperCase()+str.split(' ')[i].slice(1)+ " ";
// }
// console.log(mystr);

// ?/////////////////////////////////////////////////
// 2
// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"
// var str = "Aa- Bbc";
// var temp = '';
// for (let i = 0; i < str.length; i++) {
//     if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90)
//     {
//         temp+=str[i].toLowerCase();
//     }
//     else if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)
//     {
//         temp+=str[i].toUpperCase();
//     }
//     else{
//         temp+=str[i];
//     }
// }
// console.log(temp);
////////////////////////////////////
// 3
// Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."

// Zafar shabhai


///////////////////////////////////////
// 4
// Write a JavaScript program to determine if a given word is exceeding word or not.
// There is an increasing gap between two adjacent characters in exceeding words. In ASCII, the gap represents the distance between two characters.
// Test Data :
// 'acgl' -> true
// 'aebc' -> false

// 5
// Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."


// var str = "JavaScript Exercises";
// var temp = '';
// // for(let i = str.length-1;i>=0;i--)
// // {
// //     rev+=str[i];
// // }
// // console.log(rev);
// for (let i = 0; i < str.split(' ').length; i++) {
//     for (let j =str.split(' ')[i].length-1; j>=0; j--) {
//         temp+=str.split(' ')[i][j];
//     }
//     temp+=' ';
//     console.log(temp);
// }