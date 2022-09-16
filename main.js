var $addEntry = document.querySelector('.add-entry');
var $modalContainer = document.querySelector('.modal-container');
var $addEntryForm = document.querySelector('.add-entry-form');
var $weekdayBoxesContainer = document.querySelector('.weekday-boxes-container');
var $weekdayBoxes = document.querySelectorAll('.column-seventh');
var $span = document.querySelector('span');

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'modal-container';
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  $modalContainer.className = 'modal-conatiner hidden';
});

$weekdayBoxesContainer.addEventListener('click', function (event) {
  $weekdayBoxes.className = 'column-seventh';
  if (event.target.matches('.column-seventh')) {
    var weekdayClicked = event.target.getAttribute('data-day');
    $span.textContent = weekdayClicked;
    for (var i = 0; i < $weekdayBoxes.length; i++) {
      $weekdayBoxes[i].className = 'column-seventh';
    }
    event.target.className = 'column-seventh chosen-day';
  }
});
