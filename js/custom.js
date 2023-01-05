$(function(){


  // backtotop btn
  $(".backtotop i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    if (scrolling > 20) {
      $(".backtotop i").fadeIn(500)
    } else {
      $(".backtotop i").fadeOut(500)
    }


    if (scrolling > 50) {
      $(".menu").addClass("menu_ex")
    } else {
      $(".menu").removeClass("menu_ex")
    }


    if (scrolling > 50) {
      $(".menu_res").addClass("menu_ex")
    } else {
      $(".menu_res").removeClass("menu_ex")
    }
  })



// all venobox js

new VenoBox({
  selector: '.my-video-links',
});



// testimonial part slider

$('.testimonial_main_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  nextArrow: ".next_arrow",
  prevArrow: ".prev_arrow",
  speed:2500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
      }
    }
  ]
});


// all counter js
$('.counter').counterUp({
  delay: 10,
  time: 1500
});
















})