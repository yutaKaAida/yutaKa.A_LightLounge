$('.btn_trigger').on('click',function(){
  $('.btn_trigger').toggleClass('close');
		$('.nav_wrapper').slideToggle();
  });
  
  $(function() {
    $('.btn_trigger').click(function() {
      $('.bar_top, .bar_mid, .bar_bottom').toggleClass('open');
    })
  });

