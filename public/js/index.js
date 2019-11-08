$(function(){
  // Error/success message fade
    $('#positive').delay(2000).fadeOut();
    $('#negative').delay(2000).fadeOut();

    //lazy load project images
    $('.projectImageContainer img')
      .visibility({
          type       : 'image',
          transition : 'fade in',
          duration   : 1500,
          context: '#innerPortfolioContainer',
          onLoad: function(){
            $('.lds-facebook').css('display', 'none');
          }
      })
    ;
    //
  //Landing page animation
    const fadeUp = {
      transition: 'opacity .75s ease-in, top .8s ease-in',
      opacity: 1,
      top: '0px',
      transitionDelay: '.25s'
    };
    const fadeUpDelayed = {
      transition: 'opacity .75s ease-in, top .8s ease-in',
      opacity: 1,
      top: '0px',
      transitionDelay: '1.15s'
    };
    const buttonFade = {
      transition: 'opacity .75s ease-in',
      opacity: 1,
      transitionDelay: '2s'
    };
    $('#innerHeaderContainer h1').css(fadeUp);
    $('#innerHeaderContainer h2').css(fadeUpDelayed);
    $('#HeaderButtonBox').css(buttonFade);
  //
  //mobileNav toggle
  function navToggle(){
    $(this).toggleClass('is-active');
    $('#mobileNav').toggleClass('active');
    $('body').toggleClass('bodyOverflow');
  }

  $('.hamburger--squeeze').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('#mobileNav').toggleClass('active');
    $('body').toggleClass('bodyOverflow');
  });
});
