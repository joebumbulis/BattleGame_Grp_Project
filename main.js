var $playAgain = $('#play-again');

$playAgain.on('click', function(e){
  console.log('yay');
  $('.base').addClass('div-hide');
  $('.page-one').removeClass('div-hide');

})
