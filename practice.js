let clicks = document.querySelectorAll(".click");
console.log(clicks);

let newElement = document.createElement("p");
const display = document.querySelector("#display")


console.log(clicks[0].classList);

for (let click of clicks) {
    click.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        console.dir(event);
        newElement.innerText = `button clicked: ${event.target.textContent}`;

        newElement.innerText = event.target.textContent
        display.appendChild(newElement);
    });
}

// const calculator = document.getElementsByClassName("click")
// const keys = calculator.getElementsById("numero")

numero.addEventLister("click", event => {
    if (event.target.matches("button")) {

    }
})

const key = event.target
const action = key.button.action

if (!action) {
    console.log("number key!")
}


// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction)

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }

// let p1 = 5;
// let p2 = 7;

// document.getElementById("myBtn").addEventListener("click", function () {
//     myFunction(p1, p2);
// });

// function myFunction(a, b) {
//     document.getElementById("demo").innerHTML = a * b;
// }

// document.getElementByClass("+").addEventListener("click", function () {
//     myFunction(p1, p2)
// })

// const calculator = document.getElementsByClassName("click")
// const keys = calculator.getElementsById("numero")

// function addNum() {
//     if click1 

// }