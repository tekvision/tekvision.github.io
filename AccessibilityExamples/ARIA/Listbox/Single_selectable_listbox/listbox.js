"use strict";

	var listbox = document.querySelector('[role="listbox"]');
	var listItem = document.getElementById("option1");
	listbox.addEventListener("keydown", handelKeyDown);

	function handelKeyDown(event) {
		switch(event.keyCode) {
			case 38:
			if(listItem.previousElementSibling == null) {
				break;
			}
			else {
				listItem.setAttribute("aria-selected","false");
				listItem = listItem.previousElementSibling;
				listItem.setAttribute("aria-selected","true");
				listbox.setAttribute("aria-activedescendant", listItem.id);
			}
			break;
			case 40:
			if(listItem.nextElementSibling == null) {
				break;
			}
			else {
				listItem.setAttribute("aria-selected","false");
				listItem = listItem.nextElementSibling;
				listItem.setAttribute("aria-selected","true");
				listbox.setAttribute("aria-activedescendant", listItem.id);
			} 
			break;
			default:
			break;
		}
	}