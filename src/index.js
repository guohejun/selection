import {BUTTON_MAP} from "./js/config"
import METHODS from "./js/methods"


var editBox = document.getElementsByClassName("editable1")[0];
editBox.innerHTML = "Hello World";

var btnListDom = document.getElementsByClassName("btn-list")[0];
var fragment = document.createDocumentFragment();
BUTTON_MAP.forEach(o => {
	var btn = document.createElement("button");
	btn.className = `btn ${o.className}`;
	btn.setAttribute("data-func-name", o.funcName);
	btn.innerHTML = `${o.label}`;
	fragment.appendChild(btn);
});
btnListDom.appendChild(fragment);

var btnList = btnListDom.childNodes;
btnList.forEach(btn => {
	let funcName = METHODS[btn.getAttribute("data-func-name")];
	btn.onclick = function () {
		funcName();
	}
});