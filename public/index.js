var lonelyKeywords = ["lonely","sad","depressed","alone","needy","mad","angry","deserted","homeless","empty"];
var boredKeywords = ["bored","unamused","tired","curious","lame","lazy","disinterested","fatigued","dull","inattentive"];
var funnyKeywords = ["funny","humorous","laughable","comical","hilarious","happy","playful","jolly","merry","entertaining"];
var hungryKeywords = ["hungry","starving","hangry","lathargic","empty","starved","craving","ravenous","greedy","eager"];




var searchBox = document.getElementById('search-input');
var allButtons = document.getElementsByClassName('moodButtons');
var searchButton = document.getElementById('search-button');

var lonelyButton = allButtons[3];
var boredButton = allButtons[0];
var hungryButton = allButtons[2];
var funnyButton = allButtons[1];


function searchFunction(){
  var isFound = false;
  var searchInput = searchBox.value.toLowerCase();
  // search for lonely
  for(var k=0;k<lonelyKeywords.length;k++){
    if(lonelyKeywords[k] == searchInput) {
      lonelyButton.classList.remove('hidden');
      isFound = true;
      break;
    }
    // search for bored
    else if(boredKeywords[k] == searchInput) {
      boredButton.classList.remove('hidden');
      isFound = true;
      break;
    }
    else if(hungryKeywords[k] == searchInput) {
      hungryButton.classList.remove('hidden');
      isFound = true;
      break;
    }
    else if(funnyKeywords[k] == searchInput) {
      funnyButton.classList.remove('hidden');
      isFound = true;
      break;
    }
  }
    if(!isFound){
        boredButton.classList.add('hidden');
        funnyButton.classList.add('hidden');
        hungryButton.classList.add('hidden');
        lonelyButton.classList.add('hidden');
        alert('Mood you searched for was not available. Please try again.')
      }

}

if(searchButton){
  searchButton.addEventListener('click',searchFunction);
}

/*****************************add box************************/
/**********************adding new webBox****************************/
var allBoxes = [];

function showCreateBoxModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createBoxModal = document.getElementById('create-box-modal');

  modalBackdrop.classList.remove('hidden');
  createBoxModal.classList.remove('hidden');
}

function closeCreateBoxModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createBoxModal = document.getElementById('create-box-modal');

  modalBackdrop.classList.add('hidden');
  createBoxModal.classList.add('hidden');

  clearBoxInputValues();
}

function clearBoxInputValues() {
  var boxInput = document.getElementsByClassName('box-input-element');
  for (var i = 0; i < boxInput.length; i++) {
    var input = boxInput[i].querySelector('input, textarea');
    input.value = '';
  }
}



function generateNewBox(Boxtitle, Boxdescription, BoxtitleLink, BoxphotoURL) {
  /*var boxTemplate = Handlebars.views.partials.webBox;*/
  var boxData = {
    title: Boxtitle,
    description: Boxdescription,
    titleLink: BoxtitleLink,
    photoURL: BoxphotoURL,
    style: "lonely"
  /*  title: boxTitle,
    description: boxDescription,
    titleLink: boxTitleLink,
    photoURL: boxPhotoURL,
    style: boxStyle*/
  };
  // res.render('webBox', templateArgs);
/*  return boxTemplate(boxData);*/
}

function insertNewBox() {

  var boxTitle = document.getElementById('box-title-input').value;
  var boxDescription = document.getElementById('box-description-input').value;
  var boxTitleLink = document.getElementById('box-link-input').value;
  var boxPhotoURL = document.getElementById('box-photoURL-input').value;
  /*var boxStyle = document.getElementById('lonely').value; /***********************/

  if (boxTitle && boxDescription && boxTitleLink && boxPhotoURL) {
      var newBox = generateNewBox(boxTitle, boxDescription, boxTitleLink, boxPhotoURL);
      var boxContainer = document.querySelector('.box-container');
      boxContainer.insertAdjacentHTML('beforehand', newBox);
      allBoxes.push(newBox);

      closeCreateBoxModal();
  } else {
    alert('You must specify the title, description, title link, and photo URL!');
  }
}




var boxCollection = document.getElementsByClassName('mood_box');
for (var i = 0; i < boxCollection.length; i++) {
  allBoxes.push(boxCollection[i]);
}


// window.addEventListener('DOMContentLoaded', function (event) {


  var createBoxButton = document.getElementById('create-box-button');
if(createBoxButton){
  createBoxButton.addEventListener('click', showCreateBoxModal);
}

  var modalCloseButton = document.querySelector('#create-box-modal .modal-close-button');
if(modalCloseButton){
  modalCloseButton.addEventListener('click', closeCreateBoxModal);
}
  var modalCancelButton = document.querySelector('#create-box-modal .modal-cancel-button');
if(modalCancelButton){
  modalCancelButton.addEventListener('click', closeCreateBoxModal);
}
  var modalAcceptButton = document.querySelector('#create-box-modal .modal-accept-button');
if(modalAcceptButton){
  modalAcceptButton.addEventListener('click', insertNewBox);
}
// });
