export default {
	onSelectContent: () => {
		let editBox = document.getElementsByClassName("editable1")[0];
		let range = document.createRange();
		range.selectNode(editBox);
		window.getSelection().addRange(range);
	},
	onAddMultiRange: () => {
		let strongs = document.getElementsByTagName("strong");
		let s = window.getSelection();
		for(let i = 0; i < strongs.length; i++) {
			let range = document.createRange();
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
		window.getSelection().removeAllRanges();
		let range = document.createRange();
		let text = document.getElementsByClassName("input-be-copied")[0].value;
		let input = document.createElement("input");
		input.setAttribute("value", text);
		document.body.appendChild(input);
		input.select(); // 使用input作为中介时，这句代码缺失，将复制失败
		range.selectNode(input);
		window.getSelection().addRange(range);
		document.execCommand("Copy");
		document.body.removeChild(input);
	},
	onCopyDataVisible: () => {
		window.getSelection().removeAllRanges();
		let div = document.getElementsByClassName("div-be-copied")[0];
		let range = document.createRange();re
		range.selectNode(div);
		window.getSelection().addRange(range);
		document.execCommand("Copy");
	},
	onCopyDataHidden: () => {
		let s = window.getSelection();
		s.removeAllRanges();
		let div = document.createElement("div");
		div.innerHTML = "我是隐蔽的DIV";
		document.body.appendChild(div);
		let range = document.createRange();
		range.selectNode(div);
		s.addRange(range);
		document.execCommand("Copy");
		document.body.removeChild(div);
	},
}