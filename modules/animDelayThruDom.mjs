export function animDelayThruDom(elementChildren, initialDelay, delayInterval) {
  // Apply a rolling delay to child elements of a parent
  let animDelay = initialDelay

  for (const childElement of elementChildren) {
    childElement.style.animationDelay = `${animDelay}s`;
    animDelay += delayInterval;
  };
};