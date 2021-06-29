$(document).ready(function()
{
	$("#pd input").focusin(function()
	{
		$(this).css("outline","dashed black 3px");
	});
	$("#pd input").focusout(function()
	{
		$(this).css("outline","none");
	});
	$("#pd input").blur(function(e)
	{
		onBlurValidation($(this));
	});
	$("#btnShow").click(function(e)
	{
		onSubmitValidations();
		e.preventDefault();
	});
	$("#btnReset").click(function()
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
	var fname=$("#fname").val();
	var lname=$("#lname").val();
	var mname=$("#mname").val();
	var eml= $("#email").val();
	var mob= $("#mob").val();
	
	$('input').each(function() 
	{
        if(!$(this).val() && $(this).attr("id") != "mname")
		{
           alert('Fill all required form fields!!');
		   $(this).focus();
		   $(this).next().css("display","block");
		   $(".accessible-input").attr("aria-invalid", "true");
           return false;
        }
		else 
		{
			$(this).attr("aria-invalid", "false");
		}
    });
	if( (fname != "") && (lname != "") && (eml != "") && (mob != "") )
	{
		$("#fname, #lname, #email, #mobno").attr("aria-invalid", "false");
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
	if($(formField).attr("id") != "mname" && $(formField).val() == "")
	{
		$(formField).next().css("display","block");
		$(formField).attr("aria-invalid", "true");
		//alert('wrong !!!');
	}
	else if($(formField.val()) != null && $(formField).attr("class") != "accessible-button")
	{
		$(formField).next().css("display", "none");
		$(formField).attr("aria-invalid", "false");
	}
}

function onInputValidation()
{
	
	
}