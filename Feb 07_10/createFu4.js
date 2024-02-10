//create a Multiple object using Function
const AllMethods = {
    about : function (){
        console.log( `My Name is ${this.fname} ${this.lname}.I am ${this.age} years old.`);
    },
    is18 : function(){
        console.log(this.age>=18);
    },
    Hello1(){
        console.log("Hello 1");
    },
    Hello2(){
        console.log("Hello 2");
    }
};

function User(fname,lname,age,email,address){
    // 
    var user = Object.create(AllMethods);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
};
var user1 = User("Raj","Patel",20,"raj@gmail.com","Gandhinagar");
var user2 = User("Ajay","Shah",23,"ajay@gmail.com","AMD");
var user3 = User("vijay","Patel",24,"v@gmail.com","Goa");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// user1.about();
// user2.about();
// user3.Hello1();

console.log(user1.__proto__);

// __proto__ === [[prototype]]