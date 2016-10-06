// var reA = new RegExp(/(\b| )a /ig)
//
// $("p, h1, h2, a, span, li").each(function(){
//   var old = $(this).text()
//   var fuckingMatch = old.match(reA)
//   if (fuckingMatch){
//     $(this).text(old.replace(reA, " " + fuckingMatch[0] + " fucking "))
//   }
// })
//
//
var filter;
setTimeout(function () {
  // changeTitle();
  chrome.storage.sync.get(['clean','prude'], function(resp) {
    console.log(resp);
    if (resp.prude !== 'true'){
      filter = resp.clean;
      traverseDown(document.body);
    }
  })
}, 300);

// function changeTitle() {
//   var oldTitle = $(document).attr('title')
//   $(document).attr("title", megaRegex(oldTitle));
// }

function traverseDown(node) {
	var child, nextSib;

	switch ( node.nodeType )
	{
		case 1://Element
		case 9:// Document
		case 11:// Document fragment
			child = node.firstChild;
			while ( child )
			{
				nextSib = child.nextSibling;
				traverseDown(child);
				child = nextSib;
			}
			break;

		case 3: // Text node

			replacementTime(node);
			break;
	}
}

function replacementTime(textNode) {
	var text = textNode.nodeValue;
  if (filter !== 'true') {
    textNode.nodeValue = megaRegex(text);
  } else {
    textNode.nodeValue = megaCleanRegex(text);
  }
}

function megaRegex(text) {
  text = text.replace(/\ba /g, "a fucking ");
  text = text.replace(/\bA /g, "A fucking ");
  text = text.replace(/\bhuge /g, " huge-ass ");
  text = text.replace(/\bHuge /g, "Huge-ass ");
  text = text.replace(/\bbig /g, " big-ass ");
  text = text.replace(/\bBig /g, "Big-ass ");
  text = text.replace(/\bpoop/g, "shit");
  text = text.replace(/\bPoop/g, "Shit");
  return text
}

function megaCleanRegex(text) {
  text = text.replace(/\ba /g, "a f***ing ");
  text = text.replace(/\bA /g, "A f***ing ");
  text = text.replace(/\bhuge /g, " huge-a** ");
  text = text.replace(/\bHuge /g, "Huge-a** ");
  text = text.replace(/\bbig /g, " big-a** ");
  text = text.replace(/\bBig /g, "Big-a** ");
  text = text.replace(/\bpoop/g, "sh*t");
  text = text.replace(/\bPoop/g, "Sh*t");
  return text
}
