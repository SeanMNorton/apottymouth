// ANYTHING IN THIS FILE AFFECTS MAIN WEBPAGE
// var filter will be true or false
console.log(filter)
console.log(filter === true)
traverseDown(document.body);
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
	textNode.nodeValue = megaRegex(text);
}

function megaRegex(text) {
	if (filter === true) {
  	text = text.replace(/fuck/g, "f***");
  	text = text.replace(/shit/g, "sh*t");
		text = text.replace(/\-ass/g, "-a**");
	} else {
		text = text.replace(/f\*\*\*/g, "fuck");
		text = text.replace(/F\*\*\*/g, "Fuck");
  	text = text.replace(/sh\*t/g, "shit");
		text = text.replace(/Sh\*t/g, "Shit");
		text = text.replace(/a\*\*/g, "ass");
		text = text.replace(/A\*\*/g, "Ass");
	}
  return text
}
