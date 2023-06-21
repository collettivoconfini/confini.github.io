//here we need to add a constant for the background which we declared in the css which is "cornice.gif" which later shall also have an animation

document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById("logo");
  const festivalTitle = document.getElementById("festival-title");
  const lineup = document.getElementById("lineup");
  const carlo = document.getElementById("carlo");
  const corasan = document.getElementById("corasan");
  const death = document.getElementById("death");
  const magaze = document.getElementById("magaze");
  const jason = document.getElementById("jason");
  const rododentro = document.getElementById("rododentro");

// ANIMAZIONE DEL TITOLO
const title = document.querySelector("#festival-title");
// Start with a white color
title.style.color = "white";

// Set up the animation interval for title
setInterval(function() {
  // Apply a random color to each character
  const characters = title.textContent.split("");
  const coloredCharacters = characters.map(char => {
    const randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    const startX = Math.random() * 10 - 5;
    const startY = Math.random() * 10 - 5;
    const endX = Math.random() * 10 - 5;
    const endY = Math.random() * 10 - 5;
    return `<span style="color: ${randomColor}; transform: translate(${startX}px, ${startY}px) skew(10deg); animation: move 1s ease-in-out forwards; animation-delay: ${Math.random()}s;">${char}</span>`;
  });
  title.innerHTML = coloredCharacters.join("");
}, 1000); // Change the interval to your desired value (e.g., 1000ms for 1 second)

// Set up the animation timeout to reset the title
setTimeout(function() {
  title.style.color = "white";
  title.style.transform = "none";
}, 5000);

// Add a shadow to the title
title.style.textShadow = "1px 1px 1px rgba(0,0,0,0.5)";


// ANIMAZIONE DELLA scaletta
const scaletta = document.getElementById("lineup");
const texts = ['questa è la scaletta:', 'dal vivo'];
let lineupIndex = 0;

setInterval(function() {
  scaletta.textContent = texts[lineupIndex];
  lineupIndex = (lineupIndex + 1) % texts.length;
}, 2400);

// ANIMAZIONE di carlo
const marlo = document.getElementById("carlo");
const carloTexts = ["CARLO MARTINELLI (post-punk/boxe con il pubblico)", "MARLO CARTINELLI (post-punk/boxe con il pubblico)"];
let carloIndex = 0;

setInterval(function() {
  marlo.textContent = carloTexts[carloIndex];
  carloIndex = (carloIndex + 1) % carloTexts.length;
}, 100);
})

// ANIMAZIONE di CORASAN
const corasao = document.getElementById("corasan");
const corasanTexts = ["CORASAN (emo/metal/noise)", "CORASAN (60's, pop/brioche)"];
let corasaoIndex = 0;

setInterval(function() {
  corasao.textContent = corasanTexts[corasaoIndex];
  corasaoIndex = (corasaoIndex + 1) % corasanTexts.length;
}, 1000);

// ANIMAZIONE di death
const death = document.getElementById("death");
//a javascript that makes everything disapear and reappear in a pulsating way
setInterval(function() {
  death.classList.toggle("fade-out");
}, 2000);




//ANIMAZIONE MAGAZE
// Your existing JavaScript code...

// ANIMAZIONE di magaze
const magaze = document.getElementById("magaze");

// Define the target text and its styles
const targetText = "SUONANO FORTE";
const targetSize = "1.2em";
const targetColor = "red";

// Create a CSS animation for the transition
const animationStyle = `
  @keyframes transition {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale(1.2);
      color: ${targetColor};
    }
    100% {
      opacity: 1;
    }
  }
`;

// Apply the animation style
const styleElement = document.createElement("style");
styleElement.innerHTML = animationStyle;
document.head.appendChild(styleElement);

// Start the animation
magaze.textContent = targetText;
magaze.style.animation = "transition 2s infinite";

// After the animation ends, reset the text and styles
setTimeout(function() {
  magaze.textContent = "MAGAZE (post-punk/rock/cantautorato)";
  magaze.style.animation = "none";
  magaze.style.fontSize = "";
  magaze.style.color = "";
}, 4000); // Change the timeout to match the animation duration (2s) plus some extra time

// Apply the target size and color during the animation
magaze.style.fontSize = targetSize;
magaze.style.color = targetColor;

// ANIMAZIONE di mARCELLO
const marcello = document.getElementById("jason");
const MARCELLOTexts = ["JASON LA MECCA (MISTO MAME)", "JASON LA MECCA (RISTO MARE)"];
let marcelloIndex = 0;
setInterval(function() {
  marcello.textContent = MARCELLOTexts[marcelloIndex];
  marcelloIndex = (marcelloIndex + 1) % MARCELLOTexts.length;
}, 1000);


//rodo
const rododentro = document.getElementById("rododentro");

// Define the target colors
const startColor = "white";
const endColor = "black";

// Split the initial text into individual characters
const characters = rododentro.textContent.split("");

// Create a wrapper element to contain the animated characters
const wrapperElement = document.createElement("span");

// Apply the animation to each character
characters.forEach((char, index) => {
  const charElement = document.createElement("span");
  charElement.textContent = char;
  charElement.classList.add("animate");
  charElement.style.animationDelay = `${index * 100}ms`;
  wrapperElement.appendChild(charElement);
});

// Apply the wrapper element to the rododentro element
rododentro.innerHTML = "";
rododentro.appendChild(wrapperElement);
