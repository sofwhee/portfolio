function createIconImgElement(iSrc, iClass, iHeight) {
  const newIconElement = document.createElement("img")
  newIconElement.src = iSrc
  newIconElement.className = iClass
  newIconElement.height = iHeight
  return newIconElement
}

function createIconElements(linksArray, iconClass, iconHeight){
  let newIconElements = []
  for (const iconLink of linksArray) {
    newIconElements.push(createIconImgElement(iconLink, iconClass, iconHeight))
  }
  return newIconElements
}

export { createIconImgElement, createIconElements }