function getText(e) {
	var text = "";

	for (var x = e.firstChild; x != null; x = x.nextSibling) {
		if (x.nodeType == x.TEXT_NODE) {
			text += x.data;
		} else if (x.nodeType == x.ELEMENT_NODE) {
			text += getText(x);
		}
	}

	return text;
}


var path = window.location.pathname;

var hs = document.getElementsByTagName("h2");

for (var i = 0; i < hs.length; i++) {
	if (hs[i].id) {
		var id = hs[i].id;
		var text = getText(hs[i]);
		console.log("<li><a href=" + path + "#" + id + ">" + text + "</a>");
	}
}