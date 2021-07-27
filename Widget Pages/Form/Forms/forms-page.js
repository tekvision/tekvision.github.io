$(document).ready(function()
{
	$("#acce-pd select,#acce-pd input:not(#acce-gender-group input)").on('blur', function(e)
	{
		onBlurValidation($(this));
	});
	$("#acce-pd select,#acce-pd input:not(#acce-gender-group input)").on('input', function(e)
	{
		handleOnInputValidations(e.target);
	});
	$("#acce-pd input[name=acce-gender]").on("blur",function()
	{
		handleBlurOnRadioButtons($(this));
	});
	$("#acce-pd input[name=acce-gender]").on("input", function(e)
	{
		handleOnInputOnRadioButtons(e.target);
	});
	$("#acce-pd select").on("change", function(e)
	{
		handleOnChangeOnSelect(e.target);
	});

	$("#acce-btnShow").click(function(e)
	{
		onSubmitValidations();
		e.preventDefault();
	});
	$("#acce-btnReset").click(function()
	{
		$("#dispPD").find("tr:not(:first)").remove();
		$("#btnShow").removeAttr("disabled");
		$("#unameProf").text("Showing Profile For ");
		$("#dataClear").css("display","block").fadeOut(5000);
		$(".accessible-error").css("display", "none");
	});
});

function onSubmitValidations()
{
	var fname =$("#acce-fname").val();
	var lname =$("#acce-lname").val();
	var mname =$("#acce-mname").val();
	var eml = $("#acce-email").val();
	var mob = $("#acce-mob").val();
	var gender = $('#acce-pd input[name=acce-gender]:checked').val();
	var qualification = $("#acce-qualification").val();

	$('#acce-pd input, select#acce-qualification').each(function() 
	{
        if(!$(this).val() && $(this).attr("id") != "acce-mname" && $(this).attr("id") != "acce-qualification")
		{
            alert('Fill all required form fields!!');
			$(this).focus();
			$(this).next().css("display","block");
			$(this).attr("aria-invalid", "true");
			return false;
        }
		else if($(this).attr("name") == "acce-gender" && gender == undefined)
		{
			alert("Please Select Your Gender!!");
			$(this).focus();
			$("#acce-error-gender").css("display","block");	
			$(".accessible-input").attr("aria-invalid", "true");
			return false;
		}
		else if($(this).attr("id") == "acce-qualification" && qualification == null)
		{
			alert("Please Select Your Qualification!!");
			$(this).focus();
			$(this).parent().next().css("display", "block");
			$(this).attr("aria-invalid", "true");
			return false;
		}
		else 
		{
			$(this).attr("aria-invalid", "false");
		}
    });
	if( (fname != "") && (lname != "") && (eml != "") && (mob != "") && (gender != undefined) && (qualification != null))
	{
		$("#acce-fname, #acce-lname, #acce-email, #acce-mobno, #acce-gender, #acce-qualification").attr("aria-invalid", "false");
		$("#dispPD").append("<tr><td>First Name</td>"+ 
							  "<td>"+fname+"</td>"+
						  "</tr>"+
						  "<tr><td>Middle Name</td>"+
							   "<td>"+mname+"</td>"+
						  "</tr>"+
						  "<tr><td>Last Name</td>"+
							   "<td>"+lname+"</td>"+
						  "</tr>"+
						  "<tr><td>Email Id</td>"+
							   "<td>"+eml+"</td>"+
						  "</tr>"+
						  "<tr><td>Mobile</td>"+
							   "<td>"+mob+"</td>"+
						  "</tr>");
		$(".accessible-error").css("display", "none");
		$(".accessible-input").attr("aria-invalid", "false");
		$("#accessible-form").submit();
		$("#unameProf").text("Showing Profile For "+fname+" "+mname+" "+lname);
		return true;
	}
}

function onBlurValidation(formField)
{
	if($(formField).attr("id") != "acce-mname" && $(formField).val() == "" || $(formField).val() == null)
	{
		$(formField).parent().next().css("display","block");
		$(formField).attr("aria-invalid", "true");
		//alert('wrong !!!');
	}
	else if($(formField.val()) != null && $(formField).attr("class") != "accessible-button")
	{
		$(formField).parent().next().css("display", "none");
		$(formField).attr("aria-invalid", "false");
	}
}
function handleBlurOnRadioButtons(radioButton)
{
	console.log($(radioButton).prop("checked"));
	if(!$(radioButton).prop("checked"))
	{
		$("#acce-error-gender").css("display", "block");
	}
	else if($(radioButton).prop("checked"))
	{
		$("#acce-error-gender").css("display", "none");
	}
}
function handleOnInputValidations(target)
{
	var valueOnInput = $(target).val();
	var targetId = $(target).attr("id");
	var targetName = $(target).attr("name");
	if(targetId != "mname")
	{
		if($(target).prop("tagName") == "INPUT" && targetName != "acce-gender" )
		{
			if(valueOnInput != "" || valueOnInput != null)
			{
				if($(target).parent().next().css("display") == "block")
				{
					$(target).parent().next().css("display", "none");
					$(target).attr("aria-invalid", "false");
				}
			}
		}	
	}
}

function handleOnInputOnRadioButtons(radioButton)
{
	if($(radioButton).prop("checked"))
	{
		$("#acce-error-gender").css("display", "none");
		$(radioButton).attr("aria-invalid", "false");
	}
}

function handleOnChangeOnSelect(select)
{
	console.log($(select).val());
	if($(select).val() != null || $(select).val() != undefined)
	{
		$(select).parent().next().css("display", "none");
		$(select).attr("aria-invalid", "false");
	}
	else
	{
		$(select).parent().next().css("display", "block");
		$(select).attr("aria-invalid", "true");
	}
}