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

	// Get the token
	Toastify({
		text: 'Hi...I\'m alive!',
		duration: TOAST_DURATION
	}).showToast();
})();