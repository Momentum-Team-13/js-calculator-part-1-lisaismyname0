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

// button assignments

// let erase = document.getElementById("erase").addEventListener("click", function () { console.log("clear") })

// let click7 = document.getElementById("7").addEventListener("click", function () { console.log("7 was pressed") })

// let click8 = document.getElementById("8").addEventListener("click", function () { console.log("8 was pressed") })

// let click9 = document.getElementById("9").addEventListener("click", function () { console.log("9 was pressed") })

// let divider = document.getElementById("divider").addEventListener("click", function () { console.log("/ was pressed") })

// let click4 = document.getElementById("4").addEventListener("click", function () { console.log("4 was pressed") })

// let click5 = document.getElementById("5").addEventListener("click", function () { console.log("5 was pressed") })


// let click6 = document.getElementById("6").addEventListener("click", function () { console.log("6 was pressed") })


// let multiplier = document.getElementById("multiplier").addEventListener("click", function () { console.log("* was pressed") })


// let click1 = document.getElementById("1").addEventListener("click", function () { console.log("1 was pressed") })


// let click2 = document.getElementById("2").addEventListener("click", function () { console.log("2 was pressed") })


// let click3 = document.getElementById("3").addEventListener("click", function () { console.log("3 was pressed") })


// let subtracter = document.getElementById("minus").addEventListener("click", function () { console.log("- was pressed") })


// let click0 = document.getElementById("0").addEventListener("click", function () { console.log("0 was pressed") })


// let clickdot = document.getElementById("dot").addEventListener("click", function () { console.log("9 was pressed") })


// let equals = document.getElementById("equal").addEventListener("click", function () { console.log("= was pressed") })


// let adder = document.getElementById("plus").addEventListener("click", function () { console.log("+ was pressed") }) 