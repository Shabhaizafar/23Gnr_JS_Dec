const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

// 1st method
// const obj2 = {
//     key3 : "value3"
// };


// 2nd method  
// const obj2 = {};
// obj2.key3 = "value3";
// obj2.key1 = "value1";


// 3rd method  
const obj2 =  Object.create(obj1);// single object
obj1.key1 = "Change";
console.log("Obj 1 : ",obj1);
console.log("Obj 2 : ",obj2);

console.log(obj2.key1);

// const obj2 =  Object.create(obj1);

// __proto__  === [[prototype]]

