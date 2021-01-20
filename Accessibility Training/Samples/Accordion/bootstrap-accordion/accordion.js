$(document).ready(function()
{
	$("div[role = 'button']").keydown(function(e)
	{
		if((e.keyCode === 13 || e.keyCode === 32))
		{
			var id = $(this).attr("id");
			performKeyboardOperation(id);
		}
	});
	
	//$("div[role = 'button']").click(function()
	//{
	//	var id = $(this).attr("id");
	//	performKeyboardOperation(id);
	//});
	
	$("button").keydown(function(e)
	{
		if(e.keyCode == 13 || e.keyCode == 32)
		{
			$(this).click();
		}
	});
});

function performKeyboardOperation(id)
{
	if($("#" + id).attr("aria-expanded") == "true")
	{
		$("#" + id).click();
		$("#" + id).attr("aria-expanded","false");
		$("#" + id).attr("aria-disabled", "false");
	}
	else
	{
		$("#" + id).click();
		$("#" + id).attr("aria-expanded","true");
		$("#" + id).attr("aria-disabled", "true");
	}
}