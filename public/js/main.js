window.addEventListener('DOMContentLoaded', function () {
  // All your JS code goes here
  const $contentSection = document.querySelector(".content");
  const $topCircleSection = document.querySelector('.top__circle__white');
  const $middleCircleSection = document.querySelector('.middle__circle__red');
  const $bottomCircleSection = document.querySelector(".bottom__halfcircle__yellow");
  const $posterSection = document.querySelector(".poster");

   //Once the HTML is loaded an alert will appear
  alert("Wanna see a cool poster?!");

  // When you click on the top circle it changes color between white and red
  $topCircleSection.addEventListener('click', function () {
    if ($topCircleSection.classList.contains('top__circle__white')) {
      $topCircleSection.classList.remove('top__circle__white')
      $topCircleSection.classList.add('top__circle__red')
    } else {
      $topCircleSection.classList.remove('top__circle__red')
      $topCircleSection.classList.add('top__circle__white')

    }
  });

  // When you hover over the bottom half circle it changes color between yellow and red
  $bottomCircleSection.addEventListener('mouseover', function () {

    if ($bottomCircleSection.classList.contains('bottom__halfcircle__yellow')) {
      $bottomCircleSection.classList.remove('bottom__halfcircle__yellow')
      $bottomCircleSection.classList.add('bottom__halfcircle__red')
    } else {
      $bottomCircleSection.classList.remove('bottom__halfcircle__red')
      $bottomCircleSection.classList.add('bottom__halfcircle__yellow')

    }

  });


  // When you double click the middle circle it changes color between blue and red
  $middleCircleSection.addEventListener('dblclick', function () {
    console.log("scrolling!");
    if ($middleCircleSection.classList.contains('middle__circle__red')) {
      $middleCircleSection.classList.remove('middle__circle__red')
      $middleCircleSection.classList.add('middle__circle__blue')
      
    } else {
      $middleCircleSection.classList.remove('middle__circle__blue')
      $middleCircleSection.classList.add('middle__circle__red')

    }
  });

  // When you scroll over the poster it changes  the text color between black and green

  $posterSection.addEventListener('wheel', function () {
    console.log("scrolling!");
    if ($posterSection.classList.contains('poster')) {
      $posterSection.classList.remove('poster')
      $posterSection.classList.add('poster__alt__text')
      
    } else {
      $posterSection.classList.remove('poster__alt__text')
      $posterSection.classList.add('poster')

    }
  });

});


