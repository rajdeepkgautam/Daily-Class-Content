console.log("Running");
//Method 1 Create & Assigning Value
let name = ['Rajdeep','Ribhu', 'Lakhwinder', 'Sidhant'];

// Method 2 Create Empty Array and Start assigning value accoring to index position
let name1 = ['Rudoff', 'Kusuma', 'Mary'];
let name2 = [];
name2[0] = 'Rudoff';
name2[1] = 'Kusuma';
name2[2] = 'Riya';
name2[5] = 'Riya2';

console.log(name, name1, name2);

// Method 3 Using Array Constructor
let name3 = new Array('Raju', 'Shyam', 'Baburao');
console.log(name3);

let My = ["RAJDEEP KUMAR GAUTAM", 'M', 22];
console.log(My);

//Array Method - 
//Push, Pop, Shift, Unshift, IndexOf, LastIndexOf, CONCAT

//Push - Add Value at Last Posn
My.push(9899133105, "Push");
console.log(My);

//Pop - Deleting Element from Last
//My.pop('Push');
My.pop();
console.log(My);

//Shift - Remove from first position
//UShift - Add on first position

My.shift();
console.log(My);
My.unshift("RAJDEEP KUMAR GAUTAM", 'aDD');
console.log(My);
console.log(My.length);

//---------------------------------------------------------------------

let num1 = [1,2,3,4,4]
let num2 = [5,6,7,8]


//INDEX OF
console.log(num1.indexOf(4));
console.log(num1.lastIndexOf(4));

//Join join with some character
let num4 = [];
num4 = num1.join(" & ")
console.log(num4);

//concate - do not changes the original array.
var num3= []
num3 = num1.concat(num2);
console.log(num3);
console.log(num1.concat(num2));

//Reverse
num1.reverse();
console.log(num1);

//Sort
let unsorted  = [55,7,9,3,1,1,1,3]
console.log(unsorted);
unsorted.sort();
console.log(unsorted);

//Reverse 
unsorted.reverse();
console.log(unsorted);

// Slice and Splice
//Splice - First Val Index and 2nd Val give the nos of value to be removed and 3rd Values are which are to be added instead of them.
let num5 = [3,5,6,1,2,4]
console.log(num5);
num5.splice(2,3);
console.log(num5);
num5.splice(2,0,1,2,3);
console.log(num5);

//Slice- starting index is inclusive and last is exclusive 
console.log(num5.slice(2,5));

















