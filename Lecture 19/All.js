// var obj1 = {
//     fname : "John",
//     lname : "Doe",
//     age: 25,
//     All : ()=>{
//         return `${this.fname},${this.lname},${this.age}`;
//     }
//     // All : ()=>{
//     //     return `${obj1.fname},${obj1.lname},${obj1.age}`;
//     // }
// }
// console.log(obj1);

// console.log(obj1.All());

// function All(fname,lname){
//     return `${this.fname},${this.lname}`;
// }

// console.log(All(obj1.fname,obj1.lname));

// function All(fname,lname){
//     this.Firstanme = fname;
//     this.Lastname = lname;
// }


// var ans =  new All(obj1.fname,obj1.lname);
// console.log("Name is "+ans.Firstanme +" "+ ans.Lastname);

// console.log(window);

/////////////////////////////////////////
// function Bio(f,l){
//     return `${f} ${l}`; //this(undefined)
// }

// class Person{
//     constructor(fname , lname , age) {
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//         this.Data = Bio(fname,lname);
//     }
// }
// class Person2{
//     constructor(fname , lname , age) {
//         this.firstname=fname;
//         this.lname=lname;
//         this.age=age;
//         this.Data = Bio(this.firstname,lname);
//     }
// }
// var obj1 = new Person("Raj","Patel",12);
// console.log(obj1);
// console.log(obj1.Data);

// var obj2 = new Person2("Ajay","Patel",120);
// console.log(obj2);
// console.log(obj2.Data);

//apply,bind,call

/////////////////////////////////////
function All(){
    console.log("This is a Function");
}
All();
All.call();
All.apply();
All.bind();

console.log(All.prototype);

var obj = {
    fname : "John Doe"
}
// console.log(obj.__proto__);

//1) proto vs Prototype 
//2) hoisting 
//3) Array Method 
//4) CALL,apply,bind,arg....
//5) object constructor with multiple Methods

//