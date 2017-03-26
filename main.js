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
<<<<<<< HEAD
var $battleOver = $('.end')



// battle & attack
// method will be attackMethod and will be based off number 1 or 2
// constructor name, location, attack

// function User (name, location, attack) {
//     'use strict';
//     this.name = name;
//     this.age = location;
//     this.attack = attack;
//     var battle = Math.ceil(Math.random() * 2);
// }
//this.battle = function() {
	// 	this.age = this.age + agingSpeed;
	// 	return this;
	// }
//
//
var loc = Math.floor(Math.random() * (5-1+1)+1);
var weapon = Math.floor(Math.random() * (10-6+1)+6);

function User (name) {
  'use strict';
  this.name = name;
  this.location = loc;
  this.weapon = weapon;
  this.win = 0;
  this.rapBattle = function (){
    this.win = this.weapon - this.location;
    return this.win;
  }
}
var game1 = new User();





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
=======
var $battleOver = $('.end');

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
var userOne = new User("Joe");
console.log(userOne);
>>>>>>> 9fc77adbdd7a7e2bf90bebdc85eadc8880c26599

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
  $pageTwo.addClass('emo-bg');
})

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
  $pageTwo.removeClass('emo-bg')
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

//**********************************************
//Battle Page
$atkBtn.on('click', function(e){
  var winNum = userOne.rapBattle;
  console.log(winNum);
  console.log(userOne.win);
});

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
