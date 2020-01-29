"use strict";
function speakMessage(msg) {
	document.getElementById("debug").innerHTML = msg;
	setTimeout(function() { document.getElementById("debug").innerHTML = ""; }, 2000);
}
	var tablist = document.getElementById("tablist1");;
	var tabItem = document.getElementById("tab1");
	tablist.addEventListener("keydown", handelKeyDown);

	function handelKeyDown(event) {
		var currentTab = document.getElementById(tablist.getAttribute("aria-activedescendant"));
		switch(event.keyCode) {
			case 37:
			if(tabItem.previousElementSibling == null) {
				break;
			}
			else {
				tabItem = tabItem.previousElementSibling;
				tablist.setAttribute("aria-activedescendant", tabItem.id);
				currentTab.setAttribute("aria-selected", "false");
				speakMessage("Focusing tab " + tabItem.id);
			}
			break;
			case 39:
			if(tabItem.nextElementSibling == null) {
				break;
			}
			else {
				tabItem = tabItem.nextElementSibling;
				tablist.setAttribute("aria-activedescendant", tabItem.id);
				currentTab.setAttribute("aria-selected", "false");
				speakMessage("Focusing tab " + tabItem.id);
			} 
			break;
			case 13:case 32://Enter to select the item.
			if(tabItem.getAttribute("aria-selected") == "false") {
				tabItem.setAttribute("aria-selected","true");
			}
		
			break;
			default:
			break;
		}

	}

	tablist.addEventListener("click", function() {
		if(tabItem.getAttribute("aria-selected") == "false") {
			tabItem.setAttribute("aria-selected","true");
		}
		else {
			tabItem.setAttribute("aria-selected","false");
		}
	});

