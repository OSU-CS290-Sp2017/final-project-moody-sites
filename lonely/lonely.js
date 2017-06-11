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

function generateNewBox(title, description, titleLink, photoURL) {
  var boxTemplate = Handlebars.templates.box;
  var boxData = {
    title: boxTitle,
    description: boxDescription,
    titleLink: boxTitleLink,
    photoURL: boxPhotoURL
  };
  return boxTemplate(boxData);
}

function insertNewBox() {

  var boxTitle = document.getElementById('box-title-input').value;
  var boxDescription = document.getElementById('box-description-input').value;
  var boxTitleLink = document.getElementById('box-link-input').value;
  var boxPhotoURL = document.getElementById('box-photoURL-input').value;

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
