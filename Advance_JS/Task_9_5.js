// let multiply = function(x,y){
//     console.log(x*y);
// }
// multiply(3,4);

// //create a copy of this function using currying 
// multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(4);

// multiplybyThree = multiply.bind(this, 3);
// multiplybyThree(5);

//create copy of the function using closure

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(8);

let multiplybyThree = multiply(3);
multiplybyThree(5);