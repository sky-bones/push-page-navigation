// needs latest version of jquesy to run
console.log('SDJHFDS');


$(function(){
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function(){
    toggleNav();
  });

});


function toggleNav(){
  if($('.site-wrapper').attr('data-state') == 'slide-closed') {
    // show nav when closed
      $('.site-wrapper').attr('data-state', 'slide-open');
  }else{
 // hide nav when open
      $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}




