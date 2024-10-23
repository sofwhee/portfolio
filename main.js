// generate icons at top

// declarations

// add to list and it will appear on site in order
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
  newIconElement.classname = "langIcon upSpawn"
  newIconElement.src = iconLink
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

iconElements = createIconElements(iconsArray)
for (const iconElement of iconElements) {
  iconsDestination.appendChild(iconElement)
}
