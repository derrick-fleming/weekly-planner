var $addEntry = document.querySelector('.add-entry');
var $modalContainer = document.querySelector('.modal-container');
var $addEntryForm = document.querySelector('.add-entry-form');

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'modal-container';
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  $modalContainer.className = 'modal-conatiner hidden';
});
