//Question 3 : create a student class

class Student{

  static count = 0;

  constructor(name, age, phone, marks){

    this.name = name;

    this.age = age;

    this.phone = phone;

    this.marks = marks;

    Student.count++;

  }

  isEligible(){ //Question 4 : check if student is eligible or not

    if(this.marks>40)

      console.log("Student is eligible");

    else

      console.log("Student is not eligible"); 

  }

}



//create and intialize 5 students objects - question 5

let s1 = new Student('Sarvesh', 23, 12345, 81);

let s2 = new Student('Mayur', 24, 67890, 38);

let s3 = new Student('Pratik', 24, 67790, 48);

let s4 = new Student('Mayur', 24, 67690, 37);

let s5 = new Student('Mayur', 24, 60090, 68);



s1.isEligible();

s2.isEligible();

console.log(`Total students : ${Student.count}`); //total count of students question 6

