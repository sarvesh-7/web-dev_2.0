//usage of bind keyword
let obj = {

    number : 2

}



function multiply(a){

    return this.number*a;

}



let multiplyFunc = multiply.bind(obj);

console.log(multiplyFunc(4));

