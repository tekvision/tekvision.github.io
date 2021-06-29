$(document).ready(function()
{
	$("div").keydown(function(e)
	{
		if(e.keyCode == 32 || e.keyCode == 13)
		{
			var id = $(this).attr("id");
			toggleSwitch(id);
		}
	});
	
	$("div").click(function()
	{
		var id = $(this).attr("id");
		toggleSwitch(id);
	});	
});	

function toggleSwitch(id) 
{
	if(id == "set1Container" || id == "set2Container")
	{
		if($("#"+id).attr("aria-checked") === "true")
		{
			$("#" + id).children(".toggler").css({"float": "left", "background":"white"});
			$("#" + id).attr("aria-checked", "false").toggleClass("onCheck");
			$("#" + id).prev().children().text("OFF");
			$("#" + id).prop("checked", false);
		}
		else
		{
			$("#" + id).children(".toggler").css({"float": "right", "background":"steelblue"});
			$("#" + id).attr("aria-checked", "true").toggleClass("onCheck");
			$("#" + id).prev().children().text("ON");
			$("#" + id).prop("checked", true);
		}
	}
	else
	{
		if($("#"+id).attr("class") === "containerElem onCheck")
		{
			$("#" + id).children(".toggler").css({"float": "left", "background":"white"});
			$("#" + id).toggleClass("onCheck");
			$("#" + id).prev().children().text("OFF");
			$("#" + id).prop("checked", false);
		}
		else
		{
			$("#" + id).children(".toggler").css({"float": "right", "background":"steelblue"});
			$("#" + id).toggleClass("onCheck");
			$("#" + id).prev().children().text("ON");
			$("#" + id).prop("checked", true);
		}
	}
}