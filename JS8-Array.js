// Map, Filter, Reduce
//map,filter,reduce doesnt modifies the original array.
//ma,filter, reduce return new array

/*console.log("Running");
let numbers = [1,3,2,5,6,7];
numbers.map((item)=>{console.log(item)});

let res = numbers.filter((item)=>{
    return item%2==0;
})
console.log(res);

let res1 = numbers.reduce((acc,cur)=>acc = acc+cur,0);
console.log(res1);*/


//charAt
let str = "RAJDEEP KUMAR GAUTAM";
console.log(str.charAt(2));

//endsWith
console.log(str.endsWith("G"));

//include
let string = "Hello World"
console.log(string.includes("RKG"));

//indexOf
console.log(str.indexOf('G'));
console.log(str.indexOf('g'));
console.log(str.lastIndexOf('A'));

//lenght
console.log(str.length);

//replace - not going to manipulate original string
console.log(string.replace("Hello","Hi"));

//search
console.log(str.search("RAJDEEP"));

//substr = for substring always lower value will be starting index and larger will be ending.
console.log(str.substr(0,4));
console.log(str.substring(0,4));
console.log(str.substring(0,4));

//split
let email = "rajdeepkgautam@gmail.com";
console.log(email.split('@'));




