//Vibe coded for now(Since I didnt learn Js yet) Will rewrite it(TRUST ME)
const text = document.getElementById("changing-text");

const words = [
    "Developer",
    "Programmer",
    "Cybersecurity Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const word = words[wordIndex];

    if (!deleting) {
        // Typing
        text.textContent = word.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === word.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        // Deleting
        text.textContent = word.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 100);
}

typeEffect();

function popup() {
    const Popup = document.getElementById("Popup");

    Popup.style.display = "block";

    setTimeout(() => {
        Popup.style.display = "none";
    }, 3000);
}
