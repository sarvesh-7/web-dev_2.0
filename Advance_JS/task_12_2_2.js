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
  function  eligibleForPlacement(marks){
    return (age)=>{
        if(marks>40 && (age>21 && age<26)){
            return true;
        }
        else{
            return false;
        }
    }
  }
  
  //create and intialize 5 students objects - question 5
  
  let s1 = new Student('Sarvesh', 23, 12345, 81);
  
  let s2 = new Student('Mayur', 26, 67890, 38);
  
  let s3 = new Student('Pratik', 21, 67790, 48);
  
  let s4 = new Student('Rahul', 44, 67690, 37);
  
  let s5 = new Student('Rupesh', 22, 60090, 68);
  
  console.log(eligibleForPlacement(s1.marks)(s1.age));
  console.log(eligibleForPlacement(s2.marks)(s2.age));
  console.log(eligibleForPlacement(s3.marks)(s3.age));
  console.log(eligibleForPlacement(s4.marks)(s4.age));
  console.log(eligibleForPlacement(s5.marks)(s5.age));

