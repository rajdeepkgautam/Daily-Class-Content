console.log("HELLO");

//function - In order to execute a particular task repetitively, we can write a bunch of lines of codes 
//that can be used again and again.
//It prevent us writing a piece of code many times


function multiply(num1,num2){ //func def line 8-10
    console.log("multiply func running");
    let a = num1*num2;
    console.log(a);
    // {function body}
}

multiply(6,3);//func calling


// Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required.
//This prevents us writing a piece of code mulitple times. 

//function definition from lines 6-8
//we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
function multiply(parameter1, parameter2){
    console.log("Inside multiply function");
    //the function body can have more than one line of code.
}

//function calling on line 11
//multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
//while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// Arrow Func---
    // Generally used const
    const Addition = (num1,num2) => {
        console.log("In Add Func");
        let a = 30+"c";
        console.log(a);
    }
    Addition();
let b,c;
// Function Expression---
    const Subtraction = function(num1,num2){
        console.log("In Sub Func")
        let a = num1 - num2;
        console.log(a);
    }
    Subtraction(3,4);

function sayHi(){
    console.log("Hi!!!");
    let a = 5;
    let b = 10;
    let c = a+b;
    console.log(c);

}
sayHi();

function add(num1,num2){
    let c = num1+num2;
    console.log(c);
}
add(15,5);

function mult(num1,num2){
    let c = num1*num2;
    return c;
}
console.log(mult(3,81));
let d  = mult(10,3);
console.log(d);


//-------------------------------------------------------------------------------

//Lexicl Enviroment and Scope Chain
//let i = 10;
function one(){

   // console.log(i);
    two();

    function two(){
        let i = 33;

        console.log(i);
 
    }

}
one();

//console.log(i);

//------------------------------------------------------------------------
//Block Scope and Shadowing
let f = 2;
const g = 2;
var h = 2;
console.log(f);//2
console.log(g);//2
console.log(h);//2
//let and const are block scoped but not var( globally scoped )
{
    let f = 3;
    const g = 3;
    var h = 3;
    console.log(f);//3
    console.log(g);//3
    console.log(h);//3
}

console.log(f);//2
console.log(g);//2
console.log(h);///3



