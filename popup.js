function click(e) {
  chrome.storage.sync.get(['clean'], function(resp) {
    console.log(resp);
    if (resp.clean !== 'true') {
      chrome.tabs.executeScript(null, {file: "clean.js"});
      chrome.storage.sync.set({'clean': 'true'}, function(){
        console.log('Filter setting was set to true.')
      })
    } else {
      chrome.storage.sync.set({'clean': 'false'}, function(){
        console.log('Filter setting was set to false.')
      })
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelectorAll('div');
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', click);
  }
});
