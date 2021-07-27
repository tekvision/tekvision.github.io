$(document).ready(function() {
	var alertDialog = $("#alert_dialog");
	var firstFocusableField = $("#yes");
	var lastFocusableField = $("#no");
	var main = $("#main");
	var openAlertDialog = $("#alert_dialog_open");
	
	$(openAlertDialog).click(function() {
		openDialog(alertDialog, firstFocusableField, main);
	});
	
	$(lastFocusableField).click(function() {
		closeDialog(alertDialog, openAlertDialog, main);
	});
	
	$(alertDialog).keydown(function(e) {
		switch(e.keyCode) {
			case 9:
				if(e.shiftKey && $(firstFocusableField).is(':focus')) {
					e.preventDefault();
					lastFocusableField.focus();
				}
				else if(!e.shiftKey && $(lastFocusableField).is(':focus')) {
					e.preventDefault();
					firstFocusableField.focus();
				}
			break;
			case 27:
				closeDialog(alertDialog, openAlertDialog, main);
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
