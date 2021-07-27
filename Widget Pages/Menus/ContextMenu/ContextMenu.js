const context_menu = document.querySelector(".context-menu");

$(document).bind("contextmenu", function(e)
{	
	e.preventDefault();
	showContextMenu();
	$(".context-menu").offset(
	{	
		left:e.pageX + context_menu.offsetWidth > window.innerWidth ? window.innerWidth - context_menu.offsetWidth : e.pageX,
		top:e.pageY + context_menu.offsetHeight > window.innerHeight ? window.innerHeight - context_menu.offsetHeight : e.pageY
	});
	$(".context-menu").children().first().children().focus();	
});

$(document).click(function()
{
	showContextMenu(false);
});

$("[role = 'menuitem']").focusin(function()
{
	$(this).parent().css("background", "lightgrey");
});

$("[role = 'menuitem']").focusout(function()
{
	$(this).parent().css("background", "transparent");
});

$("[role = 'menuitem']").hover(
function()
{
	$(this).parent().css("background","lightgrey");
},
function()
{
	$(this).parent().css("background","transparent");
});

$("a").keydown(function(e)
{
	switch(e.keyCode)
	{
		case 38 : 
			upArrowInteraction($(this));
			break;
		case 40 :
			downArrowInteraction($(this));
			break;
		case 27 :
			escKeyInteraction($(this));
			break;
	}
});
function showContextMenu(show = true)
{
	context_menu.style.display = show ? "block" : "none";
}

function reloadAction()
{
	window.location.reload();
}

function disableContextAction()
{
	event.preventDefault();
}

function closeAction() 
{
  if (confirm("Do you Want To Close This TAB?")) 
  {
	close();
  }
}
function upArrowInteraction(elem)
{
	var last_menu_index = $(elem).index();
	var tagName = $(elem).prop("tagName");
	var subMenuChildrenCount = $(".context-sub-menu").children().length;
	if( last_menu_index == 0 && tagName == "A")
	{
		$("a").attr("tabindex","-1");
		$(elem).parent().parent().children().last().children("a").focus().attr("tabindex","0");
	}
	else if(tagName == "A")	
		$("a").attr("tabindex","-1");
		$(elem).parent().prev("li").children("a").focus().attr("tabindex","0");
}
function downArrowInteraction(elem)
{
	var last_menu_index = $(elem).index();
	var tagName = $(elem).prop("tagName");
	var subMenuChildrenCount = $(".context-sub-menu").children().length;
	if(last_menu_index == $(elem).length-1)
	{
		$("a").attr("tabindex","-1");
		$(elem).parent().parent().children().first().children("a").focus().attr("tabindex","0");
	}
	else
		$("a").attr("tabindex","-1");
		$(elem).parent().next("li").children("a").focus().attr("tabindex","0");
}
function rightArrowInteraction(elem)
{
	var tagName = $(elem).prop("tagName");
	var subMenuChildrenCount = $(".context-sub-menu").children().length;
}
function escKeyInteraction(elem)
{
	if(tagName == "A")
	{
		$(elem).parent().parent().css("display","none");
	}
}
