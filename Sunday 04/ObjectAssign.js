// const obj1 = {A : 1,B : 2};
// const obj2  ={B :3 , C : 4};
// console.log("Obj1 : ",obj1);
// console.log("Obj2 : ",obj2);

// const obj3 = Object.assign({},obj1,obj2);
// console.log("Object.assign: ",obj3);

// console.log("Obj1 : ",obj1);
// console.log("Obj2 : ",obj2);







const obj1 = {A : 0,B : {C : 0}};
const obj2 = {A : 0,B : {C : 0}};
const obj4 = {A : 0,B : {C : 0}};

// 
const obj3 = Object.assign({},obj2,obj4,obj1);


Object.assign()
obj1.A = 1;
obj2.A = 2;
obj3.B.C = 3;
console.log("Obj1 : ",obj1);
console.log("Obj2 : ",obj2);
console.log("Obj3 : ",obj3);
console.log("Obj4 : ",obj4);
