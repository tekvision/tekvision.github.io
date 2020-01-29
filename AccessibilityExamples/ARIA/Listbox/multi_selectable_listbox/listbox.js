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
				listItem = listItem.previousElementSibling;
				listbox.setAttribute("aria-activedescendant", listItem.id);
			}
			break;
			case 40:
			if(listItem.nextElementSibling == null) {
				break;
			}
			else {
				listItem = listItem.nextElementSibling;
				listbox.setAttribute("aria-activedescendant", listItem.id);
			} 
			break;
			case 32://Space to select the item.
			if(listItem.getAttribute("aria-selected") == "false") {
				listItem.setAttribute("aria-selected","true");
			}
			else {
				listItem.setAttribute("aria-selected","false");
			}
			break;
			default:
			break;
		}

	}

	listbox.addEventListener("click", function() {
		if(listItem.getAttribute("aria-selected") == "false") {
			listItem.setAttribute("aria-selected","true");
		}
		else {
			listItem.setAttribute("aria-selected","false");
		}
	});

