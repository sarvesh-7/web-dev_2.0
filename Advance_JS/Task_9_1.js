//usage of 'call' to call to the function
let obj = {

    number : 2

}



function add(a,b,c){

    return this.number+a+b+c;

}

let arr = [5, 4 , 3];

console.log(add.call(obj, 4, 3 , 7));

