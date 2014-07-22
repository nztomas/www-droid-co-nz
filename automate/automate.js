$('a.navbar-brand').click(function(){
  scroll($(this));
  return false;
});

$('.navbar .nav li').click(function(){
  scroll($("a", this));
  return false;
});
    
function scroll(link) {
  $('html, body').animate({
    scrollTop: $('[id="' + $(link).attr('href').substr(1) + '"]').offset().top
  }, 500, 'swing');
}
	
$('.navbar .nav li a').click(function() {           
  $(this).parent().addClass('active').siblings().removeClass('active');           
});