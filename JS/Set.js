/*
> Sets 
	- store data
	- own properties
	- no index-bases access//
	- no order
	- unique
	- it's iterable
*/
const Arr = [4,3,2,1,1,2,3,4];

console.log("My Array : ",Arr);
// console.log(Arr[0]);


const mySet =new Set(Arr);
console.log(mySet);

// console.log(mySet[0]);
// console.log(typeof mySet)

// for (const iterator of mySet) {
//     console.log(iterator);
// }

// console.log("Size of Set : ",mySet.size);
// // mySet.add(5);
// // mySet.add(1);
// // mySet.add(6);

// // mySet.delete(2);

// // mySet.clear();

// console.log(mySet.entries());
// // console.log(mySet);

// console.log(mySet.keys());

// console.log(mySet.values());


// console.log(mySet["4"]);


// var a1 = new Object(Arr);

// console.log(a1);

// mySet.forEach((a,i,z)=>{
    // console.log(`Value is ${z}`);
// });

// console.log(mySet.has(5,1));