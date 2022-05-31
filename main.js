let buttons = document.querySelectorAll("button");
const equals = document.getElementById("equals");
const multiplier = document.getElementById("multiply");
const eraser = document.getElementById("clear")
const clickdot = document.getElementById("dot")

let result = document.createElement("div");
const display = document.querySelector("#display")


console.log(buttons[0].classList);

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        display.appendChild(result);
        
        if (event.target.id === "clickdot" && display.innerText.length === 0){
            result.innerText = 0.;
        }

        if (display.innerText.length >= 10){
            display.style.fontSize = "medium";
        } 
        
        if (display.innerText.length >= 20){
            display.style.fontSize = "small"
        }

        if (event.target.id === "equals") {
            display.appendChild(result);
            result.innerText = math.eval(display.innerText);
        }
        
        else if (event.target.id === "clear") {
            result.innerText = "   ";
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

document.addEventListener('keydown', (event) => {
    if (event.key == 0) {display.append("0")};
    if (event.key == 1) {display.append("1")};
    if (event.key == 2) {display.append("2")};
    if (event.key == 3) {display.append("3")};
    if (event.key == 4) {display.append("4")};
    if (event.key == 5) {display.append("5")};
    if (event.key == 6) {display.append("6")};
    if (event.key == 7) {display.append("7")};
    if (event.key == 8) {display.append("8")};
    if (event.key == 9) {display.append("9")};
    if (event.key == "+") {display.append("+")};
    if (event.key == "-") {display.append("-")};
    if (event.key == "/") {display.append("/")};
    if (event.key == "*") {display.append("*")};
    if (display.innerText.length >= 10){
        display.style.fontSize = "medium";
    } 
    if (display.innerText.length >= 20){
        display.style.fontSize = "small"
    }
});


//I tried to play with getting the delete button to remove the last item from the string in the display:

// if (event.key == "Backspace" || event.key == "Delete") {
//     display.innerText.string.splice(0, -1);
//     console.log("deleted!")}

// the key press event listener is another concept I believe could use the switch method
// document.addEventListener('keydown', (event) => {
//     const keyPr = event.key;
//     switch (keyPr){
//     case event.key = 0:
//         display.append("0");
//         break;
//     case event.key = 1:
//         display.append("1");
// }
// });

// TODO


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
