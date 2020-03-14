import "./assets/css/common.css"
import {BUTTON_MAP} from "./assets/js/config"
const METHODS = () => {import "./assets/js/methods"};


let editBox = document.getElementsByClassName("editable1")[0];
editBox.innerHTML = "Hello World";

let btnListDom = document.getElementsByClassName("btn-list")[0];
let fragment = document.createDocumentFragment();
BUTTON_MAP.forEach(o => {
	let btn = document.createElement("button");
	btn.className = `btn ${o.className}`;
	btn.setAttribute("data-func-name", o.funcName);
	btn.innerHTML = `${o.label}`;
	fragment.appendChild(btn);
});
btnListDom.appendChild(fragment);

let btnList = btnListDom.childNodes;
btnList.forEach(btn => {
	let funcName = METHODS[btn.getAttribute("data-func-name")];
	btn.onclick = function () {
		funcName();
	}
});
//
// setTimeout(() => {
// 	import(/* webpackChunkName: "methods" */ "./assets/js/methods").then(
// 		METHODS => {
// 			console.log("METHODS: ", METHODS);
// 			btnList.forEach(btn => {
// 				let funcName = METHODS[btn.getAttribute("data-func-name")];
// 				btn.onclick = function () {
// 					funcName();
// 				}
// 			});
// 		}
// 	)
// }, 5000);