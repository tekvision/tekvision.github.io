$(document).ready(function() {
	var modalDialog = $("#modal_dialog");
	var firstFocusableField = $("#username");
	var lastFocusableField = $("#cancel");
	var main = $("#main");
	var openModalDialog = $("#modal_dialog_open");
	
	$(openModalDialog).click(function() {
		openDialog(modalDialog, firstFocusableField, main);
	});
	
	$(lastFocusableField).click(function() {
		closeDialog(modalDialog, openModalDialog, main);
	});
	
	$(".dialog").keydown(function(e) {
		var interactiveElements = $(modalDialog).find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
		var firstInteractiveElement = interactiveElements[0];
		var lastInteractiveElement = interactiveElements[interactiveElements.length -1];
		switch(e.keyCode) {
			case 9:
				if(e.shiftKey && $(firstInteractiveElement).is(':focus')) {
					e.preventDefault();
					lastInteractiveElement.focus();
				}
				else if(!e.shiftKey && $(lastInteractiveElement).is(':focus')) {
					e.preventDefault();
					firstInteractiveElement.focus();
				}
			break;
			case 27:
				closeDialog(modalDialog, openModalDialog, main);
			break;
			default:
			break;
		}
	});
	
});

function openDialog(modalDialog, firstFocusableField, main) {
	modalDialog.show();
	firstFocusableField.focus();
	main.attr("aria-hidden", "true");
}

function closeDialog(modalDialog, openModalDialog, main) {
	main.removeAttr("aria-hidden");
	openModalDialog.focus();
	modalDialog.hide();
}
