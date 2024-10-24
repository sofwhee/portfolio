import { createIconElement, createIconElements } from "./modules/createIconElements.js";
import { animDelayThruDom } from "./modules/animDelayThruDom.mjs";
// import { childElementsByClass } from "./modules/childElementsByClass.js";

// icons
// change these vars to suit needs
const iconsClass = "langIcon upSpawn"
const iconsHeight = "80px"
// add icon svg link to list and it will appear on site in order
const iconLinks = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
]

// make icon elements and apply them to page
// (don't change these)
const iconsArray_ = Array.from(iconLinks)
const iconsDestination = document.getElementById("langContainer")
const iconElements = createIconElements(iconsArray_, iconsClass, iconsHeight)
for (const iconElement of iconElements) {
  iconsDestination.appendChild(iconElement)
}
// ---

// create a rolling animation delay from parent to children based on class
// change these var to suit needs
let elementParent = document.getElementById("langContainer")
let animationName = "upSpawn" 
let startingDelay = 0.8
let delayInterval = 0.2


// apply delay (don't change these)
animDelayThruDom(iconElements, startingDelay, delayInterval)
// ---

