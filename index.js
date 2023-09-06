// ==UserScript==
// @name         Fentan-kyc YandexStashHelper
// @namespace    https://github.com/Fentan-kyc/YandexStashHelper
// @version      0.3
// @description  Script for helping with perfect YandexMarket web-aplication
// @author       Fentan
// @match        https://logistics.market.yandex.ru/tpl-outlet/*/cargo-placement
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @require	     https://cdn.jsdelivr.net/npm/toastify-js
// @resource     TOASTIFY_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @updateURL    https://github.com/Fentan-kyc/YandexStashHelper/raw/main/index.js
// @downloadURL  https://github.com/Fentan-kyc/YandexStashHelper/main/index.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant GM.xmlHttpRequest
// ==/UserScript==

const TOAST_DURATION = 10 * -1




var accessToken;
var secretKey;
var button = document.createElement('button');
var menu = document.createElement('div');

(async function() {
    createMenu();
    createButton();

    (function(open) {
        XMLHttpRequest.prototype.open = function(XMLHttpRequest) {
          var self = this;
          this.addEventListener("readystatechange", function() {
            if(true){
                console.log(this.HEADERS_RECEIVED)
            }
          }, false);
          open.apply(this, arguments);
        };
      })(XMLHttpRequest.prototype.open);

})();

async function getAccessToken() {
    const url = window.location.href;
	return url.split('/')[4];
}

function createButton(){
    button.className = "YandexHelper__Button";
    button.innerText = "HELPER";
    button.style.display = "inline-block";
    button.style.bottom = "13px";
    button.style.position = "fixed";
    button.style.right = "10px";
    button.style.zIndex = 2147483647;
    button.style.textDecoration = "none";
    button.style.font = "inherit"
    button.style.background = "linear-gradient(135deg,#73a5ff,#5477f5)";
    button.style.cursor = "pointer"

    button = document.body.appendChild(button);

    button.onclick = function(){
        if(menu.style.display == "none")
        {
            menu.style.display = "inline-block"
        } else{
            menu.style.display = "none"
        }
    }
}

function createMenu(){
    button.className = "YandexHelper__Menu";
    menu.style.backgroundColor="#343334"
    menu.style.width="250px"
    menu.style.height="700px"
    menu.style.display = "inline-block";
    menu.style.top = "90px";
    menu.style.position = "fixed";
    menu.style.right = "10px";
    menu.style.font = "inherit"
    menu.style.zIndex = 2147483647;
    menu.style.textAlign = "center";
    menu.style.alignItems = "center";
    menu.style.padding = "15px 3px";
    menu.style.color = "white";
    menu.style.fontSize = "16px";

    var flexContainer = document.createElement('div')
    flexContainer.style.display = "flex";
    flexContainer.style.flexDirection = "column";

    var text = document.createElement('div');
    text.innerText = "Helper";
    text.style.paddingBottom = "7px";
    var input = document.createElement('input');

    flexContainer.append(text, input);
    menu.appendChild(flexContainer);
    menu = document.body.appendChild(menu);
    
}