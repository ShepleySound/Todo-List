const getNextSiblings = (element, siblingClass) => {
  const siblings = [];
  let sibling = element.nextSibling;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling.classList.contains(siblingClass)) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

export default getNextSiblings;
