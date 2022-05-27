let buttons = document.querySelectorAll("button");
const equals = document.getElementById("equals");
const multiplier = document.getElementById("multiply");
const eraser = document.getElementById("clear")

let result = document.createElement("div");
const display = document.querySelector("#display")


console.log(buttons[0].classList);

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        display.appendChild(result);

        if (event.target.id === "equals") {
            console.log("equals!");
            display.appendChild(result);
            result.innerText = math.eval(display.innerText);
            // dom manipulation means replacing this with the value i want;
            // return is optional?

        }

        else if (event.target.id === "clear") {
            result.innerText = "  ";
        }

        else if (event.target.id === "multiplier") {
            result.innerText = eval(display.innerText)
            display.appendChild(result);
        }

        else {
            result.innerText += event.target.textContent;
        }

    });
}

// TODO

// make "." read as "0." maybe by:
// if "." is the first item in the Array, push [0.] in front
// if (display.innerText[0] ="."){
//     display.shift(0.)
// }


// if I want to use further classifications, here are the variables for my operator & number buttons... i began to attempt this with my multiply and divider ids:

// let operators = document.querySelectorAll(".operator");

// for (let operator of operators) {
//     operator.addEventListener("click", function (event) {
//         if (event.target.id === "multiply" && event.target.id === "divider") {
//             result.innerText += event.target.textContent;
//             console.log(result.innerText);
//         }
//     })
// }
// let numbers = document.querySelectorAll(".number");
// console.log(numbers);

// here I am attempting to make it so that if there are a certain amount of numbers within the div,, then the font shrinks

// if (result.length >= 6) {
//     console.log("many numbers")
//     display.style.fontsize = "x-small";
// }

