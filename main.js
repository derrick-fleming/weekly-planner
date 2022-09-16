var $addEntry = document.querySelector('.add-entry');
var $modalContainer = document.querySelector('.modal-container');
var $addEntryForm = document.querySelector('.add-entry-form');
var $weekdayBoxesContainer = document.querySelector('.weekday-boxes-containers');
var $weekdayBoxes = document.querySelectorAll('.column-seventh');

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'modal-container';
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  $modalContainer.className = 'modal-conatiner hidden';
});
