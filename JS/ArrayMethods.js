// Array : 
// foreach,map,filter,reduce,find,every,some,fill,splice

//1) Foreach : 

// const Arr = [1,2,3,4,5,6,7,8,9];
// const ans = Arr.forEach((element,i)=> {
//     console.log(element,i);
// });
//////////////////////////////
//2) map :

// const Arr = [1,2,3,4,5,6,7,8,9];
// var ans = Arr.map((element,i,a)=>{return element+element,a});
// console.log(ans);
/////////////////////////////////////
// 3) filter :

// const Arr = [1,2,3,4,'z',5,6,7,8,9];

// var output =  Arr.filter(
//     (arr)=>{
//         if(arr>5)
//         {
//             return true;
//         }
//     }
// );
// var output =  Arr.filter((arr,i)=>{
//     if(arr>5)
//     {
//         return i;
//     }
// }
//     );
// console.log("Filtered array is: ",output);

///////////////////////////////////
//4) reduce
// const Arr = [1,2,3,4,5];

// var ans = Arr.reduce(
//     (currentvalue,nextvalue)=>{
//         console.log("Current Value : ",currentvalue,"Next Value :",nextvalue,"Sum :",currentvalue+nextvalue);
//         return currentvalue+nextvalue;
//     },100);
// console.log(ans);

// const Arr = [
//     {Product : 1,Productname:"Chair",Price:1000},
//     {Product : 2,Productname:"Table",Price:2000},
//     {Product : 3,Productname:"Bed",Price:3000},
// ];
// var Bill = Arr.reduce(
//     (currentvalue,nextvalue)=>{

    
//         console.log("current Price: ",currentvalue,"next Price: ",nextvalue.Price,"Total Bil :",currentvalue+nextvalue.Price);
//         return currentvalue+nextvalue.Price;
//     },0);
// console.log("Total Price of all Products is: ",Bill);

//////////////////////////////////////////////////
// 5) find 
// const Arr = [1,2,3,4,5,6,7,8,9];

// var check=3;
//  var ans = Arr.find(
//     (n1)=>{
//         return n1==check;
//     }
// );
// console.log(ans);
////////////////////////////////////
// 6) every
// const Arr = [1,2,3,4,5,6,7,8,9];

// const ans =  Arr.every(
//     (a)=>{
//         return a>=2;
//     }
// );
// console.log(ans);


/////////////////////////////////////
// 7) some
// const Arr = [1,2,3,4,5,6,7,8,9];

// const ans = Arr.some(
//     (a)=>{
//         return a>=10;
//     }
// );

// console.log(ans);

////////////////////////////////////
// 8) fill
// const Arr = [10,2,3,4,5,6,7,8,9];

// var Arr2 = Arr.fill(0,3);
// Arr.fill(1,0,4);
// console.log(Arr2);

//////////////////////////////////
// 9) splice
// const Arr = [1,2,3,4,5,6,7,8,9];

// var Arr2 = Arr.splice(3,2,100,1001,10101);
// console.log("Arr2 : ",Arr2);
// console.log(Arr);

