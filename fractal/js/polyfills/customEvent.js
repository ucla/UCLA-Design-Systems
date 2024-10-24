/**
 * Custom Event polyfill
 */
(function () {
  if (typeof window.CustomEvent === 'function') return false;
  function CustomEvent(e, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined,
    };

    let customEvent;

    if ('createEvent' in document) {
      try {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(
          e,
          params.bubbles,
          params.cancelable,
          params.detail
        );
      } catch (error) {
        customEvent = document.createEvent('Event');
        customEvent.initEvent(e, params.bubbles, params.cancelable);
        customEvent.detail = params.detail;
      }
    } else {
      customEvent = new Event(e, params);
      customEvent.detail = (params && params.detail) || null;
    }
    return customEvent;
  }

  customEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
