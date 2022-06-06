let buttons = document.querySelectorAll("button");
const equals = document.getElementById("equals");
const multiplier = document.getElementById("multiply");
const eraser = document.getElementById("clear")
const clickdot = document.getElementById("dot")

let result = document.createElement("div");
const display = document.querySelector("#display")


for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        display.appendChild(result);
        
        if (event.target.id === "clickdot" && display.innerText.length === 0) {
            result.innerText = 0.;
        }
        
        if (display.innerText.length >= 10) {
            display.style.fontSize = "medium";
        }
        
        if (display.innerText.length >= 20) {
            display.style.fontSize = "small"
        }
        
        if (event.target.id === "equals") {
            display.appendChild(result);
            result.innerText = math.eval(display.innerText);
            if (display.innerText.length >= 10){
                display.style.fontSize = "medium";
            }
        }
        
        else if (event.target.id === "clear") {
            result.innerText = "   ";
        }
        
        else if (event.target.id === "multiply") {
            result.innerText += "*"
        }
        
        else {
            result.innerText += event.target.textContent;
        }
        
    });
    
}

document.addEventListener('keydown', (event) => {
    display.appendChild(result);

    let string = display.innerText
    console.log(string)
    
    if (display.innerText.length >= 10) {
        display.style.fontSize = "medium";
    }
    if (display.innerText.length >= 20) {
        display.style.fontSize = "small"
    }
    
        if (event.key == "Backspace" || event.key == "Delete") {
                display.innerText += string.slice(0, -1);
                console.log("deleted!");
                console.log(string.slice)
            }
                // pressing delete now repeats the first number in the display
        if (event.key == 0) {result.innerText += "0"};
        if (event.key == 1) { result.innerText += "1"};
        if (event.key == 2) { result.innerText += "2" };
        if (event.key == 3) { result.innerText += "3" };
        if (event.key == 4) { result.innerText += "4" };
        if (event.key == 5) { result.innerText +="5" };
        if (event.key == 6) { result.innerText +="6" };
        if (event.key == 7) { result.innerText +="7" };
        if (event.key == 8) { result.innerText +="8" };
        if (event.key == 9) { result.innerText +="9" };
        if (event.key == "+") { result.innerText +="+" };
        if (event.key == "-") { result.innerText +="-" };
        if (event.key == "/") { result.innerText +="/" };
        if (event.key == "*") { result.innerText +="*" };
        if (event.key == "^") {result.innerText +="^"};
        if (event.key == "(") {result.innerText += "("};
        if (event.key == ")") {result.innerText +=")"};
        if (event.key =="%") {result.innerText +="%"} ;
        if (event.key == "c" || event.key == "C") {display.innerText ="   "}
        if (event.key == "."){ display.innerText = "0."}
        else (result.innerText)
        // I believe could use the switch method maybe using something like the following:
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
    });
    
    
    

//ADDITIONAL NOTES/TODO

// if I want to use further classifications, here are the variables for my operator & number buttons... i began to attempt this with my multiply and divider ids:

let operators = document.querySelectorAll(".operator");

for (let operator of operators) {
        operator.addEventListener("click", function (event) {
                if (event.target.id === "multiply" && event.target.id === "divider") {
                        result.innerText += event.target.textContent;
                        console.log(result.innerText);
                    }
                })
            }


// let numbers = document.querySelectorAll(".number");
// console.log(numbers);


// Attempts at including error messages / disallowing invalid inputs (these also seem to respond differently if I have math.eval() vs eval()enabled):

// if (console.log.includes = "Uncaught SyntaxError") { alert("impossible!") }
// // ^ this causes an error message as soon as I reload the page

// if (display.innerText.includes(".." || "//" || "-+" || "\+")) {
//     alert("Invalid Input!")
// }
    
// if (math.eval(display.innerText) = NaN) {result.innerText 

// }

// else if (result =false){alert("Invalid Entry")}

// try {math.eval()} catch{}