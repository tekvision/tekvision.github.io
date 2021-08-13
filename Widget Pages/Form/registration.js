$(document).ready(function() {
	$("#form").submit(function(e) {
		var valid = true;
		$($(".required, #altEmail").get().reverse()).each(function() {
			var element = $(this);
			var errorElementId = $(this).attr("id") + "Error";
			if($(this).attr("type") == "radio") 
			{
				if($("input[type=radio][name=gender]:checked").length == 0) {
					//$("#radioError").attr("role", "alert");
					$("#radioError").empty().text("Please select your gender");
					$(this).parent().parent().attr("aria-describedby", "radioError");
					$(this).parent().parent().attr("aria-invalid", "true");
					$(this).focus();
					$("#radioError").show();
				} 
				else {
					$(this).parent().parent().removeAttr("aria-invalid");
					$(this).parent().parent().removeAttr("aria-describedby");
					$("#radioError").empty().hide();
				}
			}

			if(!$(this).val() ) 
			{
				var errorMessage = "Please " + $(this).parent().prev().children().text();
				if(errorElementId != "altEmailError")
				{
					$(this).parent().next().next().next().empty().text(errorMessage);
					$(this).attr("aria-describedby", errorElementId);
					$(this).attr("aria-invalid", "true");
					$(this).focus();
					$("#" + errorElementId).show();
					//$("#summaryError").remove();
					valid = false;
				}
			}
			else if($(this).val())
			{
				var elementId = $(this).attr("id");
				switch (elementId) 
				{
					case "primaryEmail":
						var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						if(!re.test($(this).val()))
    					{	
							showsErrorInline(element, errorElementId);
						}
						else
						{
							removeErrorAndAttributes(elementId, errorElementId);
						}
					break;
					case "altEmail":
						var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						if(!re.test($(this).val()))
						{	
							showsErrorInline(element, errorElementId);
						}
						else
						{
							removeErrorAndAttributes(elementId, errorElementId);
						}
					break;
					case "password":
						var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
						if(!re.test($(this).val()))
						{
							showsErrorInline(element, errorElementId);
						}
						else
						{
							removeErrorAndAttributes(elementId, errorElementId);
						}
					break;
					case "qualification":
					case "firstName":
					case "lastName":
					case "cnfPassword":
						removeErrorAndAttributes(elementId, errorElementId);
					break;
				}
			}
			else 
			{
				$(this).removeAttr("aria-invalid");
				$(this).parent().next().next().next().empty().hide();
				
			}
		});

		if(!valid) {
			$("#summaryError").empty().text("there are errors in the fields!, Please check.").show();
			return valid;
		}
		else {
			$("#summaryError").remove();
			return valid;
		}
	
	});


	$( ".required, .optional" ).keypress(function() {
		var element = $(this);
		validationOnInput(element);
		
	});

});

function showsErrorInline(element, errorElementId)
{
	var elementId = $(element).attr("id");
	$("#" + elementId).attr("aria-describedby", errorElementId);
	$("#" + elementId).attr("aria-invalid", "true");
	$("#" + errorElementId).empty().text("Please enter valid email");
	$("#" + errorElementId).show();
	$(element).focus();
}

function removeErrorAndAttributes(elementId, errorElementId)
{
	$("#" + elementId).removeAttr("aria-invalid").removeAttr("aria-describedby");
	$("#" + errorElementId).hide();
}

function validationOnInput(element)
{
	var errorElementId = $(element).attr("id") + "Error";
	var errorMessage = "Please " + $(element).parent().prev().children().text()
	var data = $(element).val();
	switch (errorElementId) {
		case "firstNameError":
		case "lastNameError":
			var re = /^[a-zA-Z ]+$/;
			if(!re.test(data))
    		{
				var countOfChildren = $(element).next().next().children();
				if(countOfChildren == 0 )
				{
					// $(element).next().next().append("<span></span>" );
					$("#" + errorElementId).attr("aria-live", "polite");
					$("#" + errorElementId).empty().text(errorMessage);
					$("#" + errorElementId).show();
				}
   	 		}
			else
			{
				$("#" + errorElementId).hide();
    		}
		break;
	
		case "primaryEmailError":
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!re.test(data))
    			{	
						$("#" + errorElementId).attr("aria-live", "polite");
						$("#" + errorElementId).empty().text(errorMessage);
						$("#" + errorElementId).show();
				}
				else
				{
					$("#" + errorElementId).hide();
    			}	
		break;

		case "passwordError":
		case "cnfPassowrdError":
				// var re = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})+$/;
				var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
				if(!re.test(data))
				{
						var characters = /[a-bA-Z]/;
						var numbers = /[0-9]/;
						var passLength = data.length;
						if(!passLength >= 8)
						{
							$("#" + errorElementId).attr("aria-live", "polite");
							$("#" + errorElementId).empty().text("Please use at least 8 characters");
							$("#" + errorElementId).show();
						}
						else if(!characters.test(data))
						{
							$("#" + errorElementId).attr("aria-live", "polite");
							$("#" + errorElementId).empty().text("Please use upper and lower case characters.");
							$("#" + errorElementId).show();
						}
						else if(!numbers.test(data))
						{
							$("#" + errorElementId).attr("aria-live", "polite");
							$("#" + errorElementId).empty().text("Please use 1 or more numbers");
							$("#" + errorElementId).show();
						}
						else
						{
							$("#" + errorElementId).hide();
						}
				}
		break;

	}
}