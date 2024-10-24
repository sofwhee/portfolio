import { createIconImgElement, createIconElements } from "./modules/createIconElements.js";
import { childElementsByClass } from "./modules/childElementsByClass.js";
import { animDelayThruDom } from "./modules/animDelayThruDom.mjs";

// icons
// change these vars to suit needs
const iconsClass = "langIcon upSpawn"
const iconsHeight = "80px"
const iconsDestination = document.getElementById("langContainer")
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
// make icon elements and apply to destination
const iconsArray_ = Array.from(iconLinks)
const iconElements = createIconElements(iconsArray_, iconsClass, iconsHeight)
for (const iconElement of iconElements) {
  iconsDestination.appendChild(iconElement)
}


// create a rolling animation delay from parent to children based on class
// first make a list of elements to apply delay ...
// change these vars to suit needs
let elementParent = document.getElementById("langContainer")
let animationName = "upSpawn" 
// child elements with specified animation name
iconElementsAnimated = childElementsByClass(elementParent, animationName)

// then apply delay to those children ...
// change these vars to suit needs
let startingDelay = 0.8
let delayInterval = 0.2
// apply
animDelayThruDom(iconElements, startingDelay, delayInterval)
