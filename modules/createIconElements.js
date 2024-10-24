function createIconImgElement(iconLink, iconClass, iconHeight) {
  const newIconElement = document.createElement("img")
  newIconElement.src = iconLink
  newIconElement.className = iconClass
  newIconElement.height = iconHeight
  return newIconElement
}

function createIconElements(iconsArray, iconClass, iconHeight){
  let newIconElements = []
  for (const iconLink of iconsArray) {
    newIconElements.push(createIconImgElement(iconLink, iconClass, iconHeight))
  }
  return newIconElements
}

export { createIconImgElement, createIconElements }