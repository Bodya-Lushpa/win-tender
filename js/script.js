$(document).ready(function(){

  $('.carousel').bcSwipe({ threshold: 50 });

  $("#phone").mask("+7 (999) 999-99-99");

  $('.form').submit(function(e) {
    e.preventDefault();
    var form = $(this), button = $(this).find('.btn'), thanks = $('.thank-block');
    button.html('Подождите').attr('disabled', true);
    $('.modal-title').hide();
    $('.modal-desc').hide();
    $('.modal-content').css("padding-top", "25px");
    $.post('form.php', form.serialize(), function(data) {
      thanks.slideDown();
    });
  });

  $(".menu-scroll").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
  });

  $(".burger-open").click(function(e) {
    e.preventDefault();
    $(".menu-m").slideDown();
    $(".header_up").css('background','#ebe9e9');
  });

  $(".burger-close").click(function(e) {
    e.preventDefault();
    $(".menu-m").slideUp();
    $(".header_up").css('background','rgba(255, 255, 255, 0.4)');
  });

  var hammer = new Hammer(document.querySelector('.carousel')); var $carousel = $(".carousel").carousel({"interval":0}); hammer.get("swipe"); hammer.on("swipeleft", function(){     $carousel.carousel("next"); }); hammer.on("swiperight", function(){     $carousel.carousel("prev"); });

});


