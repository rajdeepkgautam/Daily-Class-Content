console.log("Running");

//Map preserve the order of the insertion of key values pairs.
//Map also preserve the data type of key i.e., it does  ot converts the key to string by default like Object.

let map = new Map();

map.set("fName", "RAJDEEP");
map.set("lName", "GAUTAM");
map.set("gender", "M");
map.set("age", 22);
map.set(9899133105, "Phone");
map.set(true, "true");

console.log(map);
console.log(map.size);
console.log(map.get("fName"));
console.log(map.has("fName"));
console.log(map.has("Fname"));
console.log(map.delete(true));
console.log(map);
//map.clear();
//console.log(map);

for(let key of map.keys()){
    console.log(key);
}
for(let value of map.values()){
    console.log(value);
}
for(let entry of map.entries()){
    console.log(entry);
}

map.forEach(function(value,key){
    console.log(key,value);
})


//-----------------------------------------------------------------

//Set has no keys but onl UNIQUE values.
//Set can not give you key value pairs, but only value value pairs using .entries() method

let set = new Set();
set.add("Apple");
set.add("Banana");
set.add("Cherry");
set.add("Orange");
set.add("Orange");
set.add("Orange");
set.add("Orange");
set.add("Orange");
set.add("Mango");

console.log(set);
console.log(set.values());
console.log(set.has("Banana"));
console.log(set.has("Kiwi"));


for(let key of set.keys()){
    console.log(key);
}
for(let value of set.values()){
    console.log(value);
}
for(let entry of set.entries()){
    console.log(entry[0]);
}

set.forEach(function(value,key){
    console.log(key,value);
})

for(let entry of set.entries()){
    let key = entry
    console.log(key[0]);
}