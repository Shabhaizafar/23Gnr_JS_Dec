//create a single object using Function
function User(){
    var user = {};
    user.fname = "Raj";
    user.lname = "Patel";
    user.age = 20;
    user.email = "raj@gmail.com";
    user.address = "Royal Technosoft P Ltd,Sargasan,Gandinagar,india.";
    user.about = function (){
        return `My Name is ${user.fname} ${user.lname}.I am ${user.age} years old.`;
    };
    user.is18 = function(){
        return user.age>=18;
    };
    return user;
};

// console.log(User());
var user1 = User();
console.log(user1.about());
console.log(user1.is18());
