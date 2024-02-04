// var fname = "Zafar";
// class Person{
//     constructor(name){
//         this._fname = name;
//     }
//     // get Fullname(){
//     //     return this._fname;
//     // }
//     // set NewName(n1){
//     //     this._fname = n1;
//     // }
//     // BioData(){
//     //     console.log(this.fname);
//     // }
// }
// var p1 = new Person("Raj");
// p1.BioData();
// console.log(p1.Fullname);
// p1.NewName = "A";
// console.log(p1._fname);
/////////////////////////////////////////////////
// class Person{
//     constructor(){
//         console.log("This is a Person Constructor");
//         // this.fname = name;
//         // console.log("Your name is "+ this.fname);
//     }
//     // Biodata(){
//     //     console.log("Person Method");
//     // }
// }
// class User extends Person{
//     constructor(n1){
//         super(n1);//argument
//         console.log("All New");
//     }
//     // Biodata(){
//     //     console.log("User Method !!");
//     // }
// }

// var p1 = new Person("Raj");
// // p1.Biodata();

// var u1 = new User("Ajay");
// u1.Biodata();
/////////////////////////////////////////////////////////
// class Animal{
//     myData(){
//         console.log("I am Animal");
//     }
//     sleep(){
//         console.log("Zzz...");
//     }
// }

// class Dog extends Animal{
//     eat(){
//             console.log("Dog is eating a Biscuit");
//     }
// }
// class cat extends Animal{
//     eat(){
//             console.log("cat is eating a catfood");
//     }
// }
// class Lion extends Animal{
//     eat(){
//             console.log("Lion is eating");
//     }
// }
// class Horse extends Animal{
//     eat(){
//             console.log("Horse is eating");
//     }
//     sleep(){
//         console.log("XYZ");
//     }
// }
// var a1 = new Horse();
// a1.myData();
// a1.eat();

// a1.sleep();

// class Person{
//     constructor(name){
//         this.fname = name.slice(0,1).toUpperCase()+name.slice(1);
//     }
//     Biodata(){
//         return `My Name is ${this.fname}.`;
//     }
// }

// var p1 = new Person("raj");
// console.log(p1.Biodata());


// Type of Inheritance : 
/*  Single inheritance means that one child can inherit from only one parent.
* Multi-level inheritance means that an object can have multiple parents and each parent may also have its
own parent. This type of hierarchy is called multi-level or hierarchical inheritance.

*/

// /////////////////////////////////////////////////////////
//Example of Hybrid Inheritace : 
class Vehicle{
    constructor(name){
        this.MName = name;
    }
    run(){
        console.log("Running");
    }
}
class Honda extends Vehicle{
    constructor(n1){
        super(n1);
        console.log(`The datail of ${this.MName}.Honda`);
    } 
    Data(){
        console.log("This is a Honda.");
    }
}
class Ford extends Vehicle{
    constructor(n1){
        super(n1);
        console.log(`The datail of ${this.MName}.Ford`);
    } 
}
class Car extends (Honda,Ford){
    constructor(M1,M2){
    super(M1,M2);
    }
}

var C1 = new Car("A","Z");
// var H1= new Honda("Honda");
// H1.Data();
// H1.run();

// var F1 = new Ford("Ford");
// // F1.Data();
// F1.run();


//Prototype

/*

Certainly! Here's a practice question list related to inheritance in JavaScript using hierarchical inheritance:

1. **Base Class: Shape**
    - Create a class `Shape` with properties `name` and `color`.
    - Provide methods `setName(name)` and `setColor(color)` to set the values.
    - Include a method `describe()` that outputs "I am a shape".

2. **Subclass: Circle**
    - Create a subclass `Circle` that inherits from `Shape`.
    - Add an additional property `radius`.
    - Provide a method `setRadius(radius)` to set the radius.
    - Include a method `calculateArea()` that calculates and outputs the area of the circle.

3. **Subclass: Rectangle**
    - Create another subclass `Rectangle` that inherits from `Shape`.
    - Add additional properties `width` and `height`.
    - Provide methods `setWidth(width)` and `setHeight(height)` to set the dimensions.
    - Include a method `calculateArea()` that calculates and outputs the area of the rectangle.

4. **Subclass: Triangle**
    - Create a subclass `Triangle` that inherits from `Shape`.
    - Add additional properties `base` and `height`.
    - Provide methods `setBase(base)` and `setHeight(height)` to set the dimensions.
    - Include a method `calculateArea()` that calculates and outputs the area of the triangle.

5. **Main Program**
    - Create objects of types `Circle`, `Rectangle`, and `Triangle`.
    - Set their names, colors, and dimensions.
    - Call the `describe()` method for each shape.
    - Call the `calculateArea()` method for each shape.
    - Display the output in the following format:

        ```
        Circle: I am a shape. My area is 78.54 square units.
        Rectangle: I am a shape. My area is 30 square units.
        Triangle: I am a shape. My area is 15 square units.
        ```

Feel free to try solving this practice question, and if you have any questions or need clarification on any part, feel free to ask!

*/


