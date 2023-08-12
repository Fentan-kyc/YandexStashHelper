// ==UserScript==
// @name         YandexStashHelper Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Fentan
// @require	     https://cdn.jsdelivr.net/npm/toastify-js
// @resource     TOASTIFY_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @match        https://logistics.market.yandex.ru/tpl-outlet/22110915/cargo-placement/
// @match        https://logistics.market.yandex.ru/tpl-outlet/22110915/cargo-placement
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant GM.xmlHttpRequest
// ==/UserScript==

const TOAST_DURATION = 10 * 1000
var canvas = document.createElement('canvas');

(function() {
    GM_addStyle(GM_getResourceText('TOASTIFY_CSS'));
	canvas.width = 2000;
	canvas.height = 2000;
	canvas.style.display = 'none';
	canvas = document.body.appendChild(canvas);

	
	Toastify({
  text: "X",
  duration: -1,
  newWindow: true,
  close: false,
  gravity: "bottom", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){doSomething()} // Callback after click
}).showToast();
})();

const doSomething = () =>{
    document.body.style.color = 'red'
}