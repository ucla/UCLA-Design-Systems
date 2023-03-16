$(document).ready(function () {

  // Trigger Errors - Only select and text input errors are built out so far
  window.triggerError = function (fieldName, errorMessage) { // eslint-disable-line no-unused-vars
    // get select element
    let elParent = $('select[name ="' + fieldName + '"]').parent();
    let errorSpan = elParent.find('.select__error'); // eslint-disable-line no-unused-vars

    // if the element isn't a select element, try text input
    if (!elParent.length) {
      let inputEl = $('input[name="' + fieldName + '"]');
      errorSpan = elParent.find('.text__error');
      elParent = inputEl.parent();
    }

    // add error class to HTML to show appropriate error styling
    errorSpan.html(errorMessage);
    elParent = elParent.addClass('hasError');
  };

  // Clear Errors - This should be called to clear any previous error messages
  window.clearErrors = function (formEl) {
    // Get class name
    let elSelector = formEl.className;
    let errorInputs;

    // Find error elements
    // If there isn't a class, check for ID instead
    if (typeof elSelector !== 'undefined') {
      errorInputs = $('.' + elSelector).find('.hasError');
    } else {
      elSelector = formEl.id;
      errorInputs = $('#' + elSelector).find('hasError');
    }

    // If previous areas are found, clear them
    if (errorInputs.length) {
      for (let i = 0; i < errorInputs.length; i++) {
        errorInputs[i].classList.remove('hasError');
      }
    }
  };

  function updateSelectionTextColor () {
    $('.select__option').each(function () {
      if ($(this).is(':selected') && !$(this).is(':disabled')) {
        $(this).parent().css('color', '#000000');
      } else {
        $(this).parent().css('color', '#000000');
      }
    });
  }

  // Change text color when changed from placeholder
  $('.select__menu').on('change', function () {
    updateSelectionTextColor();
  });

  // Change text color immediately if a non-placeholder is selected
  updateSelectionTextColor();
});