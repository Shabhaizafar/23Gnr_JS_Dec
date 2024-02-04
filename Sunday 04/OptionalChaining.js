const obj = {
    fname : "Raj",
    lname: "Patel",
    Age : 1,
    // Address :{
    //     City:"Bangalore",
    //     Country:"India"
    // }
}
console.log(obj);
// console.log(obj.Address.City);

// Optional Chaining :  (?.)
console.log(obj?.Address?.City);

console.log("Hello")