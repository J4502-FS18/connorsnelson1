  $(document).ready(function(){
    $('.menu-trigger').click(function(){
      $('nav ul').slideToggle(500);

    });//end slideToggle

  $(window).resize(fuction(){
    if ($(window).width()>500){
      $('nav ul').removeAttr('style');
    }
  });// end resize
});// end ready
