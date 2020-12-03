$(document).ready(function(){
	var altura = $('.father').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.father').addClass('navbar-fixed');
		} else {
			$('.father').removeClass('navbar-fixed');
		}
	});
});
var checkout = new WidgetCheckout({
  currency: 'COP',
  amountInCents: 2490000,
  reference: 'AD002901221',
  publicKey: 'pub_fENJ3hdTJxdzs3hd35PxDBSMB4f85VrgiY3b6s1',
});
