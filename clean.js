// ANYTHING IN THIS FILE AFFECTS MAIN WEBPAGE
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
	text = text.replace(/Fuck/g, "F***");
  text = text.replace(/fuck/g, "f***");
	text = text.replace(/Shit/g, "Sh*t");
  text = text.replace(/shit/g, "sh*t");
	text = text.replace(/Ass/g, "A**");
	text = text.replace(/ass/g, "a**");
  return text
}