/*
Certainly! Here's a practice question list focused on method overriding in JavaScript:

1. **Base Class: Shape**
    - Create a class `Shape` with a method `calculateArea()` that returns 0.
    - Include properties like `color` and `name`.

2. **Subclass: Circle**
    - Create a subclass `Circle` that inherits from `Shape`.
    - Add a property `radius`.
    - Override the `calculateArea()` method to calculate and return the area of the circle.

3. **Subclass: Square**
    - Create another subclass `Square` that inherits from `Shape`.
    - Add a property `sideLength`.
    - Override the `calculateArea()` method to calculate and return the area of the square.

4. **Subclass: Triangle**
    - Create a third subclass `Triangle` that inherits from `Shape`.
    - Add properties `base` and `height`.
    - Override the `calculateArea()` method to calculate and return the area of the triangle.

5. **Main Program**
    - Create instances of `Circle`, `Square`, and `Triangle`.
    - Set appropriate values for properties (e.g., radius, side length, base, height).
    - Call the `calculateArea()` method for each shape and display the result.
    - Display the properties of each shape along with their calculated areas.

Example Output:
```
Circle:
  Color: Red
  Radius: 5
  Area: 78.54

Square:
  Color: Blue
  Side Length: 4
  Area: 16

Triangle:
  Color: Green
  Base: 6
  Height: 8
  Area: 24
```

Feel free to attempt this practice question, and if you have any questions or need further guidance, don't hesitate to ask!
*/ 

/*
Certainly! Here's a practice question list related to inheritance in JavaScript, focusing on constructor overriding:

1. **Base Class: Vehicle**
    - Create a class `Vehicle` with properties `make` and `model`.
    - Include a constructor that takes `make` and `model` as parameters and initializes the properties.

2. **Subclass: Car**
    - Create a subclass `Car` that inherits from `Vehicle`.
    - Include additional properties like `year` and `color`.
    - Override the constructor to also take `year` and `color` parameters and call the base class constructor.
  
3. **Subclass: ElectricCar**
    - Create another subclass `ElectricCar` that inherits from `Car`.
    - Add a property `batteryCapacity`.
    - Override the constructor to include `batteryCapacity` as a parameter and call the base class constructor.

4. **Main Program**
    - Create an object of type `ElectricCar`.
    - Set its `make`, `model`, `year`, `color`, and `batteryCapacity`.
    - Display the details of the electric car using a method like `displayDetails()`.

Example Output:
```javascript
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2022, 'Blue', '75 kWh');

myElectricCar.displayDetails();
```

Output:
```
Make: Tesla
Model: Model 3
Year: 2022
Color: Blue
Battery Capacity: 75 kWh
```

Feel free to try solving this practice question, and if you have any questions or need clarification on any part, feel free to ask!
*/ 

/*
Certainly! Here's a practice question list related to inheritance in JavaScript, focusing on the use of getters and setters:

1. **Base Class: Person**
    - Create a class `Person` with properties `firstName` and `lastName`.
    - Use a getter to retrieve the full name (concatenation of first and last names).
    - Use a setter to set both the first and last names.

2. **Subclass: Employee**
    - Create a subclass `Employee` that inherits from `Person`.
    - Add properties `employeeId` and `position`.
    - Use getters to retrieve the full name and employee details (ID and position).
    - Use setters to set the employee details.

3. **Subclass: Student**
    - Create another subclass `Student` that inherits from `Person`.
    - Add properties `studentId` and `grade`.
    - Use getters to retrieve the full name and student details (ID and grade).
    - Use setters to set the student details.

4. **Subclass: Customer**
    - Create a subclass `Customer` that inherits from `Person`.
    - Add properties `customerId` and `loyaltyPoints`.
    - Use getters to retrieve the full name and customer details (ID and loyalty points).
    - Use setters to set the customer details.

5. **Main Program**
    - Create an object of type `Employee`, `Student`, and `Customer`.
    - Set and retrieve details for each type using the getters and setters.
    - Display the output in a readable format.

This practice question emphasizes the use of getters and setters in the context of inheritance. If you have any questions or need clarification on any part, feel free to ask!
*/ 