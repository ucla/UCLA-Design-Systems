(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // js/vendor/carousel.js
  var require_carousel = __commonJS({
    "js/vendor/carousel.js"() {
      (function() {
        "use strict";
        var __webpack_require__ = {};
        !function() {
          __webpack_require__.d = function(exports2, definition) {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        }();
        !function() {
          __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
        }();
        !function() {
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
        }();
        var states_namespaceObject = {};
        __webpack_require__.r(states_namespaceObject);
        __webpack_require__.d(states_namespaceObject, {
          "CREATED": function() {
            return CREATED;
          },
          "DESTROYED": function() {
            return DESTROYED;
          },
          "IDLE": function() {
            return IDLE;
          },
          "MOUNTED": function() {
            return MOUNTED;
          },
          "MOVING": function() {
            return MOVING;
          }
        });
        ;
        var core_event = function() {
          var data = [];
          var Event = {
            /**
             * Subscribe the given event(s).
             *
             * @param {string}   events  - An event name. Use space to separate multiple events.
             *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
             * @param {function} handler - A callback function.
             * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
             * @param {Object}   options - Optional. Options for addEventListener.
             */
            on: function on(events, handler, elm, options2) {
              if (elm === void 0) {
                elm = null;
              }
              if (options2 === void 0) {
                options2 = {};
              }
              events.split(" ").forEach(function(event) {
                if (elm) {
                  elm.addEventListener(event, handler, options2);
                }
                data.push({
                  event,
                  handler,
                  elm,
                  options: options2
                });
              });
            },
            /**
             * Unsubscribe the given event(s).
             *
             * @param {string}  events - A event name or names split by space.
             * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
             */
            off: function off(events, elm) {
              if (elm === void 0) {
                elm = null;
              }
              events.split(" ").forEach(function(event) {
                data = data.filter(function(item) {
                  if (item && item.event === event && item.elm === elm) {
                    unsubscribe(item);
                    return false;
                  }
                  return true;
                });
              });
            },
            /**
             * Emit an event.
             * This method is only for custom events.
             *
             * @param {string}  event - An event name.
             * @param {*}       args  - Any number of arguments passed to handlers.
             */
            emit: function emit(event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              data.forEach(function(item) {
                if (!item.elm && item.event.split(".")[0] === event) {
                  item.handler.apply(item, args);
                }
              });
            },
            /**
             * Clear event data.
             */
            destroy: function destroy() {
              data.forEach(unsubscribe);
              data = [];
            }
          };
          function unsubscribe(item) {
            if (item.elm) {
              item.elm.removeEventListener(item.event, item.handler, item.options);
            }
          }
          return Event;
        };
        ;
        var state = function(initialState) {
          var curr = initialState;
          return {
            /**
             * Change state.
             *
             * @param {string|number} state - A new state.
             */
            set: function set(state2) {
              curr = state2;
            },
            /**
             * Verify if the current state is given one or not.
             *
             * @param {string|number} state - A state name to be verified.
             *
             * @return {boolean} - True if the current state is the given one.
             */
            is: function is(state2) {
              return state2 === curr;
            }
          };
        };
        ;
        function _extends() {
          _extends = Object.assign || function(target2) {
            for (var i2 = 1; i2 < arguments.length; i2++) {
              var source = arguments[i2];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target2[key] = source[key];
                }
              }
            }
            return target2;
          };
          return _extends.apply(this, arguments);
        }
        var keys = Object.keys;
        function each(obj, callback) {
          keys(obj).some(function(key, index) {
            return callback(obj[key], key, index);
          });
        }
        function values(obj) {
          return keys(obj).map(function(key) {
            return obj[key];
          });
        }
        function isObject(subject) {
          return typeof subject === "object";
        }
        function merge(_ref, from) {
          var to = _extends({}, _ref);
          each(from, function(value, key) {
            if (isObject(value)) {
              if (!isObject(to[key])) {
                to[key] = {};
              }
              to[key] = merge(to[key], value);
            } else {
              to[key] = value;
            }
          });
          return to;
        }
        function object_assign(to, from) {
          keys(from).forEach(function(key) {
            if (!to[key]) {
              Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
            }
          });
          return to;
        }
        ;
        function toArray(value) {
          return Array.isArray(value) ? value : [value];
        }
        function between(value, m1, m2) {
          return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
        }
        function sprintf(format, replacements) {
          var i2 = 0;
          return format.replace(/%s/g, function() {
            return toArray(replacements)[i2++];
          });
        }
        function unit(value) {
          var type = typeof value;
          if (type === "number" && value > 0) {
            return parseFloat(value) + "px";
          }
          return type === "string" ? value : "";
        }
        function pad(number) {
          return number < 10 ? "0" + number : number;
        }
        function toPixel(root, value) {
          if (typeof value === "string") {
            var div = create("div", {});
            applyStyle(div, {
              position: "absolute",
              width: value
            });
            append(root, div);
            value = div.clientWidth;
            dom_remove(div);
          }
          return +value || 0;
        }
        ;
        function find(elm, selector) {
          return elm ? elm.querySelector(selector.split(" ")[0]) : null;
        }
        function child(parent, tagOrClassName) {
          return children(parent, tagOrClassName)[0];
        }
        function children(parent, tagOrClassName) {
          if (parent) {
            return values(parent.children).filter(function(child2) {
              return hasClass(child2, tagOrClassName.split(" ")[0]) || child2.tagName === tagOrClassName;
            });
          }
          return [];
        }
        function create(tag, attrs) {
          var elm = document.createElement(tag);
          each(attrs, function(value, key) {
            return setAttribute(elm, key, value);
          });
          return elm;
        }
        function domify(html) {
          var div = create("div", {});
          div.innerHTML = html;
          return div.firstChild;
        }
        function dom_remove(elms) {
          toArray(elms).forEach(function(elm) {
            if (elm) {
              var parent = elm.parentElement;
              parent && parent.removeChild(elm);
            }
          });
        }
        function append(parent, child2) {
          if (parent) {
            parent.appendChild(child2);
          }
        }
        function before(elm, ref) {
          if (elm && ref) {
            var parent = ref.parentElement;
            parent && parent.insertBefore(elm, ref);
          }
        }
        function applyStyle(elm, styles) {
          if (elm) {
            each(styles, function(value, prop) {
              if (value !== null) {
                elm.style[prop] = value;
              }
            });
          }
        }
        function addOrRemoveClasses(elm, classes, remove) {
          if (elm) {
            toArray(classes).forEach(function(name) {
              if (name) {
                elm.classList[remove ? "remove" : "add"](name);
              }
            });
          }
        }
        function addClass(elm, classes) {
          addOrRemoveClasses(elm, classes, false);
        }
        function removeClass(elm, classes) {
          addOrRemoveClasses(elm, classes, true);
        }
        function hasClass(elm, className) {
          return !!elm && elm.classList.contains(className);
        }
        function setAttribute(elm, name, value) {
          if (elm) {
            elm.setAttribute(name, value);
          }
        }
        function getAttribute(elm, name) {
          return elm ? elm.getAttribute(name) : "";
        }
        function removeAttribute(elms, names) {
          toArray(names).forEach(function(name) {
            toArray(elms).forEach(function(elm) {
              return elm && elm.removeAttribute(name);
            });
          });
        }
        function getRect(elm) {
          return elm.getBoundingClientRect();
        }
        function loaded(elm, callback) {
          var images = elm.querySelectorAll("img");
          var length = images.length;
          if (length) {
            var count = 0;
            each(images, function(img) {
              img.onload = img.onerror = function() {
                if (++count === length) {
                  callback();
                }
              };
            });
          } else {
            callback();
          }
        }
        ;
        var SLIDE = "slide";
        var LOOP = "loop";
        var FADE = "fade";
        ;
        var slide = function(Splide2, Components) {
          var list;
          var endCallback;
          return {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              list = Components.Elements.list;
              Splide2.on("transitionend", function(e) {
                if (e.target === list && endCallback) {
                  endCallback();
                }
              }, list);
            },
            /**
             * Start transition.
             *
             * @param {number}   destIndex - Destination slide index that might be clone's.
             * @param {number}   newIndex  - New index.
             * @param {number}   prevIndex - Previous index.
             * @param {Object}   coord     - Destination coordinates.
             * @param {function} done      - Callback function must be invoked when transition is completed.
             */
            start: function start(destIndex, newIndex, prevIndex, coord, done) {
              var options2 = Splide2.options;
              var edgeIndex = Components.Controller.edgeIndex;
              var speed = options2.speed;
              endCallback = done;
              if (Splide2.is(SLIDE)) {
                if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
                  speed = options2.rewindSpeed || speed;
                }
              }
              applyStyle(list, {
                transition: "transform " + speed + "ms " + options2.easing,
                transform: "translate(" + coord.x + "px," + coord.y + "px)"
              });
            }
          };
        };
        ;
        var fade = function(Splide2, Components) {
          var Fade = {
            /**
             * Called when the component is mounted.
             * Apply transition style to the first slide.
             */
            mount: function mount() {
              apply(Splide2.index);
            },
            /**
             * Start transition.
             *
             * @param {number}    destIndex - Destination slide index that might be clone's.
             * @param {number}    newIndex  - New index.
             * @param {number}    prevIndex - Previous index.
             * @param {Object}    coord     - Destination coordinates.
             * @param {function}  done      - Callback function must be invoked when transition is completed.
             */
            start: function start(destIndex, newIndex, prevIndex, coord, done) {
              var track2 = Components.Elements.track;
              applyStyle(track2, {
                height: unit(track2.clientHeight)
              });
              apply(newIndex);
              setTimeout(function() {
                done();
                applyStyle(track2, {
                  height: ""
                });
              });
            }
          };
          function apply(index) {
            var options2 = Splide2.options;
            applyStyle(Components.Elements.slides[index], {
              transition: "opacity " + options2.speed + "ms " + options2.easing
            });
          }
          return Fade;
        };
        ;
        ;
        function compose(Splide2, Components, Transition) {
          var components = {};
          each(Components, function(Component, name) {
            components[name] = Component(Splide2, components, name.toLowerCase());
          });
          if (!Transition) {
            Transition = Splide2.is(FADE) ? fade : slide;
          }
          components.Transition = Transition(Splide2, components);
          return components;
        }
        ;
        var MESSAGE_PREFIX = "[SPLIDE]";
        function error(message) {
          console.error(MESSAGE_PREFIX + " " + message);
        }
        function exist(subject, message) {
          if (!subject) {
            throw new Error(message);
          }
        }
        ;
        var ROOT = "splide";
        var ELEMENT_CLASSES = {
          root: ROOT,
          slider: ROOT + "__slider",
          track: ROOT + "__track",
          list: ROOT + "__list",
          slide: ROOT + "__slide",
          container: ROOT + "__slide__container",
          arrows: ROOT + "__arrows",
          arrow: ROOT + "__arrow",
          prev: ROOT + "__arrow--prev",
          next: ROOT + "__arrow--next",
          pagination: ROOT + "__pagination",
          page: ROOT + "__pagination__page",
          clone: ROOT + "__slide--clone",
          progress: ROOT + "__progress",
          bar: ROOT + "__progress__bar",
          autoplay: ROOT + "__autoplay",
          play: ROOT + "__play",
          pause: ROOT + "__pause",
          spinner: ROOT + "__spinner",
          sr: ROOT + "__sr"
        };
        var STATUS_CLASSES = {
          active: "is-active",
          visible: "is-visible",
          loading: "is-loading"
        };
        ;
        var I18N = {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay"
        };
        ;
        var DEFAULTS = {
          /**
           * Determine a slider type.
           * - 'slide': Regular slider.
           * - 'loop' : Carousel slider.
           * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
           *
           * @type {string}
           */
          type: "slide",
          /**
           * Whether to rewind a slider before the first slide or after the last one.
           * In "loop" mode, this option is ignored.
           *
           * @type {boolean}
           */
          rewind: false,
          /**
           * Transition speed in milliseconds.
           *
           * @type {number}
           */
          speed: 400,
          /**
           * Transition speed on rewind in milliseconds.
           *
           * @type {number}
           */
          rewindSpeed: 0,
          /**
           * Whether to prevent any actions while a slider is transitioning.
           * If false, navigation, drag and swipe work while the slider is running.
           * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
           *
           * @type {boolean}
           */
          waitForTransition: true,
          /**
           * Define slider max width.
           *
           * @type {number}
           */
          width: 0,
          /**
           * Define slider height.
           *
           * @type {number}
           */
          height: 0,
          /**
           * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
           * perPage number will be ignored when this option is falsy.
           *
           * @type {number|string}
           */
          fixedWidth: 0,
          /**
           * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
           * heightRatio option will be ignored when this option is falsy.
           *
           * @type {number|string}
           */
          fixedHeight: 0,
          /**
           * Determine height of slides by ratio to a slider width.
           * This will be ignored when the fixedHeight is provided.
           *
           * @type {number}
           */
          heightRatio: 0,
          /**
           * If true, slide width will be determined by the element width itself.
           * - perPage/perMove should be 1.
           *
           * @type {boolean}
           */
          autoWidth: false,
          /**
           * If true, slide height will be determined by the element width itself.
           * - perPage/perMove should be 1.
           *
           * @type {boolean}
           */
          autoHeight: false,
          /**
           * Determine how many slides should be displayed per page.
           *
           * @type {number}
           */
          perPage: 1,
          /**
           * Determine how many slides should be moved when a slider goes to next or perv.
           *
           * @type {number}
           */
          perMove: 0,
          /**
           * Determine manually how many clones should be generated on the left and right side.
           * The total number of clones will be twice of this number.
           *
           * @type {number}
           */
          clones: 0,
          /**
           * Start index.
           *
           * @type {number}
           */
          start: 0,
          /**
           * Determine which slide should be focused if there are multiple slides in a page.
           * A string "center" is acceptable for centering slides.
           *
           * @type {boolean|number|string}
           */
          focus: false,
          /**
           * Gap between slides. CSS format is allowed such as 1em.
           *
           * @type {number|string}
           */
          gap: 0,
          /**
           * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
           * Give a single value to set a same size for both sides or
           * do an object for different sizes.
           * Also, CSS format is allowed such as 1em.
           *
           * @example
           * - 10: Number
           * - '1em': CSS format.
           * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
           * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
           *
           * @type {number|string|Object}
           */
          padding: 0,
          /**
           * Whether to append arrows.
           *
           * @type {boolean}
           */
          arrows: true,
          /**
           * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
           *
           * @type {string}
           */
          arrowPath: "",
          /**
           * Whether to append pagination(indicator dots) or not.
           *
           * @type {boolean}
           */
          pagination: true,
          /**
           * Activate autoplay.
           *
           * @type {boolean}
           */
          autoplay: false,
          /**
           * Autoplay interval in milliseconds.
           *
           * @type {number}
           */
          interval: 5e3,
          /**
           * Whether to stop autoplay when a slider is hovered.
           *
           * @type {boolean}
           */
          pauseOnHover: true,
          /**
           * Whether to stop autoplay when a slider elements are focused.
           * True is recommended for accessibility.
           *
           * @type {boolean}
           */
          pauseOnFocus: true,
          /**
           * Whether to reset progress of the autoplay timer when resumed.
           *
           * @type {boolean}
           */
          resetProgress: true,
          /**
           * Loading images lazily.
           * Image src must be provided by a data-splide-lazy attribute.
           *
           * - false: Do nothing.
           * - 'nearby': Only images around an active slide will be loaded.
           * - 'sequential': All images will be sequentially loaded.
           *
           * @type {boolean|string}
           */
          lazyLoad: false,
          /**
           * This option works only when a lazyLoad option is "nearby".
           * Determine how many pages(not slides) around an active slide should be loaded beforehand.
           *
           * @type {number}
           */
          preloadPages: 1,
          /**
           * Easing for CSS transition. For example, linear, ease or cubic-bezier().
           *
           * @type {string}
           */
          easing: "cubic-bezier(.42,.65,.27,.99)",
          /**
           * Whether to enable keyboard shortcuts
           * - true or 'global': Listen to keydown event of the document.
           * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
           * - false: Disable keyboard shortcuts.
           *
           * @type {boolean|string}
           */
          keyboard: "global",
          /**
           * Whether to allow mouse drag and touch swipe.
           *
           * @type {boolean}
           */
          drag: true,
          /**
           * The angle threshold for drag.
           * The slider starts moving only when the drag angle is less than this threshold.
           *
           * @type {number}
           */
          dragAngleThreshold: 30,
          /**
           * Distance threshold for determining if the action is "flick" or "swipe".
           * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
           *
           * @type {number}
           */
          swipeDistanceThreshold: 150,
          /**
           * Velocity threshold for determining if the action is "flick" or "swipe".
           * Around 0.5 is recommended.
           *
           * @type {number}
           */
          flickVelocityThreshold: 0.6,
          /**
           * Determine power of flick. The larger number this is, the farther a slider runs by flick.
           * Around 500 is recommended.
           *
           * @type {number}
           */
          flickPower: 600,
          /**
           * Limit a number of pages to move by flick.
           *
           * @type {number}
           */
          flickMaxPages: 1,
          /**
           * Slider direction.
           * - 'ltr': Left to right.
           * - 'rtl': Right to left.
           * - 'ttb': Top to bottom.
           *
           * @type {string}
           */
          direction: "ltr",
          /**
           * Set img src to background-image of its parent element.
           * Images with various sizes can be displayed as same dimension without cropping work.
           * fixedHeight or heightRatio is required.
           *
           * @type {boolean}
           */
          cover: false,
          /**
           * Whether to enable accessibility(aria and screen reader texts) or not.
           *
           * @type {boolean}
           */
          accessibility: true,
          /**
           * Whether to add tabindex="0" to visible slides or not.
           *
           * @type {boolean}
           */
          slideFocus: true,
          /**
           * Determine if a slider is navigation for another.
           * Use "sync" API to synchronize two sliders.
           *
           * @type {boolean}
           */
          isNavigation: false,
          /**
           * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
           *
           * @type {boolean}
           */
          trimSpace: true,
          /**
           * The "is-active" class is added after transition as default.
           * If true, it will be added before move.
           *
           * @type {boolean}
           */
          updateOnMove: false,
          /**
           * Throttle duration in milliseconds for the resize event.
           *
           * @type {number}
           */
          throttle: 100,
          /**
           * Whether to destroy a slider or not.
           *
           * @type {boolean}
           */
          destroy: false,
          /**
           * Options for specific breakpoints.
           *
           * @example
           * {
           *   1000: {
           *     perPage: 3,
           *     gap: 20
           *   },
           *   600: {
           *     perPage: 1,
           *     gap: 5,
           *   }
           * }
           *
           * @type {boolean|Object}
           */
          breakpoints: false,
          /**
           * Collection of class names.
           *
           * @see ./classes.js
           *
           * @type {Object}
           */
          classes: ELEMENT_CLASSES,
          /**
           * Collection of i18n texts.
           *
           * @see ./i18n.js
           *
           * @type {Object}
           */
          i18n: I18N
        };
        ;
        var CREATED = 1;
        var MOUNTED = 2;
        var IDLE = 3;
        var MOVING = 4;
        var DESTROYED = 5;
        ;
        function _defineProperties(target2, props) {
          for (var i2 = 0; i2 < props.length; i2++) {
            var descriptor = props[i2];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target2, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var Splide = /* @__PURE__ */ function() {
          function Splide2(root, options2, Components) {
            if (options2 === void 0) {
              options2 = {};
            }
            if (Components === void 0) {
              Components = {};
            }
            this.root = root instanceof Element ? root : document.querySelector(root);
            exist(this.root, "An invalid element/selector was given.");
            this.Components = null;
            this.Event = core_event();
            this.State = state(CREATED);
            this.STATES = states_namespaceObject;
            this._o = merge(DEFAULTS, options2);
            this._i = 0;
            this._c = Components;
            this._e = {};
            this._t = null;
          }
          var _proto = Splide2.prototype;
          _proto.mount = function mount(Extensions, Transition) {
            var _this = this;
            if (Extensions === void 0) {
              Extensions = this._e;
            }
            if (Transition === void 0) {
              Transition = this._t;
            }
            this.State.set(CREATED);
            this._e = Extensions;
            this._t = Transition;
            this.Components = compose(this, merge(this._c, Extensions), Transition);
            try {
              each(this.Components, function(component, key) {
                var required = component.required;
                if (required === void 0 || required) {
                  component.mount && component.mount();
                } else {
                  delete _this.Components[key];
                }
              });
            } catch (e) {
              error(e.message);
              return;
            }
            var State = this.State;
            State.set(MOUNTED);
            each(this.Components, function(component) {
              component.mounted && component.mounted();
            });
            this.emit("mounted");
            State.set(IDLE);
            this.emit("ready");
            applyStyle(this.root, {
              visibility: "visible"
            });
            this.on("move drag", function() {
              return State.set(MOVING);
            }).on("moved dragged", function() {
              return State.set(IDLE);
            });
            return this;
          };
          _proto.sync = function sync2(splide) {
            this.sibling = splide;
            return this;
          };
          _proto.on = function on(events, handler, elm, options2) {
            if (elm === void 0) {
              elm = null;
            }
            if (options2 === void 0) {
              options2 = {};
            }
            this.Event.on(events, handler, elm, options2);
            return this;
          };
          _proto.off = function off(events, elm) {
            if (elm === void 0) {
              elm = null;
            }
            this.Event.off(events, elm);
            return this;
          };
          _proto.emit = function emit(event) {
            var _this$Event;
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));
            return this;
          };
          _proto.go = function go(control, wait) {
            if (wait === void 0) {
              wait = this.options.waitForTransition;
            }
            if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
              this.Components.Controller.go(control, false);
            }
            return this;
          };
          _proto.is = function is(type) {
            return type === this._o.type;
          };
          _proto.add = function add(slide2, index) {
            if (index === void 0) {
              index = -1;
            }
            this.Components.Elements.add(slide2, index, this.refresh.bind(this));
            return this;
          };
          _proto.remove = function remove(index) {
            this.Components.Elements.remove(index);
            this.refresh();
            return this;
          };
          _proto.refresh = function refresh() {
            this.emit("refresh:before").emit("refresh").emit("resize");
            return this;
          };
          _proto.destroy = function destroy(completely) {
            var _this2 = this;
            if (completely === void 0) {
              completely = true;
            }
            if (this.State.is(CREATED)) {
              this.on("ready", function() {
                return _this2.destroy(completely);
              });
              return;
            }
            values(this.Components).reverse().forEach(function(component) {
              component.destroy && component.destroy(completely);
            });
            this.emit("destroy", completely);
            this.Event.destroy();
            this.State.set(DESTROYED);
            return this;
          };
          _createClass(Splide2, [{
            key: "index",
            get: function get() {
              return this._i;
            },
            set: function set(index) {
              this._i = parseInt(index);
            }
            /**
             * Return length of slides.
             * This is an alias of Elements.length.
             *
             * @return {number} - A number of slides.
             */
          }, {
            key: "length",
            get: function get() {
              return this.Components.Elements.length;
            }
            /**
             * Return options.
             *
             * @return {Object} - Options object.
             */
          }, {
            key: "options",
            get: function get() {
              return this._o;
            },
            set: function set(options2) {
              var created = this.State.is(CREATED);
              if (!created) {
                this.emit("update");
              }
              this._o = merge(this._o, options2);
              if (!created) {
                this.emit("updated", this._o);
              }
            }
            /**
             * Return the class list.
             * This is an alias of Splide.options.classList.
             *
             * @return {Object} - An object containing all class list.
             */
          }, {
            key: "classes",
            get: function get() {
              return this._o.classes;
            }
            /**
             * Return the i18n strings.
             * This is an alias of Splide.options.i18n.
             *
             * @return {Object} - An object containing all i18n strings.
             */
          }, {
            key: "i18n",
            get: function get() {
              return this._o.i18n;
            }
          }]);
          return Splide2;
        }();
        ;
        var options = function(Splide2) {
          var options2 = getAttribute(Splide2.root, "data-splide");
          if (options2) {
            try {
              Splide2.options = JSON.parse(options2);
            } catch (e) {
              error(e.message);
            }
          }
          return {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              if (Splide2.State.is(CREATED)) {
                Splide2.index = Splide2.options.start;
              }
            }
          };
        };
        ;
        var LTR = "ltr";
        var RTL = "rtl";
        var TTB = "ttb";
        ;
        var STYLE_RESTORE_EVENTS = "update.slide";
        var elements_slide = function(Splide2, index, realIndex, slide2) {
          var updateOnMove = Splide2.options.updateOnMove;
          var STATUS_UPDATE_EVENTS = "ready.slide updated.slide resized.slide moved.slide" + (updateOnMove ? " move.slide" : "");
          var Slide = {
            /**
             * Slide element.
             *
             * @type {Element}
             */
            slide: slide2,
            /**
             * Slide index.
             *
             * @type {number}
             */
            index,
            /**
             * Real index for clones.
             *
             * @type {number}
             */
            realIndex,
            /**
             * Container element if available.
             *
             * @type {Element|undefined}
             */
            container: child(slide2, Splide2.classes.container),
            /**
             * Whether this is a cloned slide or not.
             *
             * @type {boolean}
             */
            isClone: realIndex > -1,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              var _this = this;
              if (!this.isClone) {
                slide2.id = Splide2.root.id + "-slide" + pad(index + 1);
              }
              Splide2.on(STATUS_UPDATE_EVENTS, function() {
                return _this.update();
              }).on(STYLE_RESTORE_EVENTS, restoreStyles).on("click", function() {
                return Splide2.emit("click", _this);
              }, slide2);
              if (updateOnMove) {
                Splide2.on("move.slide", function(newIndex) {
                  if (newIndex === realIndex) {
                    _update(true, false);
                  }
                });
              }
              applyStyle(slide2, {
                display: ""
              });
              this.styles = getAttribute(slide2, "style") || "";
            },
            /**
             * Destroy.
             */
            destroy: function destroy() {
              Splide2.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off("click", slide2);
              removeClass(slide2, values(STATUS_CLASSES));
              restoreStyles();
              removeAttribute(this.container, "style");
            },
            /**
             * Update active and visible status.
             */
            update: function update() {
              _update(this.isActive(), false);
              _update(this.isVisible(), true);
            },
            /**
             * Check whether this slide is active or not.
             *
             * @return {boolean} - True if the slide is active or false if not.
             */
            isActive: function isActive() {
              return Splide2.index === index;
            },
            /**
             * Check whether this slide is visible in the viewport or not.
             *
             * @return {boolean} - True if the slide is visible or false if not.
             */
            isVisible: function isVisible() {
              var active = this.isActive();
              if (Splide2.is(FADE) || active) {
                return active;
              }
              var ceil = Math.ceil;
              var trackRect = getRect(Splide2.Components.Elements.track);
              var slideRect = getRect(slide2);
              if (Splide2.options.direction === TTB) {
                return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
              }
              return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
            },
            /**
             * Calculate how far this slide is from another slide and
             * return true if the distance is within the given number.
             *
             * @param {number} from   - Index of a target slide.
             * @param {number} within - True if the slide is within this number.
             *
             * @return {boolean} - True if the slide is within the number or false otherwise.
             */
            isWithin: function isWithin(from, within) {
              var diff = Math.abs(from - index);
              if (!Splide2.is(SLIDE) && !this.isClone) {
                diff = Math.min(diff, Splide2.length - diff);
              }
              return diff < within;
            }
          };
          function _update(active, forVisibility) {
            var type = forVisibility ? "visible" : "active";
            var className = STATUS_CLASSES[type];
            if (active) {
              addClass(slide2, className);
              Splide2.emit("" + type, Slide);
            } else {
              if (hasClass(slide2, className)) {
                removeClass(slide2, className);
                Splide2.emit(forVisibility ? "hidden" : "inactive", Slide);
              }
            }
          }
          function restoreStyles() {
            setAttribute(slide2, "style", Slide.styles);
          }
          return Slide;
        };
        ;
        var UID_NAME = "uid";
        var components_elements = function(Splide2, Components) {
          var root = Splide2.root;
          var classes = Splide2.classes;
          var Slides = [];
          if (!root.id) {
            window.splide = window.splide || {};
            var uid = window.splide[UID_NAME] || 0;
            window.splide[UID_NAME] = ++uid;
            root.id = "splide" + pad(uid);
          }
          var Elements = {
            /**
             * Called when the component is mounted.
             * Collect main elements and store them as member properties.
             */
            mount: function mount() {
              var _this = this;
              this.init();
              Splide2.on("refresh", function() {
                _this.destroy();
                _this.init();
              }).on("updated", function() {
                removeClass(root, getClasses());
                addClass(root, getClasses());
              });
            },
            /**
             * Destroy.
             */
            destroy: function destroy() {
              Slides.forEach(function(Slide) {
                Slide.destroy();
              });
              Slides = [];
              removeClass(root, getClasses());
            },
            /**
             * Initialization.
             */
            init: function init() {
              var _this2 = this;
              collect();
              addClass(root, getClasses());
              this.slides.forEach(function(slide2, index) {
                _this2.register(slide2, index, -1);
              });
            },
            /**
             * Register a slide to create a Slide object and handle its behavior.
             *
             * @param {Element} slide     - A slide element.
             * @param {number}  index     - A unique index. This can be negative.
             * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
             */
            register: function register(slide2, index, realIndex) {
              var SlideObject = elements_slide(Splide2, index, realIndex, slide2);
              SlideObject.mount();
              Slides.push(SlideObject);
            },
            /**
             * Return the Slide object designated by the index.
             * Note that "find" is not supported by IE.
             *
             * @return {Object|undefined} - A Slide object if available. Undefined if not.
             */
            getSlide: function getSlide(index) {
              return Slides.filter(function(Slide) {
                return Slide.index === index;
              })[0];
            },
            /**
             * Return all Slide objects.
             *
             * @param {boolean} includeClones - Whether to include cloned slides or not.
             *
             * @return {Object[]} - Slide objects.
             */
            getSlides: function getSlides(includeClones) {
              return includeClones ? Slides : Slides.filter(function(Slide) {
                return !Slide.isClone;
              });
            },
            /**
             * Return Slide objects belonging to the given page.
             *
             * @param {number} page - A page number.
             *
             * @return {Object[]} - An array containing Slide objects.
             */
            getSlidesByPage: function getSlidesByPage(page) {
              var idx = Components.Controller.toIndex(page);
              var options2 = Splide2.options;
              var max = options2.focus !== false ? 1 : options2.perPage;
              return Slides.filter(function(_ref) {
                var index = _ref.index;
                return idx <= index && index < idx + max;
              });
            },
            /**
             * Insert a slide to a slider.
             * Need to refresh Splide after adding a slide.
             *
             * @param {Node|string} slide    - A slide element to be added.
             * @param {number}      index    - A slide will be added at the position.
             * @param {Function}    callback - Called right after the slide is added to the DOM tree.
             */
            add: function add(slide2, index, callback) {
              if (typeof slide2 === "string") {
                slide2 = domify(slide2);
              }
              if (slide2 instanceof Element) {
                var ref = this.slides[index];
                applyStyle(slide2, {
                  display: "none"
                });
                if (ref) {
                  before(slide2, ref);
                  this.slides.splice(index, 0, slide2);
                } else {
                  append(this.list, slide2);
                  this.slides.push(slide2);
                }
                loaded(slide2, function() {
                  callback && callback(slide2);
                });
              }
            },
            /**
             * Remove a slide from a slider.
             * Need to refresh Splide after removing a slide.
             *
             * @param index - Slide index.
             */
            remove: function remove(index) {
              dom_remove(this.slides.splice(index, 1)[0]);
            },
            /**
             * Trigger the provided callback for each Slide object.
             *
             * @param {Function} callback - A callback function. The first argument will be the Slide object.
             */
            each: function each2(callback) {
              Slides.forEach(callback);
            },
            /**
             * Return slides length without clones.
             *
             * @return {number} - Slide length.
             */
            get length() {
              return this.slides.length;
            },
            /**
             * Return "SlideObjects" length including clones.
             *
             * @return {number} - Slide length including clones.
             */
            get total() {
              return Slides.length;
            }
          };
          function collect() {
            Elements.slider = child(root, classes.slider);
            Elements.track = find(root, "." + classes.track);
            Elements.list = child(Elements.track, classes.list);
            exist(Elements.track && Elements.list, "Track or list was not found.");
            Elements.slides = children(Elements.list, classes.slide);
            var arrows2 = findParts(classes.arrows);
            Elements.arrows = {
              prev: find(arrows2, "." + classes.prev),
              next: find(arrows2, "." + classes.next)
            };
            var autoplay2 = findParts(classes.autoplay);
            Elements.bar = find(findParts(classes.progress), "." + classes.bar);
            Elements.play = find(autoplay2, "." + classes.play);
            Elements.pause = find(autoplay2, "." + classes.pause);
            Elements.track.id = Elements.track.id || root.id + "-track";
            Elements.list.id = Elements.list.id || root.id + "-list";
          }
          function getClasses() {
            var rootClass = classes.root;
            var options2 = Splide2.options;
            return [rootClass + "--" + options2.type, rootClass + "--" + options2.direction, options2.drag ? rootClass + "--draggable" : "", options2.isNavigation ? rootClass + "--nav" : "", STATUS_CLASSES.active];
          }
          function findParts(className) {
            return child(root, className) || child(Elements.slider, className);
          }
          return Elements;
        };
        ;
        var floor = Math.floor;
        var controller = function(Splide2, Components) {
          var options2;
          var isLoop;
          var Controller = {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              options2 = Splide2.options;
              isLoop = Splide2.is(LOOP);
              bind();
            },
            /**
             * Make track run by the given control.
             * - "+{i}" : Increment the slide index by i.
             * - "-{i}" : Decrement the slide index by i.
             * - "{i}"  : Go to the slide whose index is i.
             * - ">"    : Go to next page.
             * - "<"    : Go to prev page.
             * - ">{i}" : Go to page i.
             *
             * @param {string|number} control  - A control pattern.
             * @param {boolean}       silently - Go to the destination without event emission.
             */
            go: function go(control, silently) {
              var destIndex = this.trim(this.parse(control));
              Components.Track.go(destIndex, this.rewind(destIndex), silently);
            },
            /**
             * Parse the given control and return the destination index for the track.
             *
             * @param {string} control - A control target pattern.
             *
             * @return {number} - A parsed target.
             */
            parse: function parse(control) {
              var index = Splide2.index;
              var matches = String(control).match(/([+\-<>]+)(\d+)?/);
              var indicator = matches ? matches[1] : "";
              var number = matches ? parseInt(matches[2]) : 0;
              switch (indicator) {
                case "+":
                  index += number || 1;
                  break;
                case "-":
                  index -= number || 1;
                  break;
                case ">":
                case "<":
                  index = parsePage(number, index, indicator === "<");
                  break;
                default:
                  index = parseInt(control);
              }
              return index;
            },
            /**
             * Compute index from the given page number.
             *
             * @param {number} page - Page number.
             *
             * @return {number} - A computed page number.
             */
            toIndex: function toIndex(page) {
              if (hasFocus()) {
                return page;
              }
              var length = Splide2.length;
              var perPage = options2.perPage;
              var index = page * perPage;
              index = index - (this.pageLength * perPage - length) * floor(index / length);
              if (length - perPage <= index && index < length) {
                index = length - perPage;
              }
              return index;
            },
            /**
             * Compute page number from the given slide index.
             *
             * @param {number} index - Slide index.
             *
             * @return {number} - A computed page number.
             */
            toPage: function toPage(index) {
              if (hasFocus()) {
                return index;
              }
              var length = Splide2.length;
              var perPage = options2.perPage;
              if (length - perPage <= index && index < length) {
                return floor((length - 1) / perPage);
              }
              return floor(index / perPage);
            },
            /**
             * Trim the given index according to the current mode.
             * Index being returned could be less than 0 or greater than the length in Loop mode.
             *
             * @param {number} index - An index being trimmed.
             *
             * @return {number} - A trimmed index.
             */
            trim: function trim(index) {
              if (!isLoop) {
                index = options2.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
              }
              return index;
            },
            /**
             * Rewind the given index if it's out of range.
             *
             * @param {number} index - An index.
             *
             * @return {number} - A rewound index.
             */
            rewind: function rewind(index) {
              var edge = this.edgeIndex;
              if (isLoop) {
                while (index > edge) {
                  index -= edge + 1;
                }
                while (index < 0) {
                  index += edge + 1;
                }
              } else {
                if (index > edge) {
                  index = 0;
                } else if (index < 0) {
                  index = edge;
                }
              }
              return index;
            },
            /**
             * Check if the direction is "rtl" or not.
             *
             * @return {boolean} - True if "rtl" or false if not.
             */
            isRtl: function isRtl() {
              return options2.direction === RTL;
            },
            /**
             * Return the page length.
             *
             * @return {number} - Max page number.
             */
            get pageLength() {
              var length = Splide2.length;
              return hasFocus() ? length : Math.ceil(length / options2.perPage);
            },
            /**
             * Return the edge index.
             *
             * @return {number} - Edge index.
             */
            get edgeIndex() {
              var length = Splide2.length;
              if (!length) {
                return 0;
              }
              if (hasFocus() || options2.isNavigation || isLoop) {
                return length - 1;
              }
              return length - options2.perPage;
            },
            /**
             * Return the index of the previous slide.
             *
             * @return {number} - The index of the previous slide if available. -1 otherwise.
             */
            get prevIndex() {
              var prev = Splide2.index - 1;
              if (isLoop || options2.rewind) {
                prev = this.rewind(prev);
              }
              return prev > -1 ? prev : -1;
            },
            /**
             * Return the index of the next slide.
             *
             * @return {number} - The index of the next slide if available. -1 otherwise.
             */
            get nextIndex() {
              var next = Splide2.index + 1;
              if (isLoop || options2.rewind) {
                next = this.rewind(next);
              }
              return Splide2.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
            }
          };
          function bind() {
            Splide2.on("move", function(newIndex) {
              Splide2.index = newIndex;
            }).on("updated refresh", function(newOptions) {
              options2 = newOptions || options2;
              Splide2.index = between(Splide2.index, 0, Controller.edgeIndex);
            });
          }
          function hasFocus() {
            return options2.focus !== false;
          }
          function parsePage(number, index, prev) {
            if (number > -1) {
              return Controller.toIndex(number);
            }
            var perMove = options2.perMove;
            var sign = prev ? -1 : 1;
            if (perMove) {
              return index + perMove * sign;
            }
            return Controller.toIndex(Controller.toPage(index) + sign);
          }
          return Controller;
        };
        ;
        var abs = Math.abs;
        var track = function(Splide2, Components) {
          var Layout;
          var Elements;
          var list;
          var isVertical = Splide2.options.direction === TTB;
          var isFade = Splide2.is(FADE);
          var isRTL = Splide2.options.direction === RTL;
          var isLoopPending = false;
          var sign = isRTL ? 1 : -1;
          var Track = {
            /**
             * Make public the sign defined locally.
             *
             * @type {number}
             */
            sign,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              Elements = Components.Elements;
              Layout = Components.Layout;
              list = Elements.list;
            },
            /**
             * Called after the component is mounted.
             * The resize event must be registered after the Layout's one is done.
             */
            mounted: function mounted() {
              var _this = this;
              if (!isFade) {
                this.jump(0);
                Splide2.on("mounted resize updated", function() {
                  _this.jump(Splide2.index);
                });
              }
            },
            /**
             * Go to the given destination index.
             * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
             *
             * @param {number}  destIndex - A destination index.
             *                              This can be negative or greater than slides length for reaching clones.
             * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
             * @param {boolean} silently  - If true, suppress emitting events.
             */
            go: function go(destIndex, newIndex, silently) {
              var newPosition = getTrimmedPosition(destIndex);
              var prevIndex = Splide2.index;
              if (Splide2.State.is(MOVING) && isLoopPending) {
                return;
              }
              isLoopPending = destIndex !== newIndex;
              if (!silently) {
                Splide2.emit("move", newIndex, prevIndex, destIndex);
              }
              if (Math.abs(newPosition - this.position) >= 1 || isFade) {
                Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function() {
                  onTransitionEnd(destIndex, newIndex, prevIndex, silently);
                });
              } else {
                if (destIndex !== prevIndex && Splide2.options.trimSpace === "move") {
                  Components.Controller.go(destIndex + destIndex - prevIndex, silently);
                } else {
                  onTransitionEnd(destIndex, newIndex, prevIndex, silently);
                }
              }
            },
            /**
             * Move the track to the specified index.
             *
             * @param {number} index - A destination index where the track jumps.
             */
            jump: function jump(index) {
              this.translate(getTrimmedPosition(index));
            },
            /**
             * Set the list position by CSS translate property.
             *
             * @param {number} position - A new position value.
             */
            translate: function translate(position) {
              applyStyle(list, {
                transform: "translate" + (isVertical ? "Y" : "X") + "(" + position + "px)"
              });
            },
            /**
             * Cancel the transition and set the list position.
             * Also, loop the slider if necessary.
             */
            cancel: function cancel() {
              if (Splide2.is(LOOP)) {
                this.shift();
              } else {
                this.translate(this.position);
              }
              applyStyle(list, {
                transition: ""
              });
            },
            /**
             * Shift the slider if it exceeds borders on the edge.
             */
            shift: function shift() {
              var position = abs(this.position);
              var left = abs(this.toPosition(0));
              var right = abs(this.toPosition(Splide2.length));
              var innerSize = right - left;
              if (position < left) {
                position += innerSize;
              } else if (position > right) {
                position -= innerSize;
              }
              this.translate(sign * position);
            },
            /**
             * Trim redundant spaces on the left or right edge if necessary.
             *
             * @param {number} position - Position value to be trimmed.
             *
             * @return {number} - Trimmed position.
             */
            trim: function trim(position) {
              if (!Splide2.options.trimSpace || Splide2.is(LOOP)) {
                return position;
              }
              var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
              return between(position, edge, 0);
            },
            /**
             * Calculate the closest slide index from the given position.
             *
             * @param {number} position - A position converted to an slide index.
             *
             * @return {number} - The closest slide index.
             */
            toIndex: function toIndex(position) {
              var _this2 = this;
              var index = 0;
              var minDistance = Infinity;
              Elements.getSlides(true).forEach(function(Slide) {
                var slideIndex = Slide.index;
                var distance = abs(_this2.toPosition(slideIndex) - position);
                if (distance < minDistance) {
                  minDistance = distance;
                  index = slideIndex;
                }
              });
              return index;
            },
            /**
             * Return coordinates object by the given position.
             *
             * @param {number} position - A position value.
             *
             * @return {Object} - A coordinates object.
             */
            toCoord: function toCoord(position) {
              return {
                x: isVertical ? 0 : position,
                y: isVertical ? position : 0
              };
            },
            /**
             * Calculate the track position by a slide index.
             *
             * @param {number} index - Slide index.
             *
             * @return {Object} - Calculated position.
             */
            toPosition: function toPosition(index) {
              var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
              return sign * (position + this.offset(index));
            },
            /**
             * Return the current offset value, considering direction.
             *
             * @return {number} - Offset amount.
             */
            offset: function offset(index) {
              var focus = Splide2.options.focus;
              var slideSize = Layout.slideSize(index);
              if (focus === "center") {
                return -(Layout.size - slideSize) / 2;
              }
              return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
            },
            /**
             * Return the current position.
             * This returns the correct position even while transitioning by CSS.
             *
             * @return {number} - Current position.
             */
            get position() {
              var prop = isVertical ? "top" : isRTL ? "right" : "left";
              return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
            }
          };
          function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
            applyStyle(list, {
              transition: ""
            });
            isLoopPending = false;
            if (!isFade) {
              Track.jump(newIndex);
            }
            if (!silently) {
              Splide2.emit("moved", newIndex, prevIndex, destIndex);
            }
          }
          function getTrimmedPosition(index) {
            return Track.trim(Track.toPosition(index));
          }
          return Track;
        };
        ;
        var clones = function(Splide2, Components) {
          var clones2 = [];
          var cloneCount = 0;
          var Elements = Components.Elements;
          var Clones = {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              var _this = this;
              if (Splide2.is(LOOP)) {
                init();
                Splide2.on("refresh:before", function() {
                  _this.destroy();
                }).on("refresh", init).on("resize", function() {
                  if (cloneCount !== getCloneCount()) {
                    _this.destroy();
                    Splide2.refresh();
                  }
                });
              }
            },
            /**
             * Destroy.
             */
            destroy: function destroy() {
              dom_remove(clones2);
              clones2 = [];
            },
            /**
             * Return all clones.
             *
             * @return {Element[]} - Cloned elements.
             */
            get clones() {
              return clones2;
            },
            /**
             * Return clone length.
             *
             * @return {number} - A length of clones.
             */
            get length() {
              return clones2.length;
            }
          };
          function init() {
            Clones.destroy();
            cloneCount = getCloneCount();
            generateClones(cloneCount);
          }
          function generateClones(count) {
            var length = Elements.length, register = Elements.register;
            if (length) {
              var slides = Elements.slides;
              while (slides.length < count) {
                slides = slides.concat(slides);
              }
              slides.slice(0, count).forEach(function(elm, index) {
                var clone = cloneDeeply(elm);
                append(Elements.list, clone);
                clones2.push(clone);
                register(clone, index + length, index % length);
              });
              slides.slice(-count).forEach(function(elm, index) {
                var clone = cloneDeeply(elm);
                before(clone, slides[0]);
                clones2.push(clone);
                register(clone, index - count, (length + index - count % length) % length);
              });
            }
          }
          function getCloneCount() {
            var options2 = Splide2.options;
            if (options2.clones) {
              return options2.clones;
            }
            var baseCount = options2.autoWidth || options2.autoHeight ? Elements.length : options2.perPage;
            var dimension = options2.direction === TTB ? "Height" : "Width";
            var fixedSize = toPixel(Splide2.root, options2["fixed" + dimension]);
            if (fixedSize) {
              baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
            }
            return baseCount * (options2.drag ? options2.flickMaxPages + 1 : 1);
          }
          function cloneDeeply(elm) {
            var clone = elm.cloneNode(true);
            addClass(clone, Splide2.classes.clone);
            removeAttribute(clone, "id");
            return clone;
          }
          return Clones;
        };
        ;
        var horizontal = function(Splide2, Components) {
          var Elements = Components.Elements;
          var root = Splide2.root;
          var track2;
          var options2 = Splide2.options;
          return {
            /**
             * Margin property name.
             *
             * @type {string}
             */
            margin: "margin" + (options2.direction === RTL ? "Left" : "Right"),
            /**
             * Always 0 because the height will be determined by inner contents.
             *
             * @type {number}
             */
            height: 0,
            /**
             * Initialization.
             */
            init: function init() {
              this.resize();
            },
            /**
             * Resize gap and padding.
             * This must be called on init.
             */
            resize: function resize() {
              options2 = Splide2.options;
              track2 = Elements.track;
              this.gap = toPixel(root, options2.gap);
              var padding = options2.padding;
              var left = toPixel(root, padding.left || padding);
              var right = toPixel(root, padding.right || padding);
              this.padding = {
                left,
                right
              };
              applyStyle(track2, {
                paddingLeft: unit(left),
                paddingRight: unit(right)
              });
            },
            /**
             * Return total width from the left of the list to the right of the slide specified by the provided index.
             *
             * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
             *
             * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
             */
            totalWidth: function totalWidth(index) {
              if (index === void 0) {
                index = Splide2.length - 1;
              }
              var Slide = Elements.getSlide(index);
              var width = 0;
              if (Slide) {
                var slideRect = getRect(Slide.slide);
                var listRect = getRect(Elements.list);
                if (options2.direction === RTL) {
                  width = listRect.right - slideRect.left;
                } else {
                  width = slideRect.right - listRect.left;
                }
                width += this.gap;
              }
              return width;
            },
            /**
             * Return the slide width in px.
             *
             * @param {number} index - Slide index.
             *
             * @return {number} - The slide width.
             */
            slideWidth: function slideWidth(index) {
              if (options2.autoWidth) {
                var Slide = Elements.getSlide(index);
                return Slide ? Slide.slide.offsetWidth : 0;
              }
              var width = options2.fixedWidth || (this.width + this.gap) / options2.perPage - this.gap;
              return toPixel(root, width);
            },
            /**
             * Return the slide height in px.
             *
             * @return {number} - The slide height.
             */
            slideHeight: function slideHeight() {
              var height = options2.height || options2.fixedHeight || this.width * options2.heightRatio;
              return toPixel(root, height);
            },
            /**
             * Return slider width without padding.
             *
             * @return {number} - Current slider width.
             */
            get width() {
              return track2.clientWidth - this.padding.left - this.padding.right;
            }
          };
        };
        ;
        var vertical = function(Splide2, Components) {
          var Elements = Components.Elements;
          var root = Splide2.root;
          var track2;
          var options2;
          return {
            /**
             * Margin property name.
             *
             * @type {string}
             */
            margin: "marginBottom",
            /**
             * Initialization.
             */
            init: function init() {
              this.resize();
            },
            /**
             * Resize gap and padding.
             * This must be called on init.
             */
            resize: function resize() {
              options2 = Splide2.options;
              track2 = Elements.track;
              this.gap = toPixel(root, options2.gap);
              var padding = options2.padding;
              var top = toPixel(root, padding.top || padding);
              var bottom = toPixel(root, padding.bottom || padding);
              this.padding = {
                top,
                bottom
              };
              applyStyle(track2, {
                paddingTop: unit(top),
                paddingBottom: unit(bottom)
              });
            },
            /**
             * Return total height from the top of the list to the bottom of the slide specified by the provided index.
             *
             * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
             *
             * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
             */
            totalHeight: function totalHeight(index) {
              if (index === void 0) {
                index = Splide2.length - 1;
              }
              var Slide = Elements.getSlide(index);
              if (Slide) {
                return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
              }
              return 0;
            },
            /**
             * Return the slide width in px.
             *
             * @return {number} - The slide width.
             */
            slideWidth: function slideWidth() {
              return toPixel(root, options2.fixedWidth || this.width);
            },
            /**
             * Return the slide height in px.
             *
             * @param {number} index - Slide index.
             *
             * @return {number} - The slide height.
             */
            slideHeight: function slideHeight(index) {
              if (options2.autoHeight) {
                var Slide = Elements.getSlide(index);
                return Slide ? Slide.slide.offsetHeight : 0;
              }
              var height = options2.fixedHeight || (this.height + this.gap) / options2.perPage - this.gap;
              return toPixel(root, height);
            },
            /**
             * Return slider width without padding.
             *
             * @return {number} - Current slider width.
             */
            get width() {
              return track2.clientWidth;
            },
            /**
             * Return slide height without padding.
             *
             * @return {number} - Slider height.
             */
            get height() {
              var height = options2.height || this.width * options2.heightRatio;
              exist(height, '"height" or "heightRatio" is missing.');
              return toPixel(root, height) - this.padding.top - this.padding.bottom;
            }
          };
        };
        ;
        function throttle(func, wait) {
          var timeout;
          return function() {
            if (!timeout) {
              timeout = setTimeout(function() {
                func();
                timeout = null;
              }, wait);
            }
          };
        }
        function createInterval(callback, interval, progress) {
          var _window = window, requestAnimationFrame = _window.requestAnimationFrame;
          var start, elapse, rate, _pause = true;
          var step = function step2(timestamp) {
            if (!_pause) {
              if (!start) {
                start = timestamp;
                if (rate && rate < 1) {
                  start -= rate * interval;
                }
              }
              elapse = timestamp - start;
              rate = elapse / interval;
              if (elapse >= interval) {
                start = 0;
                rate = 1;
                callback();
              }
              if (progress) {
                progress(rate);
              }
              requestAnimationFrame(step2);
            }
          };
          return {
            pause: function pause() {
              _pause = true;
              start = 0;
            },
            play: function play(reset) {
              start = 0;
              if (reset) {
                rate = 0;
              }
              if (_pause) {
                _pause = false;
                requestAnimationFrame(step);
              }
            }
          };
        }
        ;
        var layout = function(Splide2, Components) {
          var Elements = Components.Elements;
          var isVertical = Splide2.options.direction === TTB;
          var Layout = object_assign({
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              bind();
              init();
              this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
              this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
            },
            /**
             * Destroy the component.
             */
            destroy: function destroy() {
              removeAttribute([Elements.list, Elements.track], "style");
            },
            /**
             * Return the slider height on the vertical mode or width on the horizontal mode.
             *
             * @return {number}
             */
            get size() {
              return isVertical ? this.height : this.width;
            }
          }, isVertical ? vertical(Splide2, Components) : horizontal(Splide2, Components));
          function init() {
            Layout.init();
            applyStyle(Splide2.root, {
              maxWidth: unit(Splide2.options.width)
            });
            Elements.each(function(Slide) {
              Slide.slide.style[Layout.margin] = unit(Layout.gap);
            });
            resize();
          }
          function bind() {
            Splide2.on("resize load", throttle(function() {
              Splide2.emit("resize");
            }, Splide2.options.throttle), window).on("resize", resize).on("updated refresh", init);
          }
          function resize() {
            var options2 = Splide2.options;
            Layout.resize();
            applyStyle(Elements.track, {
              height: unit(Layout.height)
            });
            var slideHeight = options2.autoHeight ? null : unit(Layout.slideHeight());
            Elements.each(function(Slide) {
              applyStyle(Slide.container, {
                height: slideHeight
              });
              applyStyle(Slide.slide, {
                width: options2.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
                height: Slide.container ? null : slideHeight
              });
            });
            Splide2.emit("resized");
          }
          return Layout;
        };
        ;
        var drag_abs = Math.abs;
        var MIN_VELOCITY = 0.1;
        var FRICTION_REDUCER = 7;
        var drag = function(Splide2, Components) {
          var Track = Components.Track;
          var Controller = Components.Controller;
          var startCoord;
          var startInfo;
          var currentInfo;
          var isDragging;
          var isVertical = Splide2.options.direction === TTB;
          var axis = isVertical ? "y" : "x";
          var Drag = {
            /**
             * Whether dragging is disabled or not.
             *
             * @type {boolean}
             */
            disabled: false,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              var _this = this;
              var Elements = Components.Elements;
              var track2 = Elements.track;
              Splide2.on("touchstart mousedown", start, track2).on("touchmove mousemove", move, track2, {
                passive: false
              }).on("touchend touchcancel mouseleave mouseup dragend", end, track2).on("mounted refresh", function() {
                each(Elements.list.querySelectorAll("img, a"), function(elm) {
                  Splide2.off("dragstart", elm).on("dragstart", function(e) {
                    e.preventDefault();
                  }, elm, {
                    passive: false
                  });
                });
              }).on("mounted updated", function() {
                _this.disabled = !Splide2.options.drag;
              });
            }
          };
          function start(e) {
            if (!Drag.disabled && !isDragging) {
              init(e);
            }
          }
          function init(e) {
            startCoord = Track.toCoord(Track.position);
            startInfo = analyze(e, {});
            currentInfo = startInfo;
          }
          function move(e) {
            if (startInfo) {
              currentInfo = analyze(e, startInfo);
              if (isDragging) {
                if (e.cancelable) {
                  e.preventDefault();
                }
                if (!Splide2.is(FADE)) {
                  var position = startCoord[axis] + currentInfo.offset[axis];
                  Track.translate(resist(position));
                }
              } else {
                if (shouldMove(currentInfo)) {
                  Splide2.emit("drag", startInfo);
                  isDragging = true;
                  Track.cancel();
                  init(e);
                }
              }
            }
          }
          function shouldMove(_ref) {
            var offset = _ref.offset;
            if (Splide2.State.is(MOVING) && Splide2.options.waitForTransition) {
              return false;
            }
            var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;
            if (isVertical) {
              angle = 90 - angle;
            }
            return angle < Splide2.options.dragAngleThreshold;
          }
          function resist(position) {
            if (Splide2.is(SLIDE)) {
              var sign = Track.sign;
              var _start = sign * Track.trim(Track.toPosition(0));
              var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));
              position *= sign;
              if (position < _start) {
                position = _start - FRICTION_REDUCER * Math.log(_start - position);
              } else if (position > _end) {
                position = _end + FRICTION_REDUCER * Math.log(position - _end);
              }
              position *= sign;
            }
            return position;
          }
          function end() {
            startInfo = null;
            if (isDragging) {
              Splide2.emit("dragged", currentInfo);
              go(currentInfo);
              isDragging = false;
            }
          }
          function go(info) {
            var velocity = info.velocity[axis];
            var absV = drag_abs(velocity);
            if (absV > 0) {
              var options2 = Splide2.options;
              var index = Splide2.index;
              var sign = velocity < 0 ? -1 : 1;
              var destIndex = index;
              if (!Splide2.is(FADE)) {
                var destination = Track.position;
                if (absV > options2.flickVelocityThreshold && drag_abs(info.offset[axis]) < options2.swipeDistanceThreshold) {
                  destination += sign * Math.min(absV * options2.flickPower, Components.Layout.size * (options2.flickMaxPages || 1));
                }
                destIndex = Track.toIndex(destination);
              }
              if (destIndex === index && absV > MIN_VELOCITY) {
                destIndex = index + sign * Track.sign;
              }
              if (Splide2.is(SLIDE)) {
                destIndex = between(destIndex, 0, Controller.edgeIndex);
              }
              Controller.go(destIndex, options2.isNavigation);
            }
          }
          function analyze(e, startInfo2) {
            var timeStamp = e.timeStamp, touches = e.touches;
            var _ref2 = touches ? touches[0] : e, clientX = _ref2.clientX, clientY = _ref2.clientY;
            var _ref3 = startInfo2.to || {}, _ref3$x = _ref3.x, fromX = _ref3$x === void 0 ? clientX : _ref3$x, _ref3$y = _ref3.y, fromY = _ref3$y === void 0 ? clientY : _ref3$y;
            var startTime = startInfo2.time || 0;
            var offset = {
              x: clientX - fromX,
              y: clientY - fromY
            };
            var duration = timeStamp - startTime;
            var velocity = {
              x: offset.x / duration,
              y: offset.y / duration
            };
            return {
              to: {
                x: clientX,
                y: clientY
              },
              offset,
              time: timeStamp,
              velocity
            };
          }
          return Drag;
        };
        ;
        var click = function(Splide2, Components) {
          var disabled = false;
          var Click = {
            /**
             * Mount only when the drag is activated and the slide type is not "fade".
             *
             * @type {boolean}
             */
            required: Splide2.options.drag,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              Splide2.on("click", onClick, Components.Elements.track, {
                capture: true
              }).on("drag", function() {
                disabled = true;
              }).on("dragged", function() {
                setTimeout(function() {
                  disabled = false;
                });
              });
            }
          };
          function onClick(e) {
            if (disabled) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          }
          return Click;
        };
        ;
        var PAUSE_FLAGS = {
          HOVER: 1,
          FOCUS: 2,
          MANUAL: 3
        };
        var autoplay = function(Splide2, Components, name) {
          var flags = [];
          var interval;
          var Elements = Components.Elements;
          var Autoplay = {
            /**
             * Required only when the autoplay option is true.
             *
             * @type {boolean}
             */
            required: Splide2.options.autoplay,
            /**
             * Called when the component is mounted.
             * Note that autoplay starts only if there are slides over perPage number.
             */
            mount: function mount() {
              var options2 = Splide2.options;
              if (Elements.slides.length > options2.perPage) {
                interval = createInterval(function() {
                  Splide2.go(">");
                }, options2.interval, function(rate) {
                  Splide2.emit(name + ":playing", rate);
                  if (Elements.bar) {
                    applyStyle(Elements.bar, {
                      width: rate * 100 + "%"
                    });
                  }
                });
                bind();
                this.play();
              }
            },
            /**
             * Start autoplay.
             *
             * @param {number} flag - A pause flag to be removed.
             */
            play: function play(flag) {
              if (flag === void 0) {
                flag = 0;
              }
              flags = flags.filter(function(f) {
                return f !== flag;
              });
              if (!flags.length) {
                Splide2.emit(name + ":play");
                interval.play(Splide2.options.resetProgress);
              }
            },
            /**
             * Pause autoplay.
             * Note that Array.includes is not supported by IE.
             *
             * @param {number} flag - A pause flag to be added.
             */
            pause: function pause(flag) {
              if (flag === void 0) {
                flag = 0;
              }
              interval.pause();
              if (flags.indexOf(flag) === -1) {
                flags.push(flag);
              }
              if (flags.length === 1) {
                Splide2.emit(name + ":pause");
              }
            }
          };
          function bind() {
            var options2 = Splide2.options;
            var sibling = Splide2.sibling;
            var elms = [Splide2.root, sibling ? sibling.root : null];
            if (options2.pauseOnHover) {
              switchOn(elms, "mouseleave", PAUSE_FLAGS.HOVER, true);
              switchOn(elms, "mouseenter", PAUSE_FLAGS.HOVER, false);
            }
            if (options2.pauseOnFocus) {
              switchOn(elms, "focusout", PAUSE_FLAGS.FOCUS, true);
              switchOn(elms, "focusin", PAUSE_FLAGS.FOCUS, false);
            }
            if (Elements.play) {
              Splide2.on("click", function() {
                Autoplay.play(PAUSE_FLAGS.FOCUS);
                Autoplay.play(PAUSE_FLAGS.MANUAL);
              }, Elements.play);
            }
            if (Elements.pause) {
              switchOn([Elements.pause], "click", PAUSE_FLAGS.MANUAL, false);
            }
            Splide2.on("move refresh", function() {
              Autoplay.play();
            }).on("destroy", function() {
              Autoplay.pause();
            });
          }
          function switchOn(elms, event, flag, play) {
            elms.forEach(function(elm) {
              Splide2.on(event, function() {
                Autoplay[play ? "play" : "pause"](flag);
              }, elm);
            });
          }
          return Autoplay;
        };
        ;
        var cover = function(Splide2, Components) {
          var options2 = Splide2.options;
          var Cover = {
            /**
             * Required only when "cover" option is true.
             *
             * @type {boolean}
             */
            required: options2.cover,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              Splide2.on("lazyload:loaded", function(img) {
                cover2(img, false);
              });
              Splide2.on("mounted updated refresh", function() {
                return apply(false);
              });
            },
            /**
             * Destroy.
             */
            destroy: function destroy() {
              apply(true);
            }
          };
          function apply(uncover) {
            Components.Elements.each(function(Slide) {
              var img = child(Slide.slide, "IMG") || child(Slide.container, "IMG");
              if (img && img.src) {
                cover2(img, uncover);
              }
            });
          }
          function cover2(img, uncover) {
            applyStyle(img.parentElement, {
              background: uncover ? "" : 'center/cover no-repeat url("' + img.src + '")'
            });
            applyStyle(img, {
              display: uncover ? "" : "none"
            });
          }
          return Cover;
        };
        ;
        var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
        var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
        var SIZE = 40;
        ;
        var arrows = function(Splide2, Components, name) {
          var prev;
          var next;
          var classes = Splide2.classes;
          var root = Splide2.root;
          var created;
          var Elements = Components.Elements;
          var Arrows = {
            /**
             * Required when the arrows option is true.
             *
             * @type {boolean}
             */
            required: Splide2.options.arrows,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              prev = Elements.arrows.prev;
              next = Elements.arrows.next;
              if ((!prev || !next) && Splide2.options.arrows) {
                prev = createArrow(true);
                next = createArrow(false);
                created = true;
                appendArrows();
              }
              if (prev && next) {
                bind();
              }
              this.arrows = {
                prev,
                next
              };
            },
            /**
             * Called after all components are mounted.
             */
            mounted: function mounted() {
              Splide2.emit(name + ":mounted", prev, next);
            },
            /**
             * Destroy.
             */
            destroy: function destroy() {
              removeAttribute([prev, next], "disabled");
              if (created) {
                dom_remove(prev.parentElement);
              }
            }
          };
          function bind() {
            Splide2.on("click", function() {
              Splide2.go("<");
            }, prev).on("click", function() {
              Splide2.go(">");
            }, next).on("mounted move updated refresh", updateDisabled);
          }
          function updateDisabled() {
            var _Components$Controlle = Components.Controller, prevIndex = _Components$Controlle.prevIndex, nextIndex = _Components$Controlle.nextIndex;
            var isEnough = Splide2.length > Splide2.options.perPage || Splide2.is(LOOP);
            prev.disabled = prevIndex < 0 || !isEnough;
            next.disabled = nextIndex < 0 || !isEnough;
            Splide2.emit(name + ":updated", prev, next, prevIndex, nextIndex);
          }
          function appendArrows() {
            var wrapper = create("div", {
              "class": classes.arrows
            });
            append(wrapper, prev);
            append(wrapper, next);
            var slider = Elements.slider;
            var parent = Splide2.options.arrows === "slider" && slider ? slider : root;
            before(wrapper, parent.firstElementChild);
          }
          function createArrow(prev2) {
            var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button">' + ('<svg xmlns="' + XML_NAME_SPACE + '"	viewBox="0 0 ' + SIZE + " " + SIZE + '"	width="' + SIZE + '"	height="' + SIZE + '">') + ('<path d="' + (Splide2.options.arrowPath || PATH) + '" />');
            return domify(arrow);
          }
          return Arrows;
        };
        ;
        var ATTRIBUTES_UPDATE_EVENT = "move.page";
        var UPDATE_EVENT = "updated.page refresh.page";
        var pagination = function(Splide2, Components, name) {
          var data = {};
          var Elements = Components.Elements;
          var Pagination = {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              var pagination2 = Splide2.options.pagination;
              if (pagination2) {
                data = createPagination();
                var slider = Elements.slider;
                var parent = pagination2 === "slider" && slider ? slider : Splide2.root;
                append(parent, data.list);
                Splide2.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
              }
              Splide2.off(UPDATE_EVENT).on(UPDATE_EVENT, function() {
                Pagination.destroy();
                if (Splide2.options.pagination) {
                  Pagination.mount();
                  Pagination.mounted();
                }
              });
            },
            /**
             * Called after all components are mounted.
             */
            mounted: function mounted() {
              if (Splide2.options.pagination) {
                var index = Splide2.index;
                Splide2.emit(name + ":mounted", data, this.getItem(index));
                updateAttributes(index, -1);
              }
            },
            /**
             * Destroy the pagination.
             * Be aware that node.remove() is not supported by IE.
             */
            destroy: function destroy() {
              dom_remove(data.list);
              if (data.items) {
                data.items.forEach(function(item) {
                  Splide2.off("click", item.button);
                });
              }
              Splide2.off(ATTRIBUTES_UPDATE_EVENT);
              data = {};
            },
            /**
             * Return an item by index.
             *
             * @param {number} index - A slide index.
             *
             * @return {Object|undefined} - An item object on success or undefined on failure.
             */
            getItem: function getItem(index) {
              return data.items[Components.Controller.toPage(index)];
            },
            /**
             * Return object containing pagination data.
             *
             * @return {Object} - Pagination data including list and items.
             */
            get data() {
              return data;
            }
          };
          function updateAttributes(index, prevIndex) {
            var prev = Pagination.getItem(prevIndex);
            var curr = Pagination.getItem(index);
            var active = STATUS_CLASSES.active;
            if (prev) {
              removeClass(prev.button, active);
            }
            if (curr) {
              addClass(curr.button, active);
            }
            Splide2.emit(name + ":updated", data, prev, curr);
          }
          function createPagination() {
            var options2 = Splide2.options;
            var classes = Splide2.classes;
            var list = create("ul", {
              "class": classes.pagination
            });
            var items = Elements.getSlides(false).filter(function(Slide) {
              return options2.focus !== false || Slide.index % options2.perPage === 0;
            }).map(function(Slide, page) {
              var li = create("li", {});
              var button = create("button", {
                "class": classes.page,
                type: "button"
              });
              append(li, button);
              append(list, li);
              Splide2.on("click", function() {
                Splide2.go(">" + page);
              }, button);
              return {
                li,
                button,
                page,
                Slides: Elements.getSlidesByPage(page)
              };
            });
            return {
              list,
              items
            };
          }
          return Pagination;
        };
        ;
        var SRC_DATA_NAME = "data-splide-lazy";
        var SRCSET_DATA_NAME = "data-splide-lazy-srcset";
        var lazyload = function(Splide2, Components, name) {
          var nextIndex;
          var images;
          var options2 = Splide2.options;
          var isSequential = options2.lazyLoad === "sequential";
          var Lazyload = {
            /**
             * Mount only when the lazyload option is provided.
             *
             * @type {boolean}
             */
            required: options2.lazyLoad,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              Splide2.on("mounted refresh", function() {
                init();
                Components.Elements.each(function(Slide) {
                  each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function(img) {
                    if (!img.src && !img.srcset) {
                      images.push({
                        img,
                        Slide
                      });
                      applyStyle(img, {
                        display: "none"
                      });
                    }
                  });
                });
                if (isSequential) {
                  loadNext();
                }
              });
              if (!isSequential) {
                Splide2.on("mounted refresh moved." + name, check);
              }
            },
            /**
             * Destroy.
             */
            destroy: init
          };
          function init() {
            images = [];
            nextIndex = 0;
          }
          function check(index) {
            index = isNaN(index) ? Splide2.index : index;
            images = images.filter(function(image) {
              if (image.Slide.isWithin(index, options2.perPage * (options2.preloadPages + 1))) {
                load(image.img, image.Slide);
                return false;
              }
              return true;
            });
            if (!images[0]) {
              Splide2.off("moved." + name);
            }
          }
          function load(img, Slide) {
            addClass(Slide.slide, STATUS_CLASSES.loading);
            var spinner = create("span", {
              "class": Splide2.classes.spinner
            });
            append(img.parentElement, spinner);
            img.onload = function() {
              loaded2(img, spinner, Slide, false);
            };
            img.onerror = function() {
              loaded2(img, spinner, Slide, true);
            };
            setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_NAME) || "");
            setAttribute(img, "src", getAttribute(img, SRC_DATA_NAME) || "");
          }
          function loadNext() {
            if (nextIndex < images.length) {
              var image = images[nextIndex];
              load(image.img, image.Slide);
            }
            nextIndex++;
          }
          function loaded2(img, spinner, Slide, error2) {
            removeClass(Slide.slide, STATUS_CLASSES.loading);
            if (!error2) {
              dom_remove(spinner);
              applyStyle(img, {
                display: ""
              });
              Splide2.emit(name + ":loaded", img).emit("resize");
            }
            if (isSequential) {
              loadNext();
            }
          }
          return Lazyload;
        };
        ;
        var ARIA_CURRENRT = "aria-current";
        var ARIA_CONTROLS = "aria-controls";
        var ARIA_LABEL = "aria-label";
        var ARIA_LABELLEDBY = "aria-labelledby";
        var ARIA_HIDDEN = "aria-hidden";
        var TAB_INDEX = "tabindex";
        ;
        var KEY_MAP = {
          ltr: {
            ArrowLeft: "<",
            ArrowRight: ">",
            // For IE.
            Left: "<",
            Right: ">"
          },
          rtl: {
            ArrowLeft: ">",
            ArrowRight: "<",
            // For IE.
            Left: ">",
            Right: "<"
          },
          ttb: {
            ArrowUp: "<",
            ArrowDown: ">",
            // For IE.
            Up: "<",
            Down: ">"
          }
        };
        var keyboard = function(Splide2) {
          var target2;
          return {
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              Splide2.on("mounted updated", function() {
                var options2 = Splide2.options;
                var root = Splide2.root;
                var map = KEY_MAP[options2.direction];
                var keyboard2 = options2.keyboard;
                if (target2) {
                  Splide2.off("keydown", target2);
                  removeAttribute(root, TAB_INDEX);
                }
                if (keyboard2) {
                  if (keyboard2 === "focused") {
                    target2 = root;
                    setAttribute(root, TAB_INDEX, 0);
                  } else {
                    target2 = document;
                  }
                  Splide2.on("keydown", function(e) {
                    if (map[e.key]) {
                      Splide2.go(map[e.key]);
                    }
                  }, target2);
                }
              });
            }
          };
        };
        ;
        var a11y = function(Splide2, Components) {
          var i18n = Splide2.i18n;
          var Elements = Components.Elements;
          var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, "role"];
          var A11y = {
            /**
             * Required only when the accessibility option is true.
             *
             * @type {boolean}
             */
            required: Splide2.options.accessibility,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              Splide2.on("visible", function(Slide) {
                updateSlide(Slide.slide, true);
              }).on("hidden", function(Slide) {
                updateSlide(Slide.slide, false);
              }).on("arrows:mounted", initArrows).on("arrows:updated", updateArrows).on("pagination:mounted", initPagination).on("pagination:updated", updatePagination).on("refresh", function() {
                removeAttribute(Components.Clones.clones, allAttributes);
              });
              if (Splide2.options.isNavigation) {
                Splide2.on("navigation:mounted navigation:updated", initNavigation).on("active", function(Slide) {
                  updateNavigation(Slide, true);
                }).on("inactive", function(Slide) {
                  updateNavigation(Slide, false);
                });
              }
              initAutoplay();
            },
            /**
             * Destroy.
             */
            destroy: function destroy() {
              var Arrows = Components.Arrows;
              var arrows2 = Arrows ? Arrows.arrows : {};
              removeAttribute(Elements.slides.concat([arrows2.prev, arrows2.next, Elements.play, Elements.pause]), allAttributes);
            }
          };
          function updateSlide(slide2, visible) {
            setAttribute(slide2, ARIA_HIDDEN, !visible);
            if (Splide2.options.slideFocus) {
              setAttribute(slide2, TAB_INDEX, visible ? 0 : -1);
            }
          }
          function initArrows(prev, next) {
            var controls = Elements.track.id;
            setAttribute(prev, ARIA_CONTROLS, controls);
            setAttribute(next, ARIA_CONTROLS, controls);
          }
          function updateArrows(prev, next, prevIndex, nextIndex) {
            var index = Splide2.index;
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            setAttribute(prev, ARIA_LABEL, prevLabel);
            setAttribute(next, ARIA_LABEL, nextLabel);
          }
          function initPagination(data, activeItem) {
            if (activeItem) {
              setAttribute(activeItem.button, ARIA_CURRENRT, true);
            }
            data.items.forEach(function(item) {
              var options2 = Splide2.options;
              var text = options2.focus === false && options2.perPage > 1 ? i18n.pageX : i18n.slideX;
              var label = sprintf(text, item.page + 1);
              var button = item.button;
              var controls = item.Slides.map(function(Slide) {
                return Slide.slide.id;
              });
              setAttribute(button, ARIA_CONTROLS, controls.join(" "));
              setAttribute(button, ARIA_LABEL, label);
            });
          }
          function updatePagination(data, prev, curr) {
            if (prev) {
              removeAttribute(prev.button, ARIA_CURRENRT);
            }
            if (curr) {
              setAttribute(curr.button, ARIA_CURRENRT, true);
            }
          }
          function initAutoplay() {
            ["play", "pause"].forEach(function(name) {
              var elm = Elements[name];
              if (elm) {
                if (!isButton(elm)) {
                  setAttribute(elm, "role", "button");
                }
                setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
                setAttribute(elm, ARIA_LABEL, i18n[name]);
              }
            });
          }
          function initNavigation(main) {
            Elements.each(function(Slide) {
              var slide2 = Slide.slide;
              var realIndex = Slide.realIndex;
              if (!isButton(slide2)) {
                setAttribute(slide2, "role", "button");
              }
              var slideIndex = realIndex > -1 ? realIndex : Slide.index;
              var label = sprintf(i18n.slideX, slideIndex + 1);
              var mainSlide = main.Components.Elements.getSlide(slideIndex);
              setAttribute(slide2, ARIA_LABEL, label);
              if (mainSlide) {
                setAttribute(slide2, ARIA_CONTROLS, mainSlide.slide.id);
              }
            });
          }
          function updateNavigation(_ref, active) {
            var slide2 = _ref.slide;
            if (active) {
              setAttribute(slide2, ARIA_CURRENRT, true);
            } else {
              removeAttribute(slide2, ARIA_CURRENRT);
            }
          }
          function isButton(elm) {
            return elm.tagName === "BUTTON";
          }
          return A11y;
        };
        ;
        var SYNC_EVENT = "move.sync";
        var CLICK_EVENTS = "mouseup touchend";
        var TRIGGER_KEYS = [" ", "Enter", "Spacebar"];
        var sync = function(Splide2) {
          var sibling = Splide2.sibling;
          var isNavigation = sibling && sibling.options.isNavigation;
          var Sync = {
            /**
             * Required only when the sub slider is available.
             *
             * @type {boolean}
             */
            required: !!sibling,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              syncMain();
              syncSibling();
              if (isNavigation) {
                bind();
                Splide2.on("refresh", function() {
                  setTimeout(function() {
                    bind();
                    sibling.emit("navigation:updated", Splide2);
                  });
                });
              }
            },
            /**
             * Called after all components are mounted.
             */
            mounted: function mounted() {
              if (isNavigation) {
                sibling.emit("navigation:mounted", Splide2);
              }
            }
          };
          function syncMain() {
            Splide2.on(SYNC_EVENT, function(newIndex, prevIndex, destIndex) {
              sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
              syncSibling();
            });
          }
          function syncSibling() {
            sibling.on(SYNC_EVENT, function(newIndex, prevIndex, destIndex) {
              Splide2.off(SYNC_EVENT).go(Splide2.is(LOOP) ? destIndex : newIndex, false);
              syncMain();
            });
          }
          function bind() {
            sibling.Components.Elements.each(function(_ref) {
              var slide2 = _ref.slide, index = _ref.index;
              Splide2.off(CLICK_EVENTS, slide2).on(CLICK_EVENTS, function(e) {
                if (!e.button || e.button === 0) {
                  moveSibling(index);
                }
              }, slide2);
              Splide2.off("keyup", slide2).on("keyup", function(e) {
                if (TRIGGER_KEYS.indexOf(e.key) > -1) {
                  e.preventDefault();
                  moveSibling(index);
                }
              }, slide2, {
                passive: false
              });
            });
          }
          function moveSibling(index) {
            if (Splide2.State.is(IDLE)) {
              sibling.go(index);
            }
          }
          return Sync;
        };
        ;
        var THROTTLE = 50;
        var breakpoints = function(Splide2) {
          var breakpoints2 = Splide2.options.breakpoints;
          var throttledCheck = throttle(check, THROTTLE);
          var initialOptions;
          var map = [];
          var prevPoint;
          var Breakpoints = {
            /**
             * Required only when the breakpoints definition is provided and browser supports matchMedia.
             *
             * @type {boolean}
             */
            required: breakpoints2 && matchMedia,
            /**
             * Called when the component is mounted.
             */
            mount: function mount() {
              map = Object.keys(breakpoints2).sort(function(n, m) {
                return +n - +m;
              }).map(function(point) {
                return {
                  point,
                  mql: matchMedia("(max-width:" + point + "px)")
                };
              });
              this.destroy(true);
              addEventListener("resize", throttledCheck);
              initialOptions = Splide2.options;
              check();
            },
            /**
             * Destroy.
             *
             * @param {boolean} completely - Whether to destroy Splide completely.
             */
            destroy: function destroy(completely) {
              if (completely) {
                removeEventListener("resize", throttledCheck);
              }
            }
          };
          function check() {
            var point = getPoint();
            if (point !== prevPoint) {
              prevPoint = point;
              var State = Splide2.State;
              var options2 = breakpoints2[point] || initialOptions;
              var destroy = options2.destroy;
              if (destroy) {
                Splide2.options = initialOptions;
                Splide2.destroy(destroy === "completely");
              } else {
                if (State.is(DESTROYED)) {
                  Splide2.mount();
                }
                Splide2.options = options2;
              }
            }
          }
          function getPoint() {
            var item = map.filter(function(item2) {
              return item2.mql.matches;
            })[0];
            return item ? item.point : -1;
          }
          return Breakpoints;
        };
        ;
        var COMPLETE = {
          Options: options,
          Breakpoints: breakpoints,
          Controller: controller,
          Elements: components_elements,
          Track: track,
          Clones: clones,
          Layout: layout,
          Drag: drag,
          Click: click,
          Autoplay: autoplay,
          Cover: cover,
          Arrows: arrows,
          Pagination: pagination,
          LazyLoad: lazyload,
          Keyboard: keyboard,
          Sync: sync,
          A11y: a11y
        };
        var LIGHT = {
          Options: options,
          Controller: controller,
          Elements: components_elements,
          Track: track,
          Clones: clones,
          Layout: layout,
          Drag: drag,
          Click: click,
          Arrows: arrows,
          Pagination: pagination,
          A11y: a11y
        };
        ;
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        var complete_Splide = /* @__PURE__ */ function(_Core) {
          _inheritsLoose(Splide2, _Core);
          function Splide2(root, options2) {
            return _Core.call(this, root, options2, COMPLETE) || this;
          }
          return Splide2;
        }(Splide);
        window.Splide = complete_Splide;
      })();
    }
  });

  // js/accordion.js
  var require_accordion = __commonJS({
    "js/accordion.js"() {
      $(document).ready(function() {
        $(".accordion__title").click(function() {
          $(this).next(".accordion__content").toggleClass("show-me");
          $(this).toggleClass("active");
          if ($(".accordion__title").hasClass("active")) {
            $(this).attr("aria-expanded", "true");
          } else {
            $(".accordion__title").attr("aria-expanded", "false");
          }
        });
      });
    }
  });

  // js/form.js
  var require_form = __commonJS({
    "js/form.js"() {
      $(document).ready(function() {
        window.triggerError = function(fieldName, errorMessage) {
          let elParent = $('select[name ="' + fieldName + '"]').parent();
          let errorSpan = elParent.find(".select__error");
          if (!elParent.length) {
            let inputEl = $('input[name="' + fieldName + '"]');
            errorSpan = elParent.find(".text__error");
            elParent = inputEl.parent();
          }
          errorSpan.html(errorMessage);
          elParent = elParent.addClass("hasError");
        };
        window.clearErrors = function(formEl) {
          let elSelector = formEl.className;
          let errorInputs;
          if (typeof elSelector !== "undefined") {
            errorInputs = $("." + elSelector).find(".hasError");
          } else {
            elSelector = formEl.id;
            errorInputs = $("#" + elSelector).find("hasError");
          }
          if (errorInputs.length) {
            for (let i2 = 0; i2 < errorInputs.length; i2++) {
              errorInputs[i2].classList.remove("hasError");
            }
          }
        };
        function updateSelectionTextColor() {
          $(".select__option").each(function() {
            if ($(this).is(":selected") && !$(this).is(":disabled")) {
              $(this).parent().css("color", "#000000");
            } else {
              $(this).parent().css("color", "#000000");
            }
          });
        }
        $(".select__menu").on("change", function() {
          updateSelectionTextColor();
        });
        updateSelectionTextColor();
      });
    }
  });

  // js/grid.js
  var require_grid = __commonJS({
    "js/grid.js"() {
      $(document).ready(function() {
        $(".light-grey.tall-75").prepend('<div class="white-25"></div>');
        $(".light-grey.tall-65").prepend('<div class="white-35"></div>');
      });
    }
  });

  // js/navigation.js
  var require_navigation = __commonJS({
    "js/navigation.js"() {
      "use strict";
      document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById("primary-ham");
        const header = document.getElementById("header-wrap");
        const $navPrimaryHasChildren = getAll(".nav-primary__link--has-children");
        const $subNavPrimaryToggles = getAll(".nav-primary__toggle");
        const searchButton = document.getElementById("search-button");
        hamburger.addEventListener("click", (e) => {
          e.stopPropagation();
          header.classList.toggle("is-open");
        });
        searchButton.addEventListener("click", (e) => {
          e.stopPropagation();
          document.getElementById("primary-nav-search").classList.toggle("is-open");
        });
        document.addEventListener("click", (e) => {
          if (!document.getElementById("nav-main").contains(e.target)) {
            header.classList.remove("is-open");
          }
        });
        if ($navPrimaryHasChildren.length > 0) {
          $navPrimaryHasChildren.forEach(($el) => {
            $el.addEventListener("keydown", (e) => {
              e.stopPropagation();
              if (e.keyCode === "ArrowDown" || e.keyCode === 40) {
                $el.classList.add("is-open");
              }
            });
            $el.querySelector(".nav-primary__sublist").addEventListener(
              "focusout",
              (e) => {
                e.stopPropagation();
                if ($el.contains(e.relatedTarget)) {
                  return;
                }
                $el.classList.remove("is-open");
              }
            );
          });
        }
        if ($subNavPrimaryToggles.length > 0) {
          $subNavPrimaryToggles.forEach(($el) => {
            $el.addEventListener("click", (e) => {
              e.stopPropagation();
              $el.closest("li").classList.toggle("is-open");
            });
          });
        }
        function getAll(selector) {
          let parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
          return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
        }
      });
    }
  });

  // js/table.js
  var require_table = __commonJS({
    "js/table.js"() {
      (function(c) {
        c.fn.stupidtable = function(a) {
          return this.each(function() {
            let b = c(this);
            a = a || {};
            a = c.extend({}, c.fn.stupidtable.default_sort_fns, a);
            b.data("sortFns", a);
            b.stupidtable_build();
            b.on("click.stupidtable", "thead th", function() {
              c(this).stupidsort();
            });
            b.find("th[data-sort-onload=yes]").eq(0).stupidsort();
          });
        };
        c.fn.stupidtable.default_settings = {
          should_redraw: function() {
            return true;
          },
          will_manually_build_table: false
        };
        c.fn.stupidtable.dir = {
          ASC: "asc",
          DESC: "desc"
        };
        c.fn.stupidtable.default_sort_fns = {
          "int": function(a, b) {
            return parseInt(a, 10) - parseInt(b, 10);
          },
          "float": function(a, b) {
            return parseFloat(a) - parseFloat(b);
          },
          string: function(a, b) {
            return a.toString().localeCompare(b.toString());
          },
          "string-ins": function(a, b) {
            a = a.toString().toLocaleLowerCase();
            b = b.toString().toLocaleLowerCase();
            return a.localeCompare(b);
          }
        };
        c.fn.stupidtable_settings = function(a) {
          return this.each(function() {
            let b = c(this), f = c.extend({}, c.fn.stupidtable.default_settings, a);
            b.stupidtable.settings = f;
          });
        };
        c.fn.stupidsort = function(a) {
          let b = c(this), f = b.data("sort") || null;
          if (null !== f) {
            let d = b.closest("table"), e = {
              $th: b,
              $table: d,
              datatype: f
            };
            d.stupidtable.settings || (d.stupidtable.settings = c.extend({}, c.fn.stupidtable.default_settings));
            e.compare_fn = d.data("sortFns")[f];
            e.th_index = h(e);
            e.sort_dir = k(a, e);
            b.data("sort-dir", e.sort_dir);
            d.trigger("beforetablesort", {
              column: e.th_index,
              direction: e.sort_dir,
              $th: b
            });
            d.css("display");
            setTimeout(function() {
              d.stupidtable.settings.will_manually_build_table || d.stupidtable_build();
              var a2 = l(e), a2 = m(a2, e);
              if (d.stupidtable.settings.should_redraw(e)) {
                d.children("tbody").append(a2);
                var a2 = e.$table, c2 = e.$th, f2 = c2.data("sort-dir");
                a2.find("th").data("sort-dir", null).removeClass("sorting-desc sorting-asc");
                c2.data("sort-dir", f2).addClass("sorting-" + f2);
                d.trigger("aftertablesort", {
                  column: e.th_index,
                  direction: e.sort_dir,
                  $th: b
                });
                d.css("display");
              }
            }, 10);
            return b;
          }
        };
        c.fn.updateSortVal = function(a) {
          let b = c(this);
          b.is("[data-sort-value]") && b.attr("data-sort-value", a);
          b.data("sort-value", a);
          return b;
        };
        c.fn.stupidtable_build = function() {
          return this.each(function() {
            let a = c(this), b = [];
            a.children("tbody").children("tr").each(function(a2, d) {
              let e = {
                $tr: c(d),
                columns: [],
                index: a2
              };
              c(d).children("td").each(function(a3, b2) {
                let d2 = c(b2).data("sort-value");
                "undefined" === typeof d2 && (d2 = c(b2).text(), c(b2).data("sort-value", d2));
                e.columns.push(d2);
              });
              b.push(e);
            });
            a.data("stupidsort_internaltable", b);
          });
        };
        let l = function(a) {
          var b = a.$table.data("stupidsort_internaltable"), f = a.th_index, d = a.$th.data("sort-multicolumn"), d = d ? d.split(",") : [], e = c.map(d, function(b2) {
            let c2 = a.$table.find("th"), e2 = parseInt(b2, 10), f2;
            e2 || 0 === e2 ? f2 = c2.eq(e2) : (f2 = c2.siblings("#" + b2), e2 = c2.index(f2));
            return {
              index: e2,
              $e: f2
            };
          });
          b.sort(function(b2, c2) {
            for (var d2 = e.slice(0), g = a.compare_fn(b2.columns[f], c2.columns[f]); 0 === g && d2.length; ) {
              var g = d2[0], h2 = g.$e.data("sort"), g = (0, a.$table.data("sortFns")[h2])(b2.columns[g.index], c2.columns[g.index]);
              d2.shift();
            }
            return 0 === g ? b2.index - c2.index : g;
          });
          a.sort_dir !== c.fn.stupidtable.dir.ASC && b.reverse();
          return b;
        }, m = function(a, b) {
          let f = c.map(a, function(a2, c2) {
            return [
              [a2.columns[b.th_index], a2.$tr, c2]
            ];
          });
          b.column = f;
          return c.map(a, function(a2) {
            return a2.$tr;
          });
        }, k = function(a, b) {
          let f, d = b.$th, e = c.fn.stupidtable.dir;
          a ? f = a : (f = a || d.data("sort-default") || e.ASC, d.data("sort-dir") && (f = d.data("sort-dir") === e.ASC ? e.DESC : e.ASC));
          return f;
        }, h = function(a) {
          let b = 0, f = a.$th.index();
          a.$th.parents("tr").find("th").slice(0, f).each(function() {
            let a2 = c(this).attr("colspan") || 1;
            b += parseInt(a2, 10);
          });
          return b;
        };
      })(jQuery);
      $(document).ready(function() {
        const $table = $("#sortTable");
        $table.stupidtable_settings({
          will_manually_build_table: true
        });
        $("#sortTable thead th:first-child").trigger("click");
        $table.stupidtable({
          "lastname": function(a, b) {
            const pattern = '^[w"-,.][^0-9_!\xA1?\xF7?\xBF/\\+=@#$%\u02C6&*(){}|~<>;:[]]{2,}$';
            const re = new RegExp(pattern);
            const aName = re.exec(a);
            const bName = re.exec(b);
            return aName - bName;
          }
        });
        $table.animate({
          opacity: 1
        }, 500, function() {
        });
      });
      $(document).ready(function() {
        let resizeId;
        setRowHeight($);
        $(window).resize(function() {
          clearTimeout(resizeId);
          resizeId = setTimeout(function() {
            setRowHeight($);
          }, 100);
        });
      });
      function setRowHeight($2) {
        $2("td:first-child, th:first-child").each(function() {
          $2(this).css("height", "");
          $2(this).parent("tr").css("height", "");
          let firstChildHeight = $2(this).closest("tr").height(), firstCell = $2(this).outerHeight();
          if (firstChildHeight > firstCell) {
            $2(this).css("height", firstChildHeight + "px");
          } else {
            $2(this).parent("tr").css("height", firstCell + "px");
          }
        });
      }
    }
  });

  // js/tabs.js
  var require_tabs = __commonJS({
    "js/tabs.js"() {
      $(document).ready(function() {
        (function() {
          let tablist = document.querySelectorAll('[role="tablist"]')[0];
          let tabs;
          let panels;
          let delay = determineDelay();
          if (!tablist) {
            return;
          }
          setOverflowStyles(tablist);
          generateArrays();
          function generateArrays() {
            tabs = document.querySelectorAll('[role="tab"]');
            panels = document.querySelectorAll('[role="tabpanel"]');
          }
          ;
          let keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46
          };
          let direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
          };
          for (i = 0; i < tabs.length; ++i) {
            addListeners(i);
          }
          ;
          function isTabListOverflow(tablist2) {
            let buttonWidth = 0;
            let buttons = tablist2.querySelectorAll('[role="tab"]');
            for (let idx = 0; idx < buttons.length; idx++) {
              buttonWidth += buttons[idx].offsetWidth;
            }
            return buttonWidth > tablist2.offsetWidth;
          }
          function setOverflowStyles(tablist2) {
            if (isTabListOverflow(tablist2)) {
              for (let i2 = 0; i2 < tablist2.children.length; i2++) {
                tablist2.children[i2].style["width"] = "25%";
                tablist2.children[i2].style["white-space"] = "normal";
                tablist2.children[i2].style["vertical-align"] = "bottom";
              }
            }
          }
          function addListeners(index) {
            tabs[index].addEventListener("click", clickEventListener);
            tabs[index].addEventListener("keydown", keydownEventListener);
            tabs[index].addEventListener("keyup", keyupEventListener);
            tabs[index].index = index;
          }
          ;
          function clickEventListener(event) {
            event.preventDefault();
            let tab = event.target;
            tab.blur();
            activateTab(tab, false);
          }
          ;
          function keydownEventListener(event) {
            let key = event.keyCode;
            switch (key) {
              case keys.end:
                event.preventDefault();
                activateTab(tabs[tabs.length - 1]);
                break;
              case keys.home:
                event.preventDefault();
                activateTab(tabs[0]);
                break;
              case keys.up:
              case keys.down:
                determineOrientation(event);
                break;
            }
            ;
          }
          ;
          function keyupEventListener(event) {
            let key = event.keyCode;
            switch (key) {
              case keys.left:
              case keys.right:
                determineOrientation(event);
                break;
              case keys.delete:
                determineDeletable(event);
                break;
            }
            ;
          }
          ;
          function determineOrientation(event) {
            let key = event.keyCode;
            let vertical = tablist.getAttribute("aria-orientation") === "vertical";
            let proceed = false;
            if (vertical) {
              if (key === keys.up || key === keys.down) {
                event.preventDefault();
                proceed = true;
              }
              ;
            } else {
              if (key === keys.left || key === keys.right) {
                proceed = true;
              }
              ;
            }
            ;
            if (proceed) {
              switchTabOnArrowPress(event);
            }
            ;
          }
          ;
          function switchTabOnArrowPress(event) {
            let pressed = event.keyCode;
            for (x = 0; x < tabs.length; x++) {
              tabs[x].addEventListener("focus", focusEventHandler);
            }
            ;
            if (direction[pressed]) {
              let target2 = event.target;
              if (target2.index !== void 0) {
                if (tabs[target2.index + direction[pressed]]) {
                  tabs[target2.index + direction[pressed]].focus();
                } else if (pressed === keys.left || pressed === keys.up) {
                  focusLastTab();
                } else if (pressed === keys.right || pressed === keys.down) {
                  focusFirstTab();
                }
                ;
              }
              ;
            }
            ;
          }
          ;
          function activateTab(tab, setFocus) {
            deactivateTabs();
            tab.removeAttribute("tabindex");
            tab.setAttribute("aria-selected", "true");
            let controls = tab.getAttribute("aria-controls");
            document.getElementById(controls).removeAttribute("hidden");
            if (setFocus) {
              tab.focus();
            }
            ;
          }
          ;
          function deactivateTabs() {
            for (t = 0; t < tabs.length; t++) {
              tabs[t].setAttribute("tabindex", "-1");
              tabs[t].setAttribute("aria-selected", "false");
              tabs[t].removeEventListener("focus", focusEventHandler);
            }
            ;
            for (p = 0; p < panels.length; p++) {
              panels[p].setAttribute("hidden", "hidden");
            }
            ;
          }
          ;
          function focusFirstTab() {
            tabs[0].focus();
          }
          ;
          function focusLastTab() {
            tabs[tabs.length - 1].focus();
          }
          ;
          function determineDeletable(event) {
            target = event.target;
            if (target.getAttribute("data-deletable") !== null) {
              deleteTab(event, target);
              generateArrays();
              if (target.index - 1 < 0) {
                activateTab(tabs[0]);
              } else {
                activateTab(tabs[target.index - 1]);
              }
              ;
            }
            ;
          }
          ;
          function deleteTab(event) {
            let target2 = event.target;
            let panel = document.getElementById(target2.getAttribute("aria-controls"));
            target2.parentElement.removeChild(target2);
            panel.parentElement.removeChild(panel);
          }
          ;
          function determineDelay() {
            let hasDelay = $(this).attr("data-delay");
            let delay2 = 0;
            if (typeof hasDelay !== "undefined" && hasDelay !== false) {
              let delayValue = tablist.getAttribute("data-delay");
              if (delayValue) {
                delay2 = delayValue;
              } else {
                delay2 = 300;
              }
              ;
            }
            ;
            return delay2;
          }
          ;
          function focusEventHandler(event) {
            let target2 = event.target;
            setTimeout(checkTabFocus, delay, target2);
          }
          ;
          function checkTabFocus(target2) {
            focused = document.activeElement;
            if (target2 === focused) {
              activateTab(target2, false);
            }
            ;
          }
          ;
        })();
      });
    }
  });

  // js/ucla-lib-scripts.js
  require_carousel();
  require_accordion();
  require_form();
  require_grid();
  require_navigation();
  require_table();
  require_tabs();
})();
/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
