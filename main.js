// Delay animations by vertical position in html

// functions

function childElementsByClass(parent, elClass, elList) {
  if (parent.children.length == 0) {return};
  for (childElement of parent.children) {
    if (childElement.className == elClass) {elList.push(childElement)}
  };
};

function animDelayThruDom(elementChildren, initialDelay, delayInterval) {
  let animDelay = initialDelay

  for (const childElement of elementChildren) {
    childElement.style.animationDelay = `${animDelay}s`;
    animDelay += delayInterval;
  };
};

// execution
// ------
// Generate icons

// declarations

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
const iconsArray = Array.from(iconLinks)
const iconsDestination = document.getElementById("langContainer")

// functions

function createIconElement(iconLink) {
  const newIconElement = document.createElement("img")
  newIconElement.className = "langIcon upSpawn"
  newIconElement.src = iconLink
  newIconElement.height = 80
  return newIconElement
}

function createIconElements(iconsArray_){
  let newIconElements = []
  for (const iconLink_ of iconsArray_) {
    newIconElements.push(createIconElement(iconLink_))
  }
  return newIconElements
}

// execution

let iconElements = createIconElements(iconsArray)
for (const iconElement of iconElements) {
  iconsDestination.appendChild(iconElement)
}

// childElementsByClass(elementParent, "upSpawn", elementChildren_)

animDelayThruDom(iconElements, 0.8, 0.2)