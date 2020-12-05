$(document).ready(function(){
//addClass sticky navbar
$('.js--section-about').waypoint(function(direction){
if(direction=='down')
{
    var icon = $('.js--nav-icon i');
    if (icon.hasClass('fal fa-times')){
        $('nav').addClass('sticky')
        $('.sticky').css('height','150px')
    }
    $('nav').addClass('sticky')
}else{
    $('nav').removeClass('sticky')
}},
{offset:'60px'});//offset for happen sooner that mean display when 60px--> .js--section-about

//scrolldown from contact button to contact section 

$('.js--contact-button').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-contact').offset().top},1000)
});

//scroll to top

$('.logo').click(function(){
    $('html,body').animate({scrollTop:$('header').offset().top},1000)
});
$('.up-to-top').click(function(){
    $('html,body').animate({scrollTop:$('header').offset().top},1000)
});
    
//show button detail
$('.carousel').on({
    mouseenter:function(){$(this).find('.btn-detail').show()},
    mouseleave:function(){$(this).find('.btn-detail').hide()}
})
//open modal
$('.btn-detail.pharmar').click(function(){
    $('.container-modal.pharmar').show()
});
$('.btn-detail.book').click(function(){
    $('.container-modal.book').show()
});
$('.btn-detail.blog').click(function(){
    $('.container-modal.blog').show()
});
$('.close-btn').click(function(){
    $('.container-modal').hide()
});
//smooth crolling jQuery
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      if (
        
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

 /* Mobile navigation */
 $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(100); //jquery method open and close the box 200 is time animation
    
    if (icon.hasClass('fas fa-bars')) {
        icon.addClass('fal fa-times');
        icon.removeClass('fas fa-bars');
        $('.sticky').css('height','150px')
    } else {
        icon.addClass('fas fa-bars');
        icon.removeClass('fal fa-times');
        $('.sticky').css('height','73px')
    }        
});
//this remove style set on slideToggle to default when resize screen
$(window).resize(function() {
    $(".js--main-nav").removeAttr("style");
});

// $('#target').submit(function ( e ) {

// var fd = new FormData();    
// fd.append( 'name', input.name[0] );
// fd.append( 'email', input.email[0] );
// fd.append( 'message', textarea.message[0] );
// console.log(JSON.stringify(fd))

// $.ajax({
//   url: 'https://portfolio-vtien.firebaseio.com/data.json',
//   accept: "application/json",
//   dataType: "json",
//   data: JSON.stringify(fd),
//   processData: false,
//   contentType: "application/json; charset=utf-8",
//   type: 'POST',
//   success: function(data){
//     alert(data);
//   }
// });

// e.preventDefault();
// });

});

