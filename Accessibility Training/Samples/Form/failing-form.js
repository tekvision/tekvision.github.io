$(document).ready(function() {
	$("#failing-form").submit(function(e) {
		var valid = true;
		$($(".fail-required").get().reverse()).each(function() {
			if(!$(this).val() ) {
				var errorElementId = $(this).attr("id") + "-error";
				//var errorMessage = "Please " + $(this).prev().text();
				//$(this).next().attr("role", "alert");
				$(this).next().next().empty().text("This field is required!");
				//$(this).attr("aria-describedby", errorElementId);
				//$(this).attr("aria-invalid", "true");
				$(this).focus();
				$("#" + errorElementId).show();
				valid = false;
			}
			else {
				//$(this).removeAttr("aria-invalid");
				$(this).next().next().empty().hide();
			}
		});
			//return valid;
			e.preventDefault();
	});


});