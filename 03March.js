let gender = "M"
switch(gender) {
    case "M" :
        console.log("Male")
        break;
    case "F":
        console.log("FeMale")
        break;
    default:
        console.log("Transgender")
        break;



}

let age = 23;
switch(true) {
    case age<18:
        console.log("Minor")
        break;
    case age>=18&&age<40:
        console.log("Adult")
        break;
    default:
        console.log("Old Age")
        break;
}

let day = 9;
switch(day) {
    case 0 :
        console.log('Sunday')
        break;
    case 1 :
        console.log('Monday')
        break;
    case 2 :
        console.log('Tuesday')
        break;
    case 3 :
        console.log('Wednesday')
        break;
    case 4 :
        console.log('Thursday')
        break;
    case 5 :
        console.log('Friday')
        break;
    case 6 :
        console.log('Saturday')
        break;
    default:
        console.log("Enter Valid Day Number")
        break;
}
for(let i = 1; i<=10; i++) {
    console.log("19*"+i+"="+ 19*i)
}
