console.log("Working");

//Arithmetic Operators
//+, -, /, *, %

//modulas - It gives us the remainder
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);

//comparision operators
//==/!= only check the values and not the data types but ===/!== checks both the values and the datatypes

//< , > , <=, >=, ==, ===
console.log(2<3);//true(boolean values as answer)
//console.log(2>3);//false
//console.log(2>=3);//false
//console.log(2<=3);//true

console.log(2!=3);//false
console.log(2!=2);//false
console.log(2!==2);//false
console.log(2==2);//true
console.log(2===2);//true
console.log(2=="2");//true
console.log(2==="2");//false
//Logical operators
//||, &&, !
console.log(2||3);//2
console.log(0||3);//3
console.log(0||0);//0

console.log(1 && 3);//3
console.log(0 && 3);//0
console.log(1 && 0);//0

console.log(!0)//true
console.log(!1)//false
console.log(!2)//false

//increment decrement operators

let a = 1;
a++;//a = a+1
console.log(a);//2
a--;//a = a-1
console.log(a);//1
//a = 1
console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);//2

console.log(a--);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);//0
let b = 2;
a*=3; // b=b*3
b/=3; // b = b/3;
b+=2;// b = b+2;
b-=4;//b = b-4;
