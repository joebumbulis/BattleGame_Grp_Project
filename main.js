//Global Vars
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
var $battleOver = $('.end');

//************************************************
//Start Page
$submitBtn.on('click', function(e){
  e.preventDefault();
  $nameInput.addClass('hidden');
  $submitBtn.addClass('hidden');
  $storyCard1.addClass('hidden');
  $startBtn.removeClass('hidden');
  $storyCard2.removeClass('hidden');
});

//Constructor
function User (name, place, weapon, win) {
    'use strict';
    this.name = name;
    this.place = 0;
    this.weapon = 0;
    this.win = 0
    this.rapBattle = function () {
      this.win = this.weapon - this.location;
      return this.win;
    }
}
var userOne = new User("James");
console.log(userOne);

//game.rapBattle() => returns random number minus random number

// $location.on('click', function () {
//   num1_5 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//   console.log(num1_5);
// })
// $weaponBtn.on('click', function () {
//   num6_10 = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
//   console.log(num6_10);
// })
// $atkBtn.on('click', function () {
//   num = num6_10 - num1_5;
//   console.log(num);
//   if (num == 3 || num == 6) {
//     console.log("Congrats you won!");
//   }
//   else {
//     console.log("Oh sorry, you lost!");
//   }
// })

//************************************************
//Jouney Pages
$location.on('click', function(e){
  e.preventDefault();
  var placeNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  userOne.place = placeNum;
  console.log(userOne.place);
  console.log(userOne);
  $journeyArea.removeClass('hidden');
  $weaponBtn.removeClass('hidden');
  $storyCard4.addClass('hidden');
  $storyCard5.removeClass('hidden');
  $location.addClass('hidden');
});

$alleyBtn.on('click', function(){
  var $enemyName = $('.enemy-name');
  $enemyName.text('Hiphopopotamus');
  $('#hiphop').removeClass('hidden');
  $('#rhyme').addClass('hidden');
  $('.location-name').text('dark, dank alley way')
  $pageTwo.addClass('alley-bg');
  $pageThree.addClass('alley-bg');
  $pageFour.addClass('alley-bg');
})

$clubBtn.on('click', function(){
  var $enemyName = $('.enemy-name');
  $enemyName.text('Rhymenocerous');
  $('#rhyme').removeClass('hidden');
  $('#hiphop').addClass('hidden');
  $('.location-name').text('bumpin\' club')
  $pageTwo.addClass('club-bg');
  $pageThree.addClass('club-bg');
  $pageFour.addClass('club-bg');
});

$weaponBtn.on('click', function(e){
  e.preventDefault();
  var weaponNum = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
  userOne.weapon = weaponNum;
  console.log(userOne.weapon);
  console.log(userOne);
  $pageTwo.addClass('hidden');
  $pageThree.removeClass('hidden');
});

$next3to4.on('click', function(e){
  $storyCard3.addClass('hidden');
  $storyCard4.removeClass('hidden');
  $next3to4.addClass('hidden');
  $location.removeClass('hidden');
  console.log('yay');
});

$atkBtn.on('click', function(e){
  var winNum = userOne.rapBattle;
  console.log(winNum);
  console.log(userOne.win);
});

//**********************************************
//Battle Pages
$battleOver.on('click', function(){
  console.log('hi');
  $('.base').addClass('hidden');
  $('.page-four').removeClass('hidden');
})

//************************************************
//End Page
$startBtn.on('click', function() {
  $pageOne.addClass('hidden');
  $pageTwo.removeClass('hidden');
  $storyCard3.removeClass('hidden');
  $storyCard4.addClass('hidden');
  $storyCard5.addClass('hidden');
  $location.addClass('hidden');
  $weaponBtn.addClass('hidden');
  $next3to4.removeClass('hidden');
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
