function click(e) {
  var filtered;
  chrome.storage.sync.get(['clean'], function(resp){
    filtered = resp.clean

    if (filtered === undefined) {
      filtered = 'false'
    }
  })

  switch (filtered) {
    case 'true':
      // chrome.tabs.executeScript(null, {code: "localStorage.clean = true"})
      chrome.storage.sync.set({'clean': 'false'}, function() {console.log('Settings saved')});
      console.log('case was true')
      break;
    default:
      // chrome.tabs.executeScript(null, {code: "localStorage.clean = false"})
      chrome.storage.sync.set({'clean': 'true'}, function() {console.log('Settings saved')});
      break;
  }

  if (localStorage.clean == 'true') {
    chrome.tabs.executeScript(null, {file: "clean.js"});
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // .on('click', click);
  var input = document.querySelectorAll('div');
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', click);
  }
});
