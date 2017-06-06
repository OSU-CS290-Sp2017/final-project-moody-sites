var lonelyKeywords = ["lonely","sad","depressed","alone","needy"];
var boredKeywords = ["bored","unamused","tired","curious","lame"];
var funnyKeywords = ["funny","humorous","laughable","comical","hilarious"];
var hungryKeywords = ["hungry","starving","hangry","lathargic","empty"];




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
  for(var k=0;k<5;k++){
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

searchButton.addEventListener('click',searchFunction);
