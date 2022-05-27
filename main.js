let buttons = document.querySelectorAll("button");
console.log(buttons);
const equals = document.getElementById("equals");


let newElement = document.createElement("p");
const display = document.querySelector("#display")


console.log(buttons[0].classList);

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        if (event.target.id === "equals") {
            console.log("equals!");
            return
        }
        newElement.innerText += event.target.textContent;
        display.appendChild(newElement);
    });
}



// TODO
// Use these to do ** (for example)
// let numbers = document.querySelectorAll(".number");
// console.log(numbers);

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