"use strict";
	var listbox = document.getElementById("listbox");
	listbox.addEventListener("keydown", function(event) {
		handleOuterKeyDown(event, listbox.getAttribute("aria-activedescendant"));
	});

	var listItem = document.getElementsByClassName("listbox1-listItem");
	var lastItem;
	var c = 0; //will work as counter.
	function handleOuterKeyDown(event, activeChildId) {
		switch(event.keyCode) {
			case 38://up arrow.

			listItem[c-1].setAttribute("aria-selected","true");
			listItem[c].setAttribute("aria-selected","false");
			activeChildId = listItem[c-1].id;
			lastItem = activeChildId;
			listbox.setAttribute("aria-activedescendant", activeChildId);
			c--;
			break;
			case 40://down arrow.
			listItem[c+1].setAttribute("aria-selected","true");
			listItem[c].setAttribute("aria-selected","false");
			activeChildId = listItem[c+1].id;
			lastItem = activeChildId;
			listbox.setAttribute("aria-activedescendant", activeChildId);
			c++;
			break;
			default:
			break;
		}
	}


	listbox.addEventListener("keydown", handleClick);
	listbox.addEventListener("click", handleClick);


	var innerListbox;
	var innerListItem;
	var innerLastItem;

	function handleClick(event) {
		switch(event.keyCode) {
			case 13:
			document.getElementById("heading1").focus();
			listbox.removeAttribute("role");
			listbox.setAttribute("tabindex","-1");
			for(var i = 0; i < listItem.length; i++) {
				listItem[i].removeAttribute("role");
			}
			listItem[c].nextElementSibling.removeAttribute("hidden");
			document.getElementById(lastItem + "_listbox").focus();
			innerListbox = document.getElementById(lastItem + "_listbox");
			innerListbox.addEventListener("keydown", function(event) {
				handleInnerKeyDown(event, innerListbox.getAttribute("aria-activedescendant"));
			});
			innerListItem = innerListbox.lastElementChild.firstElementChild;
			innerLastItem = innerListItem;
			listbox.removeEventListener("click", handleClick);
			listbox.removeEventListener("keydown", handleClick);
			break;
			default:
			break;
		}
		}


	function handleInnerKeyDown(event, innerActiveChildId) {

		switch(event.keyCode) {
			case 38://up arrow.
			if(innerListItem == null) {
				innerListItem = innerLastItem;
			}
			innerListItem = innerListItem.previousElementSibling;
			if(innerListItem != null) {
				innerLastItem = innerListItem;
			}
			innerActiveChildId = innerListItem.id;
			innerListbox.setAttribute("aria-activedescendant",innerActiveChildId);
			break;
			case 40://down arrow.
			if(innerListItem == null) {
				innerListItem = innerLastItem;
			}

			innerListItem = innerListItem.nextElementSibling;
			if(innerListItem != null) {
				innerLastItem = innerListItem;
			}
			innerActiveChildId = innerListItem.id;
			innerListbox.setAttribute("aria-activedescendant", innerActiveChildId);
			break;
			case 27: //escape.
			document.getElementById("heading1").focus();
			listItem[c].nextElementSibling.setAttribute("hidden","");
			listbox.setAttribute("role","listbox");
			for(var i = 0; i < listItem.length; i++) {
				listItem[i].setAttribute("role","option");
			}
			listbox.setAttribute("tabindex","0");
			listbox.focus();
			listbox.addEventListener("click", handleClick);
			listbox.addEventListener("keydown", handleClick);
			break;
			default:
			break;
		}
	}
