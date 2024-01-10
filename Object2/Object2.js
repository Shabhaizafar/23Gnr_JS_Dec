// type object   reffernce 

// var myobj = {
//     fname : "Raj",
//     lname : "Kumar",
//     Gender : "Male"
// }
// console.log("Main Obj : ",myobj);

// var myobj2 = myobj;
// console.log("Copy Obj : ",myobj2);

// myobj2.Age = 1;
// console.log("Main Obj : ",myobj);
// console.log("Copy Obj : ",myobj2);

// 1) Spread Operator [...]

// var myobj2 = {...myobj};
// console.log("Spread operator : ",myobj2);

// myobj2.Age = 1;
// console.log("Main Obj : ",myobj);
// console.log("Copy Obj : ",myobj2);


// var myobj2 = new Object({},myobj);
// console.log("Obj2 : ",myobj2);
// myobj2.Age = 1;
// console.log("Main Obj : ",myobj);
// console.log("Copy Obj : ",myobj2);

// proto [[prototype]]

///////////////////////////////////////////

// var myobj = {
//     fname : "Raj",
//     lname : "Kumar",
//     Gender : "Male"
// }
// console.log("Main Obj : ",myobj);

// var myobj2 =  Object.create(myobj);
// console.log(myobj2);
// console.log(myobj2.fname)
// myobj2.fname = "Ajay";
// console.log(myobj2.fname)
// // console.log(myobj2);
// console.log(myobj2.__proto__);
// // console.log(myobj2[[Prototype]]);
// // __proto__ and [[Prototype]] are same or not  : 
// console.log(myobj.__proto__);


// ////////////////////////////////

var BioData = {
    fname : "Raj",
    lname : "Kumar",
    Hobbies : {
        indoor : ["Chess"],
        outdoor : ["cricket","football"]
    }
}
// console.log(BioData);
// console.log(BioData.Hobbies);
// console.log(BioData.Hobbies.outdoor);
// console.log(BioData.Hobbies.outdoor[1]);


/////////////////////////////////////////////////
/*
Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
Expected Output:

[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]
*/ 