// Delay animations by vertical position in html

// let topLevelElement = document.body
// let elementChildrenArray_ = topLevelElement.children
// let animName_ = "upSpawn"
// let delayInterval_ = 0.3

function animDelayThruDom(elementChildrenArray, animName, delayInterval) {
  let animDelay = 0;

  for (const childElement of elementChildrenArray) {
    if (childElement.className = animName) {
      childElement.style.animationDelay = animDelay;
      animDelay += delayInterval;
    }
  }
}