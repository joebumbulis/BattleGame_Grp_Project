//vars need to be at the top of the js file
var $location = $('.location');
var $weaponBtn = $('.weapon-btn');
var $journeyArea = $('.journey-narrative');
var $nameInput = $('#name-input');
var $startBtn = $('#start-btn');
var $submitBtn = $('#submit-btn');
var $storyCard1 = $('#story-card-1');
var $storyCard2 = $('#story-card-2');
var $pageOne = $('.page-one')
var $pageTwo = $('#pg2Narr');
var $pageThree = $('#pg3Nar');

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

  // $('#start-btn').on('click', function() {
  //   // $('.page-one-start-game').addClass('div-hide')
  //   // $('.page-two').removeClass('div-hide')
  //
  //   $('.page-one-start-game').hide()
  //   $('.page-two').show()
  // })

  $startBtn.on('click', function() {
    //adding variable and using add/remove class instead of
    //.hide and .show method
    $pageOne.addClass('hidden');
    $pageTwo.removeClass('hidden');
  })

var $playAgain = $('#play-again');

$playAgain.on('click', function(e){
  console.log('yay');
  $('.base').addClass('hidden');
  $('.page-one').removeClass('hidden');
})



// function for journey page to move to the next page



    $location.on('click', function(e){
      e.preventDefault();
      $journeyArea.removeClass('hidden');
      $weaponBtn.removeClass('hidden');
    });

    $weaponBtn.on('click', function(e){
      e.preventDefault();
      $pageTwo.addClass('hidden');
      $pageThree.removeClass('hidden');
    });

    $submitBtn.on('click', function(e){
      e.preventDefault();

      // take input name and store it in a var

      // hide name input and submit button and first story card
      $nameInput.addClass('hidden');
      $submitBtn.addClass('hidden');
      $storyCard1.addClass('hidden');

      // display start journey button and second story card
      $startBtn.removeClass('hidden');
      $storyCard2.removeClass('hidden');

    })
