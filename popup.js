// set checkmark
chrome.storage.sync.get(['clean','prude'], function(resp) {
  if (resp.clean === 'true') {
    document.getElementById("pottymouthfilterbutton").checked = true;
  }
  if (resp.prude === 'true'){
    document.getElementById("prudebutton").checked = true;
  }
})

function filterClick(e) {
  chrome.storage.sync.get(['clean'], function(resp) {
    if (resp.clean !== 'true') {
      chrome.storage.sync.set({'clean': 'true'}, function(){
        execute('true')
      })
    } else {
      chrome.storage.sync.set({'clean': 'false'}, function(){
        execute('false')
      })
    }
  })
}

function prudeClick(e) {
  chrome.storage.sync.get(['prude'], function(resp) {
    if (resp.prude !== 'true') {
      console.log('it was true')
      chrome.storage.sync.set({'prude': 'true'}, function(){
        chrome.tabs.executeScript(null, {code:'location.reload()'})
      })
    } else {
      chrome.storage.sync.set({'prude': 'false'}, function(){
      })
    }
  })
}


document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelectorAll('input');
    input[0].addEventListener('click', filterClick);
    input[1].addEventListener('click', prudeClick);



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
// chrome.browserAction.onClicked.addListener(function(tab){
//   console.log('clicked!');
//   chrome.tabs.executeScript(null, {file: "popup.js"});
// });

//check this out... link below
// https://developer.chrome.com/extensions/browserAction#event-onClicked
//
// chrome.browserAction.onClicked.addListener(function callback)
