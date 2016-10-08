// set checkmarks
var clean;
var prude;

chrome.storage.sync.get(['clean','prude'], function(resp) {
  if (resp.clean === 'true') {
    document.getElementById("censorbutton").checked = true;
    clean = 'true';
  }
  if (resp.prude === 'true'){
    document.getElementById("prudebutton").checked = true;
    prude = 'true';
  }
})

// click on censor option
function filterClick(e) {
  if (clean !== 'true') {
    chrome.storage.sync.set({'clean': 'true'}, function(){
      clean = 'true';
      execute('true')
    })
  } else {
    chrome.storage.sync.set({'clean': 'false'}, function(){
      clean = 'false';
      execute('false')
    })
  }
}

// click on prude option
function prudeClick(e) {
  if (prude !== 'true') {
    chrome.storage.sync.set({'prude': 'true'}, function(){
      prude = 'true';
      chrome.tabs.executeScript(null, {code:'location.reload()'})
    })
  } else {
    chrome.storage.sync.set({'prude': 'false'}, function(){
      prude = 'false';
      chrome.tabs.executeScript(null, {code:'location.reload()'})
    })
  }
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('censorbutton').addEventListener('click', filterClick);
  document.getElementById('prudebutton').addEventListener('click', prudeClick);
  document.getElementById('managext').addEventListener('click', function() {
    chrome.tabs.create({ url: 'chrome://chrome/extensions' });
  });
});

function execute(censorFilter){
  chrome.tabs.executeScript(null, {
    code: 'var filter = '+censorFilter+';'}, function() {
      chrome.tabs.executeScript(null, {file: 'filter.js'});
  });
}

//check this out... link below
// https://developer.chrome.com/extensions/browserAction#event-onClicked
//
// chrome.browserAction.onClicked.addListener(function callback)
