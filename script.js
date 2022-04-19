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
        $('.menu-btn i').toggleClass('active');
    });


    $('.teams-contnet').owlCarousel({
margin:20,
loop: true,
autoplayTimeOut:2000,
autoplayHoverPause:true,
responsive:{

0:{

  items:1,
  nav:false
},
600:{

  items:2,
  nav:false
},
1000:{

  items:3,
  nav:false
}

}
    });
  });