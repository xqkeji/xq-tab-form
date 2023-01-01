const domReady = (callBack: () => void): void => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callBack)
    } else {
      callBack()
    }
}
const parents = (element: Element, selector: string) => {
  const parents = []
  let ancestor = element.parentNode as Element
  while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== 3) {
    if (ancestor.matches(selector)) {
      parents.push(ancestor)
    }

    ancestor = ancestor.parentNode as Element
  }

  return parents
}

export {domReady,parents}