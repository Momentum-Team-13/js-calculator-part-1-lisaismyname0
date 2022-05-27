let clicks = document.querySelectorAll(".click");
console.log(clicks);

let newElement = document.createElement("p");
const display = document.querySelector("#display")


console.log(clicks[0].classList);

for (let click of clicks) {
    click.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        // console.dir(event);
        newElement.innerText = `button clicked: ${event.target.textContent}`;
        newElement.innerText = event.target.textContent
        display.appendChild(newElement);
        return event.target.textContent;
    });
}

let numbers = document.querySelectorAll(".number");
console.log(numbers);

let operators = document.querySelectorAll(".operator");
console.log(operators);

for (let number of numbers) {
    number.addEventListener("click", function (event) {
        return event.target.textContent;
        console.log(event.target.textContent)
    })
}


for (let operator of operators) {
    operator.addEventListener("click", function (event) {
        return event.target.textContent;
        console.log(event.target.textContent)
    }
    )
}



// let num1 (i want this to be the returned value of the click event listenrs)

// num1 =

// click number-- > if not operator, then add secondNumber to value, if operator, perform function of operator 