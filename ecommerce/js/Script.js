// Fot Search bar
$(document).on('click','.search', function(){
    $('.search-bar').addClass('search-bar-active')
  });

  $(document).on('click','.search-cancel', function(){
    $('.search-bar').removeClass('search-bar-active')
  });

  // login-sign-up-form
  $(document).on('click','.user,.already-acount', function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
  });
  
  $(document).on('click','.sign-up-btn', function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
  });

  $(document).on('click','.form-cancel', function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
  });
  

  // Full-Slider-Script
  $(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto: true,
        item:1,
        slideMargin:0,
        loop: true,
    });
});

// Feature-slider
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

// For-fix-menu-when-scroll
$(window).scroll(function() {
  if($(document).scrollTop() > 50 ){
    $('.navigation').addClass('fix-nav');
  }
  else{
    $('.navigation').removeClass('fix-nave');
  }
});

// For-responsive-menu
$(document).ready(function() {
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
    $('.navigation').toggleClass('active')
  })
})