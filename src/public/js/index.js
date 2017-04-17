$('.header').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 20);
    var amountMovedY = (e.pageY * -1 / 20);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

$(window).scroll(function(){

var wScroll = $(this).scrollTop();

  console.log(wScroll);

  $('.header img').css({'transform': 'translate(0px, -' + wScroll /16 + '%)'});
  $('.header h1').css({'transform': 'translate(0px, ' + wScroll /2 + '%)'});

  $('.about').css({'transform': 'translate(0px, -' + wScroll /160 + '%)'});
  $('.about h2').css({'transform': 'translate(0px, -' + wScroll /16 + '%)'});
  $('.about p').css({'transform': 'translate(0px, ' + wScroll /16 + '%)'});


  $('.mySkills').css({'transform': 'translate(0px, -' + wScroll /32 + '%)'});
  $('.mySkills h2').css({'transform': 'translate(0px, -' + wScroll /16 + '%)'});
  $('.mySkills p').css({'transform': 'translate(0px, ' + wScroll /12 + '%)'});

  $('.getInTouch').css({'transform': 'translate(0px, -' + wScroll /100 + '%)'});
  $('.getInTouch h2').css({'transform': 'translate(0px, -' + wScroll /4 + '%)'});

  if(wScroll > $('.getInTouch').offset().top - ($(window).height() / 1.6)) {

    $('.getInTouch form textarea').each(function(){

      $('.getInTouch form textarea').addClass('parallax');

    });

  };

  //input fields
  if(wScroll > $('.getInTouch').offset().top - ($(window).height() / 1.6)) {

    $('.getInTouch form input').each(function(i){
  		setTimeout(function() {
      	$('.getInTouch form input').eq(i).addClass('parallax');
  		},150*(i+1));
    });

  };

});
