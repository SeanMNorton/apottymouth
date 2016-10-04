console.log('found me');

function click(e) {
  chrome.tabs.executeScript(null,{code:"console.log('DUUUUUDE')"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
// chrome.browserAction.onClicked.addListener(function(tab){
//   console.log('clicked!');
//   chrome.tabs.executeScript(null, {file: "popup.js"});
// });

//check this out... link below
// https://developer.chrome.com/extensions/browserAction#event-onClicked
//
// chrome.browserAction.onClicked.addListener(function callback)
