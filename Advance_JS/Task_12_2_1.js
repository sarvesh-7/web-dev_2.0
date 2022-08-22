// "use strict"
// //normal function expression

// // var square = function(a){
// //     return a*a;
// // }

// //same function using es6 fat arrow function syntax
// // let square = (a) =>  a*a;
// let square = (a) => {return a*a}; 
// console.log(square(5));

// //function without any arguments

// let a = 7;
// let square1 = _ =>{ return a*a};
// console.log(square1());

// //pass multiple arguments

// let mult = (a,b) => { return a*b};
// console.log(mult(4,5));

// //where we can use arrow functions

// let x = function(){
//     this.val = 1;
//     let that = this;
//     setTimeout(function(){ //this function will not recognize 'this' of outer function
//         that.val++;
//         console.log(that.val);
//     }, 1);
// }
// let xx = new x();

// //Arrow function does not have its own 'this' instead it refers to its parent 'this'

// let y = function(){
//     this.val = 5;
//     setTimeout(()=> //this function will not recognize 'this' of outer function
//     {
//         this.val++;
//         console.log(this.val);
//     }
//         , 1);
// }
// let yy = new y();

let f1 = function(){
    console.log(arguments[0]);
}
f1(1,2,3);

//same will not work with arrow function. TO make it work we need to write the function like below

let f2 = (...n) =>{
    console.log(n[0]);
}
f2(4,5,6);