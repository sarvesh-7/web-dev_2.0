//usage of 'apply' keyword
let obj = {

    number : 2

}



function add(a,b,c){

    return this.number+a+b+c;

}

let arr = [5, 4 , 3];

console.log(add.apply(obj, arr));