// Inside : Global Scope/Window Object

this.studentname = 'Sarvesh';

console.log(this.studentname);



//this inside an object



// let student = {

//   name : 'Sarvesh',

//   Age : 23

// }

// console.log(student.Age);



//this inside a method

let student = {

  name : 'Sarvesh',

  Age : 23,

  displayName(){

    console.log(`hello ${this.name}`);

  }



}



student.displayName();



//this inside a function

function getStudent(){

  console.log(`Student name: ${this.studentname}`);

}

getStudent.call(this);



//this inside an inner function

function getStudent(){

  function innerfunc(){

    console.log(`Student name: ${this.studentname}`);

  }

  innerfunc.call(this); 

}

getStudent.call(this);



//this inside a constructor

// var createStudent = function(name, age){

// this.name = name;

// this.age = age;

// }

// let s1 = new createStudent('Sarvesh', 23);

// let s2 = new createStudent('Mayur', 24);



// createStudent.prototype.getDetails = function(){

//   console.log(`Name : ${this.name}, Age : ${this.age}`);

// }



// s1.getDetails();

// s2.getDetails();



// //this inside a class

// class Student {

//   constructor(name1, age){

//     this.name = name1;

//     this.age = age;

//   }

//   getDetails(){

//     console.log(`Name : ${this.name}, Age : ${this.age}`);

//   }

// }



//   let s1 = new Student('Sarvesh', 23);

//   let s2 = new Student('Mayur', 24);

  

//   s1.getDetails();

//   s2.getDetails();