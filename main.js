let buttons = document.querySelectorAll("button");
console.log(buttons);
const equals = document.getElementById("equals");


let result = document.createElement("div");
const display = document.querySelector("#display")

console.log(buttons[0].classList);

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        display.appendChild(result);

        if (event.target.id === "equals") {
            console.log("equals!");
            result.innerText = eval(display.innerText);
            // dom manipulation means replacing this with the value i want;
            return

        }
        // else if (condition) { what i want done for that specific button

        // }
        else {
            result.innerText += event.target.textContent;
        }

    });
}


// eval can do the math that is in the display
// clear can be inner text = nothing
// put math.eval() will do the math for you .. can attach that to the equals button
// if event target is eval we do something and if event target is clear then we do something esle

// TODO
// Use these to do ** (for example)
// let numbers = document.querySelectorAll(".number");
// console.log(numbers);

//  math.eval(display.innerText)

// let operators = document.querySelectorAll(".operator");
// console.log(operators);

// for (let number of numbers) {
//     number.addEventListener("click", function (event) {
//         return event.target.textContent;
//         console.log(event.target.textContent)
//     })
// }


// for (let operator of operators) {
//     operator.addEventListener("click", function (event) {
//         return event.target.textContent;
//         console.log(event.target.textContent)
//     }
//     )
// }



// let num1 (i want this to be the returned value of the click event listenrs)

// num1 =

// click number-- > if not operator, then add secondNumber to value, if operator, perform function of operator 