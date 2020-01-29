
function expand1() {
var n = document.getElementById("list");
var x = document.getElementById("list").getAttribute("aria-expanded");
if(x == "true") {
n.setAttribute("aria-expanded", "false");
return false;
}
else {
n.setAttribute("aria-expanded", "true");
return false;
}
return true;
}
function expand2() {
var n1 = document.getElementById("list1");
var x1 = document.getElementById("list1").getAttribute("aria-expanded");
if(x1 == "true") {
n1.setAttribute("aria-expanded", "false");
return false;
}
else {
n1.setAttribute("aria-expanded", "true");
return false;
}
return true;
}

