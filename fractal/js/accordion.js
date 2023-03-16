$(document).ready(function (){

  //This is what happens when you click the title on mobile or desktop.
  $('.accordion__title').click(function (){
    $(this).next('.accordion__content').toggleClass('show-me');
    $(this).toggleClass('active');

    if ($('.accordion__title').hasClass('active')) {
      $(this).attr('aria-expanded', 'true');
    } else {
      $('.accordion__title').attr('aria-expanded', 'false');
    }
  });
});
