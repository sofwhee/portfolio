import { createIconImgElement, createIconElements } from "./modules/createIconElements.js";
// I anticipate I'll need this later
// import { childElementsByClass } from "./modules/childElementsByClass.js";
import { animDelayThruDom } from "./modules/animDelayThruDom.js";

// icons
// customizable variables:
const iconsDestination = document.getElementById("langContainer")
const iconsClass = "langIcon upSpawn"
const iconsHeight = "80"
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
// create a rolling animation delay on icons
let startingDelay = 0.6
let delayInterval = 0.2
// --end--

// make icon elements
const linkArray = Array.from(iconLinks)
const iconElements = createIconElements(linkArray, iconsClass, iconsHeight)
// apply delay
animDelayThruDom(iconElements, startingDelay, delayInterval)
// append icons to destination element
for (const iconElement of iconElements) {
  iconsDestination.appendChild(iconElement)
}