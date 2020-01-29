"use strict";

var tab = document.querySelectorAll('[role="tab"]');
var tabpanel = document.querySelectorAll('[role="tabpanel"]');
var tablist = document.querySelector('[role="tablist"]');
var c= 0;

tablist.addEventListener("keydown", handelKeyDown);

function handelKeyDown(event) {
//alert(tab[0].id);
//alert(tablist);
switch(event.keyCode) {
case 37:
//alert("hi");
if(document.activeElement === tab[0]) {
tab[tab.length-1].focus();
c = tab.length-1;
}
else {
tab[c].previousElementSibling.focus();
c--;
}
break;
case 39:
if(document.activeElement === tab[tab.length-1]) {
tab[0].focus();
c = 0;
}
else {
tab[c].nextElementSibling.focus();
c++;
}

break;
case 35:
tab[tab.length-1].focus();
c = tab.length-1;
break;
case 36:
tab[0].focus();
c = 0;
break;
default:
break;
}
}

tablist.addEventListener("click", handelClick);

function handelClick(event) {
for(var i = 0; i < tab.length;i++) {
tab[i].setAttribute("aria-selected","false");
tab[i].setAttribute("tabindex","-1");
tabpanel[i].setAttribute("hidden","");
}

document.activeElement.setAttribute("aria-selected","true");
document.activeElement.removeAttribute("tabindex");
document.getElementById(document.activeElement.getAttribute("aria-controls")).removeAttribute("hidden");
}