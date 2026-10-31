const coin = document.getElementById("coin");
const result = document.getElementById("result");
const flipButton = document.getElementById("flip-btn");

let currentSide = "Heads";

// Common function to animate and update the coin
function flipAnimation(newSide) {


if (flipButton.disabled) return;

flipButton.disabled = true;

coin.classList.remove("flipping");

// Restart animation
void coin.offsetWidth;

coin.classList.add("flipping");

setTimeout(() => {

    currentSide = newSide;

    if (currentSide === "Heads") {
        coin.src = "./resources/heads.svg";
    } else {
        coin.src = "./resources/tails.svg";
    }

    coin.alt = currentSide;
    result.textContent = currentSide;

    coin.classList.remove("flipping");

    flipButton.disabled = false;

}, 700);


}

// RANDOM button: Generate random result
function randomFlip() {


const randomNumber = Math.random();

const randomSide = randomNumber < 0.5 ? "Heads" : "Tails";

flipAnimation(randomSide);


}

// Coin click: Toggle current side
function toggleCoin() {


const nextSide = currentSide === "Heads" ? "Tails" : "Heads";

flipAnimation(nextSide);


}

// Button event
flipButton.addEventListener("click", randomFlip);

// Coin click event
coin.addEventListener("click", toggleCoin);

// Keyboard accessibility
coin.addEventListener("keydown", (event) => {


if (event.key === "Enter" || event.key === " ") {

    event.preventDefault();
    toggleCoin();

}


});
