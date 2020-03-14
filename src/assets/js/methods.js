export default {
	onSelectContent: () => {
		var editBox = document.getElementsByClassName("editable1")[0];
		var range = document.createRange();
		range.selectNode(editBox);
		window.getSelection().addRange(range);
	},
	onAddMultiRange: () => {
		var strongs = document.getElementsByTagName("strong");
		var s = window.getSelection();
		for(var i = 0; i < strongs.length; i++) {
			var range = document.createRange();
			range.selectNode(strongs[i]);
			s.addRange(range);
		}
	},
	onRemoveAllRange: () => {
		window.getSelection().removeAllRanges();
	},
	onRemoveTargetRange: () => {
		window.getSelection().removeRange(window.getSelection().getRangeAt(0));
	},
	onCopyInput: () => {

	},
	onCopyDataVisible: () => {

	},
	onCopyDataHidden: () => {
		var s = window.getSelection();
		var input = document.createElement("div");
		input.setAttribute("contenteditable", true);
		var text = document.createTextNode("I hear you are going to copy me4 !");
		input.appendChild(text);
		document.body.appendChild(input);
		var range = document.createRange();
		range.selectNode(input);
		s.addRange(range);
		document.execCommand("Copy");
		document.body.removeChild(input);
	},
}