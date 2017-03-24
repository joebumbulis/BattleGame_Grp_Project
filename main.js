


//**********************************************
//Battle Page
//when attack or defend button is pressed, page 3 display is none and page four appears.
var $battleOver = $('.end')

$battleOver.on('click', function(){
  console.log('hi');
  $('.base').addClass('hidden');
  $('.page-four').removeClass('hidden');
})



//************************************************
//End Page
var $playAgain = $('#play-again');

$playAgain.on('click', function(e){
  console.log('yay');
  $('.base').addClass('hidden');
  $('.page-one').removeClass('hidden');

})
