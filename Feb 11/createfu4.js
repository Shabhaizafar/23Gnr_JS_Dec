// constructor Function
function User(fname,lname,age,email,address){
    var user = Object.create(User.prototype);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
};
User.prototype = {
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
}
var user1 = User("Raj","Patel",20,"raj@gmail.com","Gandhinagar");
// var user2 = User("Ajay","Shah",23,"ajay@gmail.com","AMD");
// var user3 = User("vijay","Patel",24,"v@gmail.com","Goa");

// user1.about();

for (const key in user1) {
    if(user1.hasOwnProperty(key))
    {
        console.log(key);
    }
}