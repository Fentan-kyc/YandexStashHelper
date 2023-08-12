// ==UserScript==
// @name         YandexStashHelper Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Fentan
// @require	     https://cdn.jsdelivr.net/npm/toastify-js
// @resource     TOASTIFY_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @match        https://logistics.market.yandex.ru/tpl-outlet/*/cargo-placement
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant GM.xmlHttpRequest
// ==/UserScript==

const TOAST_DURATION = 10 * 1000




var accessToken;
var canvas = document.createElement('canvas');

(async function() {
    GM_addStyle(GM_getResourceText('TOASTIFY_CSS'));
	canvas.width = 2000;
	canvas.height = 2000;
	canvas.style.display = 'none';
	canvas = document.body.appendChild(canvas);

	
	Toastify({
		text: 'Obtaining access token...',
		duration: TOAST_DURATION
	}).showToast();
	accessToken = await getAccessToken();
	Toastify({
		text: `Obtained access token ${accessToken}!`,
		duration: TOAST_DURATION
	}).showToast();
    
})();

async function getAccessToken() {
    const url = window.location.href;
	return url.split('/')[4];
}