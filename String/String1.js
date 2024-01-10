//What is a String  ?
//A string in programming refers to a sequence of characters. It can be thought of as an array of characters, where each character has its own position(index)
//               12345
// var firstName = "This is a Javascript Session.Javascript Means JS.";
//               01234
//length ? index
// 5         4       (length-1)
// console.log(firstName);
// console.log(firstName[0]);

// 1)  length
// console.log(firstName[firstName.length-1]);

// 2) replace
// console.log(firstName.replace("Javascript","Js"));

// 3) replaceAll
// console.log(firstName.replaceAll("Javascript","Js"));

// 4)  slice
// console.log("Slice : ");
                // 1) starting index 2)ending index
// console.log(firstName.slice(12,15));
// console.log(firstName.slice(10));

// 5) substring
// firstName.substring
// console.log("Substring : ");
                // index
// console.log(firstName.substring(15,12));
// console.log(firstName.substring(10));

//6) substr
// console.log("Substr : ");
    // starting index  2) length
// console.log(firstName.substr(12,15));
// console.log(firstName.substr(10));

// 7) split
// console.log(firstName.split('is')[0]);

// 8)firstName.toLowerCase
// console.log(firstName.toLowerCase());
// 9) toUpperCase
// console.log(firstName.toUpperCase());
// 10 )trim 
// console.log(firstName.trim());
// console.log(firstName.trimStart())
// console.log(firstName.trimEnd())

// console.log(firstName.charAt(10));
// console.log(firstName.charCodeAt(11))
// console.log(firstName.concat("Royal"));
// console.log(firstName.endsWith(''));
// console.log(firstName.includes('T'));
// console.log(firstName.includes('T',15));



