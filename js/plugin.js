// $(document).ready(function(){ 
//     $('.carousel').carousel({interval: 500});

// });



$('.carousel').carousel({
    interval: 6000
  })
 $(document).ready(function(){ 
   "use strict"
   // nice scroll
$("html").niceScroll();

  //show color option div when click on gear
  $('.gear-check').click(function(){
    $('.color-option').fadeToggle();
  })
//change theme color onclick
var colorLi=$(".color-option ul li")
colorLi
.eq(0).css("backgroundColor","#E41b17").end()
.eq(1).css("backgroundColor","green").end()
.eq(2).css("backgroundColor","blue").end()
.eq(3).css("backgroundColor","yellow")

colorLi.click(function()
{
 $("link[href*='theme']").attr("href",$(this).attr("data-value"));
// console.log($(this).attr("data-value"))
});

//caching the scroll top element
var scrollButton=$("#scroll-top")
$(window).scroll(function(){
  // console.log($(this).scrollTop());
  $(this).scrollTop()>=700? scrollButton.show():scrollButton.hide();
})
 //click on button to scroll top
 scrollButton.click(function(){
  $("html,body").animate({scrollTop:0},600)
})
});

//load screen
//  $( window ).load(function() {
//      $(".loading-overlay, .loading-overlay .spinner").fadeOut(2000);
//  });


