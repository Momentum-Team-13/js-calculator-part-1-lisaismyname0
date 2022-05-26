let clicks = document.querySelectorAll(".click");
console.log(clicks);

// gives & logs all elements with class of click

console.log(clicks[0].classList);

for (let click of clicks) {
    click.addEventListener("click", function (event) {
        console.log(event.target.textContent);
    });
}

// logs actions of event listener actions (specifically line 10) whole thing is a loop that applies event listener

function add(a, b) {
    console.log(math.format(a + b))
}

function subtract(a, b) {
    console.log(math.format(a - b))
}

function multiply(a, b) {
    console.log(math.format(a * b))
}

function divide(a, b) {
    console.log(math.format(a / b))
}
