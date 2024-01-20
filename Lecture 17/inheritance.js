// Multiple Inheritance :  
// Base Class :1
// class Father{
//     constructor(){
//         this.fathername = "";
//     }
// }
// // Base Class :2
// class Mother{
//     constructor(){
//         this.mothername = "";
//     }
// }
// // derived Class :

// class Child extends (Father,Mother){
//     constructor(fname,Age){
//         super();
//         this.Firstname = fname;
//         this.age = Age;
//         this.Parents = ()=>{
//             return `Your name is ${this.Firstname}.and Your age is ${this.age}.\nYour Father Name is ${this.fathername} and your Mother name is ${this.mothername}.`;
//         }
//     }
// }

// // Create a Object : 
// var child1 = new Child("Ajay",12);
// child1.fathername = "Raj";
// child1.mothername = "Geeta";

// console.log(child1.Parents());


///////////////////Get ans Set
class Father{
    constructor(){
        this.fathername= "Ajay";

        this.getName = (v1)=>{
            return v1;
        }
        // Set method 
        this.setname = (v1)=>{
            this.fathername = this.getName(v1);
        }
    }
}
var fatherobj = new Father();
fatherobj.getName("Raj");
console.log(fatherobj.fathername);
fatherobj.setname();
console.log(fatherobj.fathername)
///////////////////////////////////////////////////////////////////////////////
// Multilevel Inheritance : 
// A -> B -> C  

// class GrandFather{
//     constructor(gname){
//         this.GrandFatherName = gname;
//     }
// }
// class Father extends GrandFather{
//     constructor(fname,gname){
//         super(gname);
//         this.fathername = fname;
//     }
// }
// class Son extends Father{
//     constructor(sname,fname,gname){
//         super(fname,gname);
//         this.Sonname = sname;
//         this.BioData = ()=>{
//             return `My Name is ${this.Sonname}.My Father name is ${this.fathername}.My GrandFather Name is ${this.GrandFatherName}.`;
//         };
//     }
// }

// var S1 = new Son("Raj","Ajay Bhai","Jay Parmar.");
// console.log(S1.BioData());




/////////////////////////////////////////////////////////////////////////
/*

 Multilevel: 

practice Question list of inheritance in js using Multiple inheritance:
1)Create a class Animal with the properties species and color. Provide methods to add
species and color, as well as a method called speak that outputs “I am an animal”.
2)Create a subclass Mammal which inherits from Animal and has additional property age. It
should provide methods to add age, as well as a method called eat that outputs “I
am eating”.
3)Create another subclass Dog which also inherits from Mammal but overrides the speak method
to output “Woof!” instead of “I am an animal” and provides a method bark that outputs “I am barking”.
4)Create a main program that creates an object of type Dog, sets its species and color,
age, and calls all the provided methods. The output should be something like this:
Dog’s color is black.
Dog’s age is 5.
Dog says Woof!
Dog is eating.
Dog is barking.

*/ 
