// new Keyword 

//1) create a Empty Object  == this (window object)
//2) add  a property to the object
//3) return this == {} "object"


function Person(fname,lname){
    this.fname = fname;
    this.lname = lname;
}


const obj1 = new Person("Raj","Patel");
console.log(obj1);