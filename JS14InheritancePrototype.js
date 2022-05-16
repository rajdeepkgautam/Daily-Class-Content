console.log("Running");

let student1 = {
   Name : "RAJDEEP KUMAR GAUTAM",
   RollNo : 1803240112,
   College : "ABES ENGINEERING COLLEGE",
   Branch : "M.E.",
   /*displayInfo : function() {
           console.log(`The Name of The Student is ${this.Name} and the Roll Number is ${this.RollNo} of ${this.College} and his branch is ${this.Branch}`)
   }*/
}

//Student.displayInfo();

student2 = {
Name : "RAJDEEP KUMAR GAUTAM",
   
}

student2.__proto__ = student1;

console.log(student1);
console.log(student2);
console.log(student2.Branch);


let emp1 ={
    Name: "RAJU",
    Desg: "Manager",
    ID : 1001,
    displayInfo : function() {
        console.log(this.Name, this.Desg, this.ID);
    }
}
emp1.displayInfo();

let emp2 ={
    Name: "SHYAM",
    Desg: "VP",
    ID : 1002,
}

let emp3 ={
    Name: "BABURAO",
    Desg: "CEO",
    ID : 1003,
}

console.log(emp1, emp2, emp3);

let arr =[1,2,3,4,5,6];

//======================================================

//Call, Apply, Bind - Process of borrowing function.



emp1.displayInfo.call(emp2);
emp1.displayInfo.call(emp3);

emp1.displayInfo.apply(emp2);
emp1.displayInfo.apply(emp3);

let res1 = emp1.displayInfo.bind(emp2);
let res2 = emp1.displayInfo.bind(emp3);

res1();
res2();
