// Get the button that opens the modal
var createTwitButton = document.getElementById('create-twit-button');

// Get the modal
var modalDialog = document.getElementsByClassName('modal-dialog');
var modalBackdrop = document.getElementById('modal-backdrop');
var createTwitModal = document.getElementById('create-twit-modal');

var modalHeader = document.getElementsByClassName('modal-header');

// Get the <span> element that closes the modal
var modalCloseButton = document.getElementsByClassName('modal-close-button');
var modalFooter = document.getElementsByClassName('modal-footer');


// When the user clicks the button, open the modal 
createTwitButton.onclick = function() {
    createTwitModal.style.display = "block";
}

var modalBody = document.getElementsByClassName('modal-body');
var twit = document.getElementsByClassName('twit');
var twitInputE = document.getElementsByClassName('twit-input-element');
var twitText = document.getElementById('twit-text-input').value;
var twitAttr = document.getElementById('twit-attribution-input').value;
var modalFooter = document.getElementsByClassName('modal-footer');


var modalAccept = document.getElementsByClassName('modal-accept-button');
var modalCancelButton = document.getElementsByClassName('modal-cancel-button');


modalAccept[0].onclick = function() {
	
	if (twitText === '' || twitAttr === '') { 
	window.alert("error: blank text/attribute");
    }
	
	twit.style.display = "twit";
	
	var newTwit = document.getElementById('twit-text-input');
	var newAttr = document.getElementById('twit-attribution-input');
	
	
	var newBox = document.createElement('article');
	var newText = document.createTextNode('hiugcyfe');
	newBox.appendChild(newtext);
	newBox.classList.add('twit-content');
	newBox.classList.add('twit-text');
	newBox.className = 'twit';
  
}


// When the user clicks anywhere on the screen outside the twit box, close the modal
window.onclick = function(event) {
    if (event.target == createTwitModal) {
        createTwitModal.style.display = "none";
    }
}

// When the user clicks on (x) or cancel, close the modal
modalCloseButton[0].onclick = function() {
	createTwitModal.classList.add("hidden");
    createTwitModal.style.display = "none";
}

modalCancelButton[0].onclick = function() {
    createTwitModal.style.display = "none";
}

