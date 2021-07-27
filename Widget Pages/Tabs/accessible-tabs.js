$(document).ready(function()
{
	$("[id='autoActivationTabs']").children().keydown(function(e)
	{
		switch(e.keyCode)
		{
			case 39 : navigateRightAndAutoActivate($(this));break;
			case 37 : navigateLeftAndAutoActivate($(this));break;
		}
	});
	
	$("[id='manualActivationTabs']").children().keydown(function(e)
	{
		switch(e.keyCode)
		{
			case 39 : navigateRight($(this));break;
			case 37 : navigateLeft($(this));break;
			case 13 : activate($(this));break;
			case 32 : activate($(this));break;
		}
	});
	
	$("[id='autoActivationTabs']").children().click(function()
	{
		activate($(this));
	});
	
	$("[id='manualActivationTabs']").children().click(function()
	{
		activate($(this));
	});
});

function navigateRightAndAutoActivate(tab)
{
	var index = $(tab).index();
	var childrenLength = $(tab).parent().children().length;
	var panelId;
	
	if(index == childrenLength - 1)
	{
		$(tab).parent().children().removeClass("activate").attr("tabindex","-1");
		$(tab).parent().children().eq(0).focus().click().addClass("activate").attr({"aria-selected" : "true", "tabindex": "0"});
		$("#" + panelId).children().eq(0).attr("aria-controls");
		$("#" + panelId).parent().children().not(":eq(0)").removeClass().addClass("tab_Panel hide");
		$("#" + panelId).removeClass("hide").addClass("show");
	}
	else
	{	
		$(tab).parent().children().removeClass("activate").attr({"tabindex":"-1", "aria-selected" : "false"});
		$(tab).next().focus().click().addClass("activate").attr({"aria-selected" : "true", "tabindex": "0"});
		panelId = $(tab).next().attr("aria-controls");
		$("#" + panelId).parent().children().not(":eq(0)").removeClass().addClass("tab_Panel hide");
		$("#" + panelId).removeClass("hide").addClass("show");
	}
}

function navigateLeftAndAutoActivate(tab)
{
	var index = $(tab).index();
	var childrenLength = $(tab).parent().children().length;
	var panelId;
	if(index == 0)
	{
		$(tab).parent().children().removeClass("activate").attr("tabindex","-1");
		$(tab).parent().children().eq(childrenLength - 1).focus().click().addClass("activate").attr({"aria-selected" : "true", "tabindex": "0"});
		panelId = $(tab).parent().children().eq(childrenLength -1).attr("aria-controls");
		$("#" + panelId).parent().children().not(":eq(0)").removeClass().addClass("tab_Panel hide");
		$("#" + panelId).removeClass("hide").addClass("show");
	}
	else
	{	
		$(tab).parent().children().removeClass("activate").attr({"tabindex":"-1", "aria-selected" : "false"});
		$(tab).prev().focus().click().addClass("activate").attr({"aria-selected" : "true", "tabindex": "0"});
		panelId = $(tab).prev().attr("aria-controls");
		$("#" + panelId).parent().children().not(":eq(0)").removeClass().addClass("tab_Panel hide");
		$("#" + panelId).removeClass("hide").addClass("show");
	}
}

function navigateRight(tab)
{
	var index = $(tab).index();
	var childrenLength = $(tab).parent().children().length;
	var panelId = $(tab).attr("aria-controls");
	
	if(index == childrenLength - 1)
	{
		if($(tab).parent().children().eq(0).attr("aria-selected") == "true")
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).parent().children().eq(0).focus();
		}
		else
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).parent().children().eq(0).focus().addClass("focus");
		}
	}
	else
	{
		if($(tab).next().attr("aria-selected") == "true")
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).next().focus();
		}
		else	
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).next().focus().addClass("focus");
		}
	}
}

function navigateLeft(tab)
{
	var index = $(tab).index();
	var childrenLength = $(tab).parent().children().length;
	var panelId = $(tab).attr("aria-controls");
	if(index == 0)
	{
		if($(tab).parent().children().eq(childrenLength -1).attr("aria-selected") == "true")
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).parent().children().eq(childrenLength - 1).focus();
		}
		else
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).parent().children().eq(childrenLength -1).focus().addClass("focus");
		}
	}
	else
	{	
		if($(tab).prev().attr("aria-selected") == "true")
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).prev().focus();
		}
		else
		{
			$(tab).parent().children().removeClass("focus").addClass("tab");
			$(tab).prev().focus().addClass("focus");
		}
	}
}

function activate(tab)
{
	var panelId = $(tab).attr("aria-controls");
	if($(tab).attr("aria-selected") != "true")
	{	
		$(tab).parent().children().removeClass("activate focus").attr({"tabindex":"-1", "aria-selected" : "false"});
		$(tab).addClass("activate").attr({"aria-selected":"true", "tabindex":"0"});
		$("#" + panelId).parent().children().not(":eq(0)").removeClass().addClass("tab_Panel hide");
		$("#" + panelId).removeClass("hide").addClass("show");
	}
}