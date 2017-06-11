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
  var boxTemplate = views.webBox;
  var boxData = {
    title: Boxtitle,
    description: Boxdescription,
    titleLink: BoxtitleLink,
    photoURL: BoxphotoURL,
    style: "lonely"
  };
  /*res.render('webBox', templateArgs);*/
  return boxTemplate(boxData);
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

var createBoxButton = document.getElementById('create-box-button');
createBoxButton.addEventListener('click', showCreateBoxModal);

var modalCloseButton = document.querySelector('#create-box-modal .modal-close-button');
modalCloseButton.addEventListener('click', closeCreateBoxModal);

var modalCancelButton = document.querySelector('#create-box-modal .modal-cancel-button');
modalCancelButton.addEventListener('click', closeCreateBoxModal);

var modalAcceptButton = document.querySelector('#create-box-modal .modal-accept-button');
modalAcceptButton.addEventListener('click', insertNewBox);
