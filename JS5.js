console.log("Running");

//Loops - for, while , do while , for each, for-in

for(let i = 10; i < 20; i++){
    console.log(i);
}

let a = 10;
while(a>0){
    console.log(a);
    a--
}

//using for loop 
for (let i = 1; i <= 10;  i++){
     console.log(i * 2);
}

for(let i = 1; i<= 10; i++){
    console.log(i * 3);
}

 a = 1;
while(a > 10){
    console.log(a * 2)
    a++
}

let c = 2;
do {
    console.log(c);
    c = c + 2;
} while (c <= 20);

//for - in loop - used to fetch the indexes of the array
let name = "Ronak";
//if our values are n then our indexes are n-1
let tourists = ["Ronak", "Lakhi", "Ravi", "Sid"];

for (let a in tourists){
    console.log(a);
}

//for - of loop - used to fetch the values of the array

for(let values of tourists){
    console.log(values);
}

// forEach loop - it is very very important....

tourists.forEach((values,index)=>{ // the first parameter accepts the values of the array and the second parameter accepts the indexes of the array
    console.log(values,index);
})