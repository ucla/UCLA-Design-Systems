import { define } from 'wicked-elements';
import { executeAfterTransition } from './util/transition';

/**
 * Base class which all components inherit
 */

export default class Component {

  /**
   * Initializes instances of a component that are in the DOM
   */
  static initAll() {
    this.init(this.selector);
  }

  /**
   * 
   * @param {string} selector - CSS selector of the component to init
   * @returns {HTMLElement} Initialized component
   */
  static init(selector) {
    define(selector, this.methods);
    return document.querySelector(selector);
  }

  /**
   * Gets the component's CSS selector.
   * 
   * @abstract
   * @static
   * @returns {string} CSS selector
   */
  static get selector() {
    // Intentially left empty. Implemented virtually by component.
  }

  /**
   * Gets the component's methods.
   * 
   * @abstract
   * @static
   * @returns {Object} All component's methods
   */
  static get methods() {
    // Intentially left empty. Implemented virtually by component.
  }

  /**
   * Binds method to component element
   * 
   * @param {Component} self - Component instance
   * @param {string} name - Method name
   * @param {Function} method - Method to bind
   */
  static bindMethod(self, name, method) {
    Object.defineProperty(self.element, name, {
      value: method.bind(self),
      writable: false,
    });
  }

  /**
   * Generates a random unique ID with 'ucla' prefix
   * 
   * @returns {string}
   */
  static generateUID() {
    return `ucla-${Math.random().toString(20).substring(2, 12)}`;
  }

  /**
   * Sets an element attribute if no value was already defined in the component
   * 
   * @param {HTMLElement} el - Element to set attribute
   * @param {string} attr - Attribute name
   * @param {string} value - Attribute value
   */
  static setAttrIfNotSpecified(el, attr, value) {
    const AttrExist = el.getAttribute(attr);
    if (!AttrExist) el.setAttribute(attr, value);
  }

  /**
   * Dispatches a custom browser event
   * 
   * @param {string} eventName - Event name
   * @param {HTMLElement} element - Event target
   * @param {Object?} detail - Event detail (optional)
   * @returns {boolean} Event is a success or failure
   */
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
