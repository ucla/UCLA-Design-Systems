import Component from './component';


/**
 * The video banner contains a self-hosted video that extends the width of the page.
 */

export default class Banner extends Component {

  /**
     * Gets the video banner CSS class
     *
     * @static
     * @returns {string}
     */
    
  static get selector() {
    return '.ucla-banner__video';
  }

  /**
   * Gets an object containing methods attached to the DOM element.
   *
   * @static
   * @returns {Object}
   */

  static get methods() {
    return {
      /**
       * Initialize video banner
       */

      init() {
        this._initVideoControlAttr();
        this._initVideoBannerElements();
      },

      /**
       * Initializes video button attribute
       *
       * @private
       */

      _initVideoControlAttr() {
        this.videoControlButtonAttr = '.ucla-banner__video_button-control';
      },

      /**
       * Initializes video banner elements
       *
       * @private
       */

      _initVideoBannerElements() {
        this.videoControlButton = this.element.querySelector(this.videoControlButtonAttr);
        this.video = this.element.querySelector('video');
      },

      /**
       * Toggles video playback and changes icon
       *
       * @private
       */

      _toggleVideoState() {
        const playIcon = '<g filter="url(#filter0_b_2019_9)"><circle cx="19.9994" cy="19.9994" r="19.9994" fill="black" fill-opacity="0.65"/></g><g filter="url(#filter1_b_2019_9)"><path d="M13.9167 29.5635L28.7941 19.9994L13.9167 10.4354V29.5635Z" fill="white"/></g><defs><filter id="filter0_b_2019_9" x="-4" y="-4" width="47.9988" height="47.9988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2019_9"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2019_9" result="shape"/></filter><filter id="filter1_b_2019_9" x="9.91669" y="6.43542" width="22.8774" height="27.1281" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2019_9"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2019_9" result="shape"/></filter></defs>';

        const pauseIcon = '<g filter="url(#filter0_b_0_1)"><circle cx="19.9994" cy="19.9994" r="19.9994" fill="black" fill-opacity="0.65" /></g><path d="M13 29H18V11H13V29Z" fill="white" /><path d="M22 29H27V11H22V29Z" fill="white" /><defs><filter id="filter0_b_0_1" x="-4" y="-4" width="47.9988" height="47.9988" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feGaussianBlur in="BackgroundImageFix" stdDeviation="2" /><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" /></filter></defs>';

        const videoButtonIcon = this.videoControlButton.querySelector('svg');

        if (this.video.paused) {
          try {
            this.playVideo(this.video);
            videoButtonIcon.innerHTML = pauseIcon;
            videoButtonIcon.setAttribute('title', 'Pause Video')
            this.videoControlButton.classList.add('playing');
          } catch (err) {
            videoButtonIcon.innerHTML = playIcon;
            videoButtonIcon.setAttribute('title', 'Play Video')
            this.videoControlButton.classList.remove('playing');
          }
        } else {
          this.pauseVideo(this.video)
          videoButtonIcon.innerHTML = playIcon;
          videoButtonIcon.setAttribute('title', 'Play Video')
          this.videoControlButton.classList.remove('playing');
        }
      },

      /**
       * Plays Video
       */

      playVideo(video) {
        video.play();
      },

      /**
       * Pauses Video
       */
      pauseVideo(video) {
        video.pause();
      },

      /**
       * Handles click event for video control
       *
       * @param {Event} event - Click event
       */

      onClick(event) {
        if (this.videoControlButton && this.videoControlButton.contains(event.target)) {
          event.stopPropagation();
          this._toggleVideoState();
        }
      },
    }
  }
}