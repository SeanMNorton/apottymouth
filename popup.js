console.log('found me');
//
function click(e) {
  console.log(e);
  chrome.tabs.executeScript(null, {file: "clean.js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('hey');
  // .on('click', click);
  var input = document.querySelectorAll('div');
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', click);
  }
});
