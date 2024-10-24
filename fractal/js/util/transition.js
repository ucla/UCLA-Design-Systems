const getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }
  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } =
    window.getComputedStyle(element);

  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];

  return (
    (Number.parseFloat(transitionDuration) +
      Number.parseFloat(transitionDelay)) *
    1000
  );
};
const execute = (
  possibleCallback,
  args = [],
  defaultValue = possibleCallback
) => {
  return typeof possibleCallback === 'function'
    ? possibleCallback(...args)
    : defaultValue;
};
const executeAfterTransition = (
  callback,
  transitionElement,
  waitForTransition = true
) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration =
    getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = ({ target }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener('transitionend', handler);
    execute(callback);
  };

  transitionElement.addEventListener('transitionend', handler);

  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
const triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event('transitionend'));
};

export {
  getTransitionDurationFromElement,
  execute,
  executeAfterTransition,
  triggerTransitionEnd,
};
