let student = {

    age : 20

}



function printAge(){

    console.log(this.age);

}



let displayAge = printAge.bind(student);

displayAge();