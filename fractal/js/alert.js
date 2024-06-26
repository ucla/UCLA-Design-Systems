class Alert {
  init(options) {
    this.alertOptions(options);
    this.setup();
  } 

  setup() {
    const closeAlert = document.querySelectorAll(this.options.closeButton);
    for (let i = 0; i < closeAlert.length; i++) {
      closeAlert[i].addEventListener('click', e => {
        this.dismissAlert(e);
      })
    }
  }

  dismissAlert(event) {
    const { alertContainer, onClose } = this.options;
    event.stopPropagation();
    event.currentTarget.closest(alertContainer).style.display = 'none';
    onClose(event);
  }

  defaults() {
    return {
      alertContainer: '.ucla-alert',
      closeButton: '.ucla-alert--close',
      onClose: () => {}
    }
  }
  alertOptions(options) {
    this.options = Object.assign(this.defaults(), options);
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Alert;
} else {
  window.Alert = Alert;
}