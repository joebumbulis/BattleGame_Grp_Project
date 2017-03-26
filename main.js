//vars need to be at the top of the js file
var $location = $('.location');
var $weaponBtn = $('.weapon-btn');
var $journeyArea = $('.journey-narrative');
var $nameInput = $('#name-input');
var $startBtn = $('#start-btn');
var $alleyBtn = $('#alley-btn');
var $clubBtn = $('#club-btn');
var $submitBtn = $('#submit-btn');
var $atkBtn = $('.atk-btn');
var $storyCard1 = $('#story-card-1');
var $storyCard2 = $('#story-card-2');
var $storyCard3 = $('#story-card-3');
var $storyCard4 = $('#story-card-4');
var $storyCard5 = $('#story-card-5');
var $storyCard6 = $('#story-card-6');
var $pageOne = $('.page-one')
var $pageTwo = $('.page-two');
var $pageThree = $('.page-three');
var $pageFour = $('.page-four');
var $playAgain = $('#play-again');
var $next3to4 = $('#next-3-4');
var $battleOver = $('.end')


//**********************************************
//Battle Page
//when attack or defend button is pressed, page 3 display is none and page four appears.


$battleOver.on('click', function(){
  console.log('hi');
  $('.base').addClass('hidden');
  $('.page-four').removeClass('hidden');
})

//store name in constructor
//store location in constructor
//

//based upon location click
//if alley

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
  $storyCard3.removeClass('hidden');
  $storyCard4.addClass('hidden');
  $storyCard5.addClass('hidden');
  $location.addClass('hidden');
  //after clicking this button
  //taken to pg2
  //story card 4 needs to be hidden
  $weaponBtn.addClass('hidden');
  //next button needs to appear
  $next3to4.removeClass('hidden');
  //weapon buttons need to be hidden
})


$playAgain.on('click', function(e){
  console.log('yay');
  $('.base').addClass('hidden');
  $('.page-one').removeClass('hidden');
  $storyCard1.removeClass('hidden');
  $nameInput.removeClass('hidden');
  $submitBtn.removeClass('hidden');
  $storyCard2.addClass('hidden');
  $startBtn.addClass('hidden');
  $('.styling').removeClass('alley-bg');
  $('.styling').removeClass('club-bg');
})



// function for journey page to move to the next page



$location.on('click', function(e){
  e.preventDefault();
  //need to store location value
  $journeyArea.removeClass('hidden');
  $weaponBtn.removeClass('hidden');
  $storyCard4.addClass('hidden');
  $storyCard5.removeClass('hidden');
  $location.addClass('hidden');
});

//id alley or club btn
//when club btn if clicked, insert Rhymenocerous into enemy name in span on battle
//when alley btn if clicked, insert Hiphopopotamus into enemy name in span on battle

//LOCATION BTNS: Alley or Club
$alleyBtn.on('click', function(){
  var $enemyName = $('.enemy-name');
  $enemyName.text('Hiphopopotamus');
  $('#hiphop').removeClass('hidden');
  $('.location-name').text('dark, dank alley way')
  $pageTwo.addClass('alley-bg');
  $pageThree.addClass('alley-bg');
  $pageFour.addClass('alley-bg');
})

$clubBtn.on('click', function(){
  var $enemyName = $('.enemy-name');
  $enemyName.text('Rhymenocerous');
  $('#rhyme').removeClass('hidden');
  $('.location-name').text('bumpin\' club')
  $pageTwo.addClass('club-bg');
  $pageThree.addClass('club-bg');
  $pageFour.addClass('club-bg');
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

});

$next3to4.on('click', function(e){
  $storyCard3.addClass('hidden');
  $storyCard4.removeClass('hidden');
  $next3to4.addClass('hidden');
  $location.removeClass('hidden');
  console.log('yay');
});

$atkBtn.on('click', function(e){
  //attack code
});
