const isEscapeKeydown = (evt) => evt.key === 'Escape';

const stopPropagation = (evt) => evt.stopPropagation();

const addEventListenerRest = (parent, type, action, ...selectors) => {
  for (const selector of selectors) {
    parent.querySelector(selector).addEventListener(type, action);
  }
};

const addStyleToElement = (element, styleProperties) => {
  for (const [property, value] of Object.entries(styleProperties)) {
    element.style.setProperty(property, value);
  }
};

const makeDebounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const compareRandom = () => Math.random() - 0.5;

const compareCommentsLength = (a, b) => b.comments.length - a.comments.length;

const clearMiniatures = () => {
  const pictures = document.querySelectorAll('.picture');
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].remove();
  }
};

export {isEscapeKeydown, stopPropagation, addEventListenerRest, addStyleToElement, makeDebounce, compareRandom, compareCommentsLength, clearMiniatures};
