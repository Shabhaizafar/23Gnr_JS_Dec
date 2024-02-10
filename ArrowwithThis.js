// var obj = {
//     fname : "Raj",
//     lname : "Patel",
//     About : ()=>{
//         //this === window
//         console.log(this.fname,this.lname);//undiefined
//     }
// }


// var m1 = obj.About.bind(obj);
// m1(); // Raj Patel


// ////////
// Short Syntax : 

// var obj = {
//     fname : "Raj",
//     lname : "Patel",
//     About(){
//         console.log(this.fname,this.lname);
//     },
//     sayHello(){
//         console.log("Hello");
//     }
// }
// obj.About();
// obj.sayHello();