import { define } from 'wicked-elements';
import { executeAfterTransition } from './util/transition';
export default class Component {
  static initAll() {
    this.init(this.selector);
  }
  static init(selector) {
    define(selector, this.methods);
    return document.querySelector(selector);
  }
  static get selector() {}
  static get methods() {}
  static bindMethod(self, name, method) {
    Object.defineProperty(self.element, name, {
      value: method.bind(self),
      writable: false,
    });
  }
  static generateUID() {
    return `ucla-${Math.random().toString(20).substring(2, 12)}`;
  }
  static setAttrIfNotSpecified(el, attr, value) {
    const AttrExist = el.getAttribute(attr);
    if (!AttrExist) el.setAttribute(attr, value);
  }
  static dispatchCustomEvent(eventName, element, detail = {}) {
    const event = new CustomEvent(`bruin${eventName}`, {
      bubbles: true,
      cancelable: true,
      detail,
    });
    return element.dispatchEvent(event);
  }
  static _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
}
