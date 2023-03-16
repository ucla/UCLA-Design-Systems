$(document).ready(function () {
  // Toggle list functionality for 3rd level
  const $sublistItem2 = $('.nav-primary__sublist-2');
  const $toggle2 = $('.nav-primary__toggle-2');
  const breakpoint = 1024;

  // Hide sub items in small device sizes
  $sublistItem2.addClass('nav-primary__sublist-2--hidden');

  // Show nav children on click of toggle
  $toggle2.on('click', function () {
    if ($(this).siblings('.nav-primary__sublist-2').hasClass('nav-primary__sublist-2--hidden')) {
      $(this).siblings('.nav-primary__sublist-2').attr('aria-expanded', 'true');
      $(this).attr('aria-label', 'collapse');
    } else {
      $(this).siblings('.nav-primary__sublist-2').attr('aria-expanded', 'false');
      $(this).attr('aria-label', 'expand');
    }

    $(this).siblings('.nav-primary__sublist-2').toggleClass('nav-primary__sublist-2--hidden');
    $(this).toggleClass('is-open');
  });

  const $sublistItem = $('.nav-primary__sublist');
  const $toggle = $('.nav-primary__toggle');

  // Hide sub items in small device sizes
  $sublistItem.addClass('nav-primary__sublist--hidden');

  // Show nav children on click of toggle
  $toggle.on('click', function () {
    if ($(this).siblings('.nav-primary__sublist').hasClass('nav-primary__sublist--hidden')) {
      $(this).siblings('.nav-primary__sublist').attr('aria-expanded', 'true');
      $(this).attr('aria-label', 'collapse');
    } else {
      $(this).siblings('.nav-primary__sublist').attr('aria-expanded', 'false');
      $(this).attr('aria-label', 'expand');
    }

    $(this).siblings('.nav-primary__sublist').toggleClass('nav-primary__sublist--hidden');
    $(this).toggleClass('is-open');
  });

  // Set toggle button labels to "expand" by default
  $toggle.attr('aria-label', 'expand');
  $toggle2.attr('aria-label', 'expand');

  // Evaluate mobile sub nav states on page load
  evalNav($(window).outerWidth());

  // Run evaluation on page resize
  $(window).resize(function () {
    evalNav($(window).outerWidth());
    mobileNavPosition($(window).outerWidth(), breakpoint);
  });

  // Hide open mobile sub navs above browser width 1024px
  function evalNav (windowWidth) {
    if (windowWidth >= breakpoint) {
      $sublistItem.addClass('nav-primary__sublist--hidden');
      $toggle.removeClass('is-open');
      $('.hamburger').removeClass('hamburger--is-active');
      $('.nav-primary').removeClass('nav-primary--is-active');
      enableMenuTab();
    } else {
      disableMenuTab();
    }
  }





  /*-------------------------------------------------------------------------------------
    SEARCH FUNCTIONALITY
  -------------------------------------------------------------------------------------*/
  $('.nav-primary__search-desktop-button').click(function () {

    let secondLevelNav = $('li.has-child > ul');

    desktopSubmenuResize();

    if ($(this).hasClass('nav-primary__search-desktop-button--is-active')) {
      $('.nav-primary__search-block-form').removeClass('nav-primary__search-block-form--is-active');
      $(this).removeClass('nav-primary__search-desktop-button--is-active');
      $('.nav-primary__search-desktop-button > svg').replaceWith('<svg role="img" aria-label="Search Icon" class="nav-primary__search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Search Icon</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="search-nav-icon-primary" transform="translate(-15.000000, -15.000000)"><g id="Nav-Item"><g id="Icon/Search" transform="translate(12.000000, 12.000000)"><polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon><path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" id="Shape" fill="#00598C" fill-rule="evenodd"></path></g></g></g></g></svg>');

      // Display other submenus is search menu is not active
      for (let i = 0; i < secondLevelNav.length; i += 1) {
        secondLevelNav[i].style.display = '';
      }


    } else {
      $('.nav-primary__search-block-form').addClass('nav-primary__search-block-form--is-active');
      $(this).addClass('nav-primary__search-desktop-button--is-active');
      $('.nav-primary__search-desktop-button > svg').replaceWith('<svg role="img" aria-label="Close" class="close-x" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Icon Close</title><g id="Icon/Close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="Shape" fill="#ffffff" points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"></polygon></g></svg>');

      // DO NOT Display other submenus is search menu is not active
      for (let i = 0; i < secondLevelNav.length; i += 1) {
        secondLevelNav[i].style.display = 'none';
      }

    }
  });

  /* Select the size on load or reset the size of the submenu for dekstop only. Resize the submenu when
  ================================================================= */
  function desktopSubmenuResize () {
    let w = $('.nav-primary').width() - 70,
      negOffset = (w + 10) * -1;

    //Add the width off the header wrap to the search dropdown
    $('.nav-primary__search-block-form').css({ // <a class="has-child--link">
      'width': w,
      'margin-left': negOffset
    });
  }




  /*-------------------------------------------------------------------------------------
    PRIMARY NAVIGATION TABBING FUNCTIONALITY
  -------------------------------------------------------------------------------------*/

  //reset the primary navigation
  resetTabs();

  //get the window width
  let windowWidth = $(window).outerWidth();

  //set the tabbing functionality
  if (windowWidth >= breakpoint) {
    addDesktopTabs();
  } else {
    addMobileTabs();
  }

  //On Resize
  $(window).resize(function () {

    windowWidth = $(window).outerWidth();

    setTimeout(function () {

      if (windowWidth >= breakpoint) {
        resetTabs();
        addDesktopTabs();
      } else {
        resetTabs();
        addMobileTabs();
      }
    }, 100);
  });

  //on mouse out of sublist reset
  $('#nav-main .nav-primary__sublist').mouseout(function () {
    $('#nav-main').find('.nav-primary__list .nav-primary__link-2').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__sublist-2 .nav-primary__link-2').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist-2').attr('style', '');
    $('#nav-main').find('.nav-primary__link-2--has-children').find('.nav-primary__sublist-2').attr('aria-expanded', 'false');
    $('#nav-main').find('.nav-primary__list .nav-primary__link').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__sublist .nav-primary__link').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist').attr('style', '');
    $('#nav-main').find('.nav-primary__link--has-children').find('.nav-primary__sublist').attr('aria-expanded', 'false');
    $toggle.attr('aria-label', 'expand');
    $toggle2.attr('aria-label', 'expand');
  });

  //on mouse out of second sublist
  $('#nav-main .nav-primary__sublist-2').mouseout(function () {
    $('#nav-main').find('.nav-primary__list .nav-primary__link-2').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__sublist-2 .nav-primary__link-2').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist-2').attr('style', '');
    $('#nav-main').find('.nav-primary__link-2--has-children').find('.nav-primary__sublist-2').attr('aria-expanded', 'false');
    $toggle2.attr('aria-label', 'expand');
  });

  //Set aria labels for the primary navigation
  $('#nav-main .nav-primary__link--has-children').mouseover(function () {

    windowWidth = $(window).outerWidth();

    //if this is desktop
    if (windowWidth >= breakpoint) {

      $(this).find('.nav-primary__sublist').attr('aria-expanded', 'true');
      $(this).find('.nav-primary__sublist').removeClass('nav-primary__sublist--hidden');
    }
  });

  //Set aria labels for the the second tier
  $('#nav-main .nav-primary__link-2--has-children').mouseover(function () {

    windowWidth = $(window).outerWidth();

    //if this is desktop
    if (windowWidth >= breakpoint) {

      $(this).find('.nav-primary__sublist-2').attr('aria-expanded', 'true');
      $(this).find('.nav-primary__sublist-2').removeClass('nav-primary__sublist-2--hidden');
    }
  });

  $('#nav-main .nav-primary__link--has-children').mouseleave(function () {

    let $this = $(this);

    windowWidth = $(window).outerWidth();

    //if this is desktop
    if (windowWidth >= breakpoint) {
      $(this).find('.nav-primary__sublist').attr('aria-expanded', 'false');
      setTimeout(function () {
        $this.find('.nav-primary__sublist').addClass('nav-primary__sublist--hidden');
      }, 50);

      $toggle.removeClass('is-open');
    }
  });

  $('#nav-main .nav-primary__link-2--has-children').mouseleave(function () {

    let $this = $(this);

    windowWidth = $(window).outerWidth();

    //if this is desktop
    if (windowWidth >= breakpoint) {

      $(this).find('.nav-primary__sublist-2').attr('aria-expanded', 'false');
      setTimeout(function () {
        $this.find('.nav-primary__sublist-2').addClass('nav-primary__sublist-2--hidden');
      }, 50);

      $toggle.removeClass('is-open');
    }
  });





  /* ---------- Reset all the tabbing and styles ---------- */
  function resetTabs () {
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist').attr('style', '');
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist-2').attr('style', '');
    $(document).unbind('keydown');
  }


  /* =======
  - Screen readers and keyboards read html from top to bottom. When pressing tab all browser will jump to the next link in the top to bottom order.
  - All added events change what the browser does by default. Add events only when necessary to fit the design.
  - When adding an keybinding event, add it in the order that it is found in the html. (i.e. - Skip nav is at the top of the html page so goes first in the order.)


  This is the basic keydown function that creates specific events to help guide keyboard users.
  Find your keydown number - https://keycode.info/

  // If object is selectable and is in focus
  if ($('.class-name').is(':focus')) {

    // if the tab key is pressed while the object is focused
    if (evts.keyCode === 9) {

      // Preform an action when the specific key is pressed
      event.preventDefault(); // May require override of default event
      $(element).prev('li').children('a').focus();
    }

  // Repeat again for element further down the html chain.
  } else if ($('.class-name').is(':focus')){

    // Repeat speceific key event action

  }
  /* --------------add dekstop tabbing controls------------ */
  function addDesktopTabs () {

    //keypress focus
    $(document).keydown(function (e) {

      let keyCode = e.keyCode || e.which;

      //tab key was pressed
      if (keyCode === 9) {

        setTimeout(function () {

          let $focus = $(':focus') /*, $dropdown*/ ;

          //if this is a top level nav or the focus is not a primary nav item
          if ($focus.hasClass('nav-primary__search-desktop-button') ||
              ($focus.parent().parent('.nav-primary__list').length > 0 &&
              !$focus.hasClass('nav-primary__toggle'))) {
            $('.nav-primary__list .nav-primary__sublist').attr('style', '');
            $('#nav-main .nav-primary__link--has-children').find('.nav-primary__sublist').attr('aria-expanded', 'false');
            $toggle.removeClass('is-open');
            $toggle.attr('aria-label', 'expand');
            $sublistItem.addClass('nav-primary__sublist--hidden');

            $('.nav-primary__list .nav-primary__sublist-2').attr('style', '');
            $('#nav-main .nav-primary__link-2--has-children').find('.nav-primary__sublist-2').attr('aria-expanded', 'false');
            $toggle2.removeClass('is-open');
            $toggle2.attr('aria-label', 'expand');
            $sublistItem2.addClass('nav-primary__sublist-2--hidden');
          }

          //if the is focused on the text of the categories, not the button
          if ($focus.parent().parent('.nav-primary__sublist-2').length === 0 &&
              !$focus.hasClass('nav-primary__toggle-2')) {
            $('.nav-primary__list .nav-primary__sublist-2').attr('style', '');
            $('#nav-main .nav-primary__link-2--has-children').find('.nav-primary__sublist-2').attr('aria-expanded', 'false');
            $toggle2.removeClass('is-open');
            $toggle2.attr('aria-label', 'expand');
            $sublistItem2.addClass('nav-primary__sublist-2--hidden');
          }

          //if the tabs are not in the search button
          if (!$focus.hasClass('nav-primary__search-desktop-button') && !$focus.hasClass('nav-primary__search-field')
              && !$focus.hasClass('nav-primary__search-submit')) {
            let secondLevelNav = $('li.has-child > ul');
            $('.nav-primary__search-desktop-button').removeClass('nav-primary__search-desktop-button--is-active');
            $('.nav-primary__search-block-form').removeClass('nav-primary__search-block-form--is-active');
            $(this).removeClass('nav-primary__search-desktop-button--is-active');
            $('.nav-primary__search-desktop-button > svg').replaceWith('<svg role="img" aria-label="Search Icon" class="nav-primary__search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Search Icon</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="search-nav-icon-primary" transform="translate(-15.000000, -15.000000)"><g id="Nav-Item"><g id="Icon/Search" transform="translate(12.000000, 12.000000)"><polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon><path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" id="Shape" fill="#00598C" fill-rule="evenodd"></path></g></g></g></g></svg>');

            // Display other submenus is search menu is not active
            for (let i = 0; i < secondLevelNav.length; i += 1) {
              secondLevelNav[i].style.display = '';
            }
          }
        }, 10);
      }

      //arrow down was pressed
      if (keyCode === 40) {

        //get the focused element
        let $focus = $(':focus'),
          $dropdown;

        //if this is a primary navigation item
        if ($focus.hasClass('nav-primary__link')) {

          $dropdown = $focus.parent('.nav-primary__item').find('.nav-primary__sublist');

          //has a dropdown
          if ($dropdown.length > 0) {

            //Show the dropdown
            $dropdown.show();

            //add a tabindex of 0
            $dropdown.find('.nav-primary__link').attr('tabindex', '0');

            //set aria expanded to true
            $focus.parent().find('.nav-primary__sublist').attr('aria-expanded', 'true');
          }
        }
      }

      // right arrow is pressed
      if (keyCode === 39) {

        // get the focused element
        let $focus = $(':focus'),
          $dropdown;

        // check if second tier
        if ($focus.hasClass('nav-primary__link') && $focus.parent().hasClass('nav-primary__link-2--has-children')) {
          $dropdown = $focus.parent('.nav-primary__item').find('.nav-primary__sublist-2');

          //has a dropdown
          if ($dropdown.length > 0) {

            //Show the dropdown
            $dropdown.show();

            //add a tabindex of 0
            $dropdown.find('.nav-primary__link').attr('tabindex', '0');

            //set aria expanded to true
            $focus.parent().find('.nav-primary__sublist-2').attr('aria-expanded', 'true');
          }
        }
      }

      //escape key was pressed
      if (keyCode === 27) {

        setTimeout(function () {

          let $focus = $(':focus');

          //close the dropdowns
          $('.nav-primary__list .nav-primary__sublist').attr('style', '');
          $('#nav-main .nav-primary__link--has-children').find('.nav-primary__sublist').attr('aria-expanded', 'false');
          $toggle.removeClass('is-open');
          $toggle.attr('aria-label', 'expand');
          $('.nav-primary__sublist').addClass('nav-primary__sublist--hidden');

          //if this is a nav item
          if ($focus.parent().parent('.nav-primary__sublist').length > 0) {
            $focus.parent().parent().parent('.nav-primary__item').find('a').focus();
          } else if ($focus.parent().parent('.nav-primary__sublist-2').length > 0) {
            $focus.parent().parent().parent().parent().parent('.nav-primary__item').find('a').focus();
          }

          //close the 3rd tier
          $('.nav-primary__list .nav-primary__sublist-2').attr('style', '');
          $('#nav-main .nav-primary__link-2--has-children').find('.nav-primary__sublist-2').attr('aria-expanded', 'false');
          $toggle2.removeClass('is-open');
          $toggle2.attr('aria-label', 'expand');
          $('.nav-primary__sublist-2').addClass('nav-primary__sublist-2--hidden');

          //if this is a nav item
          if ($focus.parent().parent('.nav-primary__sublist-2').length > 0) {
            $focus.parent().parent().parent('.nav-primary__item').find('a').focus();
          }
        }, 20);
      }

    });

  }

  /* --------------add mobile tabbing controls------------ */
  function addMobileTabs () {
    //keypress focus
    $(document).keydown(function (e) {

      let keyCode = e.keyCode || e.which;

      //tab key was pressed
      if (keyCode === 9) {

        setTimeout(function () {

          let $focus = $(':focus');
          let $hamburgerBtn = $('.hamburger');
          let $primaryNav = $('.nav-primary');

          //if this is a top level primary navigation
          if ($focus.parent().parent('.nav-primary__list').length > 0) {
            $toggle.removeClass('is-open');
            $sublistItem.addClass('nav-primary__sublist--hidden');
          }

          //if this is not a primary navigation item
          if (!($focus.hasClass('nav-primary__link') || $focus.hasClass('nav-primary__toggle') || $focus.hasClass('nav-primary__search-field'))) {
            $hamburgerBtn.removeClass('hamburger--is-active');
            $primaryNav.removeClass('nav-primary--is-active');
            disableMenuTab();
          }

        }, 50);
      }

      //escape key was pressed
      if (keyCode === 27) {

        let $hamburgerBtn = $('.hamburger');
        let $focus = $(':focus');

        if ($hamburgerBtn.hasClass('hamburger--is-active')) {

          //if this is the children level focus
          if ($focus.parent().parent().hasClass('nav-primary__sublist')) {

            $focus.parent().parent().parent().find('.nav-primary__toggle').trigger('click');
            $focus.parent().parent().parent().find('.nav-primary__toggle').focus();

          } else {

            //if this is the children level focus
            $hamburgerBtn.trigger('click');
            $hamburgerBtn.focus();
          }
        }
      }

    });
  }





  /*-------------------------------------------------------------------------------------
    HAMBURGER FUNCTIONALITY
  -------------------------------------------------------------------------------------*/
  let $hamburgerBtn = $('.hamburger');
  let $primaryNav = $('.nav-primary');
  let $header = $('#header');

  $hamburgerBtn.bind('click', function () {

    //if not active add class active
    if (!$(this).hasClass('hamburger--is-active')) {

      $(this).addClass('hamburger--is-active');
      $primaryNav.addClass('nav-primary--is-active');

      mobileNavPosition();
      enableMenuTab();

    } else {

      $(this).removeClass('hamburger--is-active');
      $primaryNav.removeClass('nav-primary--is-active');
      disableMenuTab();
    }
  });

  //check if the mobile nav needs to be repositioned.
  function mobileNavPosition (windowWidth, breakpoint) {

    let $primaryNav = $('.nav-primary');
    let height;

    height = Number($header.height());

    if (windowWidth >= breakpoint) {
      $('body').removeAttr('style');
      $primaryNav.removeAttr('style');
    } else {
      $('body').css('overflowX', 'hidden');
      if (height > 105) {
        $primaryNav.css({ 'top': '71px' });
      } else {
        $primaryNav.removeAttr('style');
      }
    }
  }

  //disable tabbing for the mobile menu
  function disableMenuTab () {
    $('.nav-primary__link').attr('tabindex', '-1');
    $('.nav-primary__toggle').attr('tabindex', '-1');
    $('.nav-primary__link-2').attr('tabindex', '-1');
    $('.nav-primary__toggle-2').attr('tabindex', '-1');
    $('.nav-primary__search-field').attr('tabindex', '-1');
  }

  //enable the tabbing for the mobile menu
  function enableMenuTab () {
    $('.nav-primary__link').attr('tabindex', '0');
    $('.nav-primary__toggle').attr('tabindex', '0');
    $('.nav-primary__link-2').attr('tabindex', '0');
    $('.nav-primary__toggle-2').attr('tabindex', '0');
    $('.nav-primary__search-field').attr('tabindex', '0');
  }





  /*-------------------------------------------------------------------------------------
    BREADCRUMB FUNCTIONALITY
  -------------------------------------------------------------------------------------*/
  $('.breadcrumb').each(function () {

    if ($(this).hasClass('breadcrumb--white')) {
      $(this).after('<span class="breadcrumb--fade white"></span>');
    } else {
      $(this).after('<span class="breadcrumb--fade"></span>');
    }
  });
});