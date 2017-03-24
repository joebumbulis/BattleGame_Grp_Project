

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
