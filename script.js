$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY>20){
          $('.navbar').addClass('sticky');
      }else{
        $('.navbar').removeClass('sticky');
      }
    });

    // menubar responsivce
    $('.menu-btn').click(function(){
        $('.menu').toggleClass('active');
        $('.menu-btn i').addClass('active');
    });

    $('.navbar .menu a').click(function(){
      $('.menu').removeClass('active');
      $('.menu-btn i').removeClass('active');
    });
// typing animation

var typed = new Typed(".typing", {
  strings:['Front End Developer', 'Back End Developer', 'Full Stack Developer', "Programmer"],
  typeSpeed:100,
  backSpeed:60,
  loop:true

})
  });