// const obj1 = {
//     fname : "Raj",
//     lname : "Kumar",
//     sayHello : function(){
//         console.log(`Hello $${obj1.fname} ${obj1.lname}.`);
//     }
// }
// console.log(obj1);

const obj1 = {
    fname : "Raj",
    lname : "Kumar",
    sayHello(){
        console.log(`Hello ${this.fname} ${this.lname}.`);
    }
}

const obj2 = {
    fname : "Ahay",
    lname : "Kumar"
}
console.log(obj1);

obj1.sayHello();

obj1.sayHello(obj2);