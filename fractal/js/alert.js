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
    const { onClose } = this.options;
    event.stopPropagation();
    event.currentTarget.closest('.ucla-alert').style.display = 'none';
    onClose(event);
  }

  defaults() {
    return {
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