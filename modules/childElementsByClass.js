export function childElementsByClass(parent, elClass, elList) {
  // Recursive function that adds children to a list based on class.
  if (parent.children.length == 0) {return};
  for (childElement of parent.children) {
    if (childElement.className == elClass) {elList.push(childElement)}
  };
};