function click(e) {
  var filter;
  chrome.storage.sync.get(['clean'], function(resp) {
    console.log(resp);
    if (resp.clean !== 'true') {
      chrome.storage.sync.set({'clean': 'true'}, function(){
        console.log('Filter setting was set to true.')
        filter = 'true'
        chrome.tabs.executeScript(null, {
          code: 'var filter = '+filter+';'}, function() {
            chrome.tabs.executeScript(null, {file: 'filter.js'});
        });
      })
    } else {
      chrome.storage.sync.set({'clean': 'false'}, function(){
        console.log('Filter setting was set to false.')
        filter = 'false'
        chrome.tabs.executeScript(null, {
          code: 'var filter = '+filter+';'}, function() {
            chrome.tabs.executeScript(null, {file: 'filter.js'});
        });
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
