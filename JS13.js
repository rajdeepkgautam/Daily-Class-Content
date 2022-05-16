console.log("Running");

/*const element1 = document.createElement("div");
element1.className = "div1";
element1.innerHTML = "<b> This Div Element is in Bold </b>";
//console.log(element1);
document.querySelector("div#parent").appendChild(element1);

const elementImg = document.createElement("img");
elementImg.className = "Image1";
elementImg.setAttribute("src", "./IronMan1.jpg")
document.querySelector("div#parent").appendChild(elementImg);*/


a();
function a(){
    console.log("I am Fn A");
}

//function body is called function statement/definition;
// Fn statement support hoisting, i.e., calling the fn before declaring the function.

//b();
var b = function(){  //Anonymous fn.
    console.log("I am Fn B");
}
//since here this fn is anonymous, it won't support hoisting, function expression don't support hoisting.
console.log(b);
b();

// A fn expression is a unnamed fn assigned to the variable, the variable receive the fn defn,
//which in turn can call the fn by calling the variable, { a9(); }

{
    let d = function abc(){
        console.log("This is Fn abc");
        }
    d();
   // abc(d);    
}

//d(); will throw an error not defined error as not in the scope.
//the fn can only be called inside the scope and not outside the scope.

//------------------------------------------------------------------------------------------------

//FIRST CLASS FUNCTION - 
//Functions can be passed as values into another functions or can be returned from
//another functions a values. This unique feature of functions makes them call as first
//class functions and first cass citizens.


//Arrow Functions - (declared in ES6)
let f = () => {
    console.log("This is Arrow Function");
}
f();

//Higher Order Function (HOF) - The fn which accept FCF or return them are called as
// HOF.
let g = function(param){ //HOF
    //console.log("I am In Fn g");
    console.log(param);
    param(); // CallBack Fn
}

function h(){ //FCF
console.log("I am in Fn h");
}
g(h);//h is passed as an argument.


let  i = function(){//HOF
    return function j(){//FCF
        console.log("I am in Fn J");
    }
    }

    let returnVal = i();
    console.log(returnVal);
    //console.log(i());

setTimeout(() => {
    h();
    console.log("Hi I am inside the  callback fn");
}, 3000);




const sayHi = (nameOfFriend) => {
    console.log("Hello". nameOfFriend);
}

const greeting = (friend, callBAckfunction) => {
    callBAckfunction(friend); //sayHi(friend);
}

greeting("BabuRao", sayHi);
    