// > Maps
// 	- it's iterable
// 	- store data in ordered
// 	- store key value pair
// 	- unique

// const Arr = [10,1,30,21];
// console.log("My Array : ",Arr);

// const myObj = {
//     fname: "John",
//     lname : "Patel",
//     4 : "asdf"
// }
// console.log(typeof myObj[4]);
//create a Map
const myMap =new Map();
console.log("My Map : ",myMap);
// console.log(typeof myMap);

myMap.set("fname","Raj");// dis
myMap.set("fname","Kumar");//en
myMap.set(4,"Amit");
myMap.set("Age", "2");

// console.log("My Map : ", myMap.values(4));

// Array : []
// Set : {}
// Object : {key : value}
// Map : {key => value}

// for (const iterator of myMap) {
//     console.log(typeof iterator[0]);
// }


console.log(myMap.entries());
console.log(myMap.keys());

console.log(myMap.values());

// myMap.clear();
// console.log("After Clearing the map : ",myMap);
// myMap.delete(4);
// console.log("After Deleting 4 from map : ",myMap);
// console.log(myMap.size)


//keys only
// console.log(myMap.has("fname"));

// myMap.forEach(
//     (element,k,a)=>{
//         console.log(`Value is ${element},${k},${a}`);
//     }
// );

console.log(myMap.fname);

