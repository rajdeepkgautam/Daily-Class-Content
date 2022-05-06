console.log("Running");

//Objects
//Objects are collection of properties and methods.
//Objects have keys which are converted into string type, The properties and methods
//do not follow insetion order.

//Create an object---

let mobile = {
    Brand : "Asus",
    Model : "Zenfone Max Pro 1",
    weight : 210,
    isWorking : true,
    11 : "Android Version",
    displayInfo : function(){
        console.log(`The brand of my mobile is ${mobile.Brand} and the Weight is ${mobile.weight} which is in the working conndition ${mobile.isWorking}, also with Android Version of ${mobile["11"]}`)
    },
    displayInfo1 : function(){
        console.log(`The brand of my mobile is ${mobile.Brand}`)
    }


}

console.log(mobile);


delete mobile.isWorking;


console.log(mobile);


mobile.Camera = "16Px";

console.log(mobile);
//console.log(mobile.displayInfo);
mobile.displayInfo();

//------------------------------------------------------------------------------------------

let mobile1 = {};//empty object currently
//We will start assigning properties to the objects using objectName.propert

mobile1.brand = "Mi";
mobile1.weight = "190";
mobile1.isWorking = true;
mobile1["camera"] = "32px";

console.log(mobile1);

//-----------------------------------------------------------------------------------

function Mobile(brand,weight,camera){

    this.brand = brand;
    this.weight = weight;
    this.camera = camera;

}

let apple = new Mobile("Apple", 190, "13px");
let vivo  = new Mobile("Vivo", 180, "108px");

console.log(apple);
console.log(vivo);
console.log(apple.brand);

console.log(Object.keys(apple));
console.log(Object.values(apple));

for(const [key,value] of Object.entries(apple)){
    console.log(key, value);
}

//this kweyword ----
// In an Object this refers to the Object
// When we use this keyword alone,  then it points to Global Object
// In a function, this refers to parent Object.

value = "value";// Always give a keyword like let, const, var otherwise it will create Window Object.
console.log(value);

//-----------------------------------------------------------------

//Spread Operator

let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2));

let arr3 = [...arr1, ...arr2];
console.log(arr3);

//Create two students having properties as name, rollno, class, showDetails using Object Constructor.
