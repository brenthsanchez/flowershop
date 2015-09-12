$(document).ready(function(){
  
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu 
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });



 
});