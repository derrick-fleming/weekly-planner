var $addEntry = document.querySelector('.add-entry');
var $modalContainer = document.querySelector('.modal-container');
var $addEntryForm = document.querySelector('.add-entry-form');
var $weekdayBoxesContainer = document.querySelector('.weekday-boxes-container');
var $weekdayBoxes = document.querySelectorAll('.column-seventh');
var $span = document.querySelector('span');
var $tbody = document.querySelector('tbody');
var newEntry = {};

var data = {
  sunday: {
    entries: []
  },
  monday: {
    entries: []
  },
  tuesday: {
    entries: []
  },
  wednesday: {
    entries: []
  },
  thursday: {
    entries: []
  },
  friday: {
    entries: []
  },
  saturday: {
    entries: []
  }
};

var previousEntryDataJSON = localStorage.getItem('entry-data');

if (previousEntryDataJSON !== null) {
  data = JSON.parse(previousEntryDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);

  localStorage.setItem('entry-data', dataJSON);
});

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'modal-container';
});

$addEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  newEntry = {
    time: document.querySelector('#time').value,
    description: document.querySelector('#description').value
  };

  var day = document.querySelector('#day-of-week').value;
  data[day].entries.push(newEntry);

  $modalContainer.className = 'modal-conatiner hidden';

  createDomTree(newEntry);
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

function createDomTree(entry) {
  var $tr = document.createElement('tr');
  $tbody.appendChild($tr);
  var $tdTime = document.createElement('td');
  $tdTime.textContent = entry.time;
  $tr.appendChild($tdTime);
  var $tdDescription = document.createElement('td');
  $tdDescription.textContent = entry.description;
  $tr.appendChild($tdDescription);
  return $tr;
}
