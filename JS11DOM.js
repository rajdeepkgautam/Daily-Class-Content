console.log("Running");

/*const element1 = document.getElementById("message");
console.log(element1.innerHTML);
console.log(element1.innerText);
console.log(element1);

const element2 = document.getElementsByClassName("impMessage");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);

console.log(element2);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

const element3 = document.getElementsByTagName("h1");
console.log(element3);

console.log(element3[0].innerHTML);
console.log(element3[0].innerText);

console.log(element3[1].innerHTML);
console.log(element3[1].innerText);

console.log(element3[2].innerHTML);
console.log(element3[2].innerText);*/


function changeText() {
    const changeText = document.getElementsByTagName("h1");
    changeText[2].innerText = "Hello World!"
    console.log(changeText[2].innerText);
}

function changeColor() {
    let changeColor = document.getElementsByClassName("impMessage");
    changeColor[0].style.color = "red";
    console.log(changeColor[1].innerText);
}


