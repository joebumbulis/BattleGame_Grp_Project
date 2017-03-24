

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
// #start-btn function to switch to journey page

  $('#start-btn').on('click', function() {
    // $('.page-one-start-game').addClass('div-hide')
    // $('.page-two').removeClass('div-hide')

    $('.page-one-start-game').hide()
    $('.page-two').show()
  })

var $playAgain = $('#play-again');

$playAgain.on('click', function(e){
  console.log('yay');
  $('.base').addClass('hidden');
  $('.page-one').removeClass('hidden');

})





// function for journey page to move to the next page

  // location option appears
  // click location button
    // weapon option appears
  // click weapon button
    // move on to battle page
    //

    var $location = $('.location');
    var $weaponBtn = $('.weapon-btn');
    var $journeyArea = $('.journey-narrative');
    var $pageTwo = $('.page-two');

    $location.on('click', function(e){
      e.preventDefault();
      $weaponBtn.show();
      $journeyArea.show();
    });

    $weaponBtn.on('click', function(e){
      e.preventDefault();
      $pageTwo.hide();
    });
