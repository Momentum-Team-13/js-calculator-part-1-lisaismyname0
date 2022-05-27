let clicks =
    document.querySelectorAll(".click");
console.log(clicks);

let display = document.querySelector("#display");
// display = any element that returns with the id of display
console.log(clicks[0].classList);

for (let click of clicks) {
    click.addEventListener("click", function (event) {
        event.target.classList.remove("unhighlight");
        event.target.classList.add("highlight");
        console.log(event.target.textContent);
        // here i added the event listner that if anything in the class "click" was clicked, it would remove the unhighlight class and replace it with the highlight class
        let newElement = document.createElement("p");
        // created a mew element of p
        newElement.innerText = event.target.textContent;
        // re assigns the inner text of the new element as the event.target.textContent (aka the value of the button pushed)
        newElement.classList.add("yellow-background");
        display.appendChild(newElement);
        // take the element of display, appendChild(p) which appends the new p element to the empty div that has the class of display (we declared display earlier.. this allows the event.target.textContent to be shown wherever we want... in this case its in the new p tag element located in the #display

    });
}

for (let click of clicks) {
    click.addEventListener("mouseover", function (event) {
        console.log(event.target.textContent);
        event.target.classList.remove("highlight");
        event.target.classList.add("unhighlight");
    });
}

// here the event has changed so that when i mouseover the buttons, the features of the class list highlight are removed and replaced with those of the unhighlight feature

