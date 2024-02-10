//create a Multiple object using Function

function User(fname,lname,age,email,address){
    var user = {};
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function (){
        console.log( `My Name is ${user.fname} ${user.lname}.I am ${user.age} years old.`);
    };
    user.is18 = function(){
        console.log(user.age>=18);
    };
    return user;
}
var user1 = User("Raj","Patel",20,"raj@gmail.com","Gandhinagar");
var user2 = User("Ajay","Shah",23,"ajay@gmail.com","AMD");
var user3 = User("vijay","Patel",24,"v@gmail.com","Goa");

console.log(user1);
console.log(user2);
console.log(user3);

user1.about();
user2.about();