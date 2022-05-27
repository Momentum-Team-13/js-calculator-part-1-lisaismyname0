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
            // return

        }
        else if (event.target.id === "clear") {
            result.innerText = "    ";
        }

        // else if (event.target.id === "multiplier") {
        //     result.innerText = eval(display.innerText)
        //     display.appendChild(result);
        // }

        else {
            result.innerText += event.target.textContent;
        }


    });
}

let operators = document.querySelectorAll(".operator");

for (let operator of operators) {
    operator.addEventListener("click", function (event) {
        if (event.target.id === "multiplier") {
            // result.innerText += event.target.textContent;
            console.log(result.innerText);
        }
    }
    )
}


// TODO
// Use these to do ** (for example)
// let numbers = document.querySelectorAll(".number");
// console.log(numbers);

//  math.eval(display.innerText)


// for (let number of numbers) {
//     number.addEventListener("click", function (event) {
//         return event.target.textContent;
//         console.log(event.target.textContent)
//     })
// }
