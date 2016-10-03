console.log('found me');

function click(e) {
  chrome.tabs.executeScript(null);
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  $('form').on('click', function(e){
    console.log(e.target)
  })
});
