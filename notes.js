let clicks = document.querySelectorAll(".click");
console.log(clicks);

let newElement = document.createElement("p");
const display = document.querySelector("#display")


console.log(clicks[0].classList);

for (let click of clicks) {
    click.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        console.dir(event);
        // ^ and one below both log all events within console logs
        // event.target is the element on the pagee that was clicked (that the event happened to for other elements)
        // console.log("event object: ", event)
        // this is where we get console to log which buttons have been clicked
        // let newElement = document.createElement("p")
        // newElement.innerText = `button clicked: ${event.target.textContent}`;
        // let newElement = document.createElement("p")
        // newElement.classList.add("display")
        newElement.innerText = event.target.textContent
        // here we added a new element
        // updated the innertext of that new element to be the contents of the clicked box
        display.appendChild(newElement);
        // append the new element containing the p tag to currently empty display
    });
}

// logs actions of event listener actions whole thing is a loop that applies event listener

// function add(a, b) {
//     console.log(math.format(a + b))
// }

// function subtract(a, b) {
//     console.log(math.format(a - b))
// }

// function multiply(a, b) {
//     console.log(math.format(a * b))
// }

// function divide(a, b) {
//     console.log(math.format(a / b))
// }
// event listener for numbers and event listener for operations

// equals stop the loop should also stop the loop

// const btn =
//     document.querySelector("button");

// function add(numA, numB)

// btn.addEventListener("click", () => { const addUp = `(a + b)` });

// button.addEventListener("click", myFunction);
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }

// can i make class = <name>

document.getElementById("7").addEventListener("click", function () { console.log("Hello World") });
// // this uses the id of 7 to add an event listener anytime a button with that class is clicked and tells it to perform my function of putting "Hello World" into the console

// let click7 = document.getElementById("7").addEventListener("click")

// if (click7) {
//     // if (plusclick) {
//     console.log("0+7")
// }

let click7 = document.getElementById("7").addEventListener("click")

if (click7) {
    console.log("0+7")
} else { console.log("Hello World") }

// let click7 = document.getElementById("7").addEventListener("click", function () { console.log("hello world") })

// let adder = document.getElementById("+").addEventListener("click", function () { console.log("addin up") })

// if (click7) {
//     console.log("Bonjour Monde")
// }
// } else if {
//     document.getElementById("+").addEventListener("click", function () { result + 0 }))
//     console.log("+ was clicked)
//     })

//     console.log("Nope") }

// const result = 7

// document.getElementById("7").addEventListener("click", function () { 7 + 0 });

// if (document.getElementById("+").addEventListener("click", function () { result + 0 }))
//         console.log("+ was clicked)
// })

// let plus = document.getElementById("+")

// plus.addEventListener("click", function () {
//     alert('You have pressed +')
// })

//     if (document.getElementById("+").addEventListener("click", myFunction)) 
//         console.log("+ was clicked)
// }

// const adder = prompt();

// const num1 = parseFloat()
// const num2 = parseFloat
const num1 = 1
const num2 = 2

let result;
if (adder == "+") {
    result = num1 + num2;
} else if (adder == "-") {
    result = num1 - num2;
} else if (adder == "*") {
    result = num1 * num2;
} else if (adder = "/") {
    result = num1 / num2;
}

// ${ } and template literals

// console.log(`document.getElementById(num1)) document.getElementById(num2) = document.getElementById(result)`)
// const calculator = document.getElementsByClassName("click")

// const keys = calculator.getElementsByClassName("")


