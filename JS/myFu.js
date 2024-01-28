//lexical Scope : 

// const v1 = 12;  
// function All(){
//     const v1 = 12;
//     console.log("Value of V1 : ",v1);

//     const innerFunc = ()=>{
//         // const v1 = 100;
//         console.log("This is a inner Function",v1);
//     }
//     innerFunc();
// }
// All();
///////////////////////////////////
//Recurssion
// var count = 0;
// function Outer(){
//     console.log("Outer Function!!");
    
//     function Inner(){
//         console.log("Inner Function!!");
//         count++;
//         if(count==3)
//         { 
//             return 0;
//         }
//         Outer();
//     }
//     Inner();
// }
// Outer();

//////////////////////////////////////
//Default Perameter 
// function Add(n1,n2=0){
//     return n1+n2;
// }
// var ans = Add(1,5);

// console.log(ans);
/////////////////////////////////
//Rest Perameter 

// function Values(n1,n2,...n3){
//     console.log("Value of N1 : ",n1);
//     console.log("Value of N2 : ",n2);
//     console.log("Value of N3 : ",n3);
// }
// Values(1,2,3,5,6,7,8,9,0);


// function All(...n1){
//     console.log(n1);
// }
// All("asdfghjk");

// function Add(...numbers){
//     let sum = 0;
//     numbers.forEach(element => {
//         sum+=element;
//     });
//     return sum;
// }

// var ans  = Add(1,2,3,4,5);
// console.log(ans);
//////////////////////////