$(document).ready(function()
{
	$("a[role='menuitem']").keydown(function(e)
	{
		var activeElement = $(this);
		switch(e.keyCode)
		{
			case 39 : 
				rightArrowInteraction(activeElement);	
				break;
			case 37 : 
				leftArrowInteraction(activeElement);
				break;
			case 40 :
				downArrowInteraction(activeElement);
				break;
			case 38 :
				upArrowInteraction(activeElement);
				break;
			case 13 :
				enterInteraction(activeElement);
				break;
			case 32 :
				spaceInteraction(activeElement);
				break;	
			case 27 : 
				closeActionOnEscape(activeElement);
				break;
			case 35 :
				endKeyInteraction(activeElement);
				break;
			case 36 :
				homeKeyInteraction(activeElement);
				break;
		}
	});
	$("a[role='menuitem']").focusin(function()
	{
		$(this).parent().css("background-color","coral");//mediumseagreen
	});

	$("a[role='menuitem']").focusout(function()
	{
		$(this).parent().css("background-color","transparent");
	});
	
	var activeElement = $(this);
	$("a[role = 'menuitem']").hover(
	function()
	{
		if($(this).parent().children().length > 1)
		{
			if($(this).next().attr("class") == "float-right")
			{
				$(this).next().css("display", "block");
				$(this).attr("aria-expanded", "true");
				$(this).parent().css("background-color", "coral");
			}
			else
			{
				$("ul[role = 'menu']").css("display", "none");
				$("ul[role='menu']").prev().attr("aria-expanded", "false");
				$(this).next().css("display", "block");
				$(this).attr("aria-expanded", "true");
				$(this).parent().css("background-color", "coral");
			}
		}
		else
		{
			$(this).parent().css("background-color", "coral");
			$("ul[role='menu']").prev().attr("aria-expanded", "false");
		}
	},
	function()
	{
		$(this).parent().css("background-color", "transparent");
	});
});


function rightArrowInteraction(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var nextMenuItem = $(elem).parent().parent().parent().next().children().length;
	var menuItemLength = $(elem).parent().parent().children().length;
	var menuItemIndex = $(elem).parent().index();
	var childrenCount = $(elem).parent().children().length;//calculating the childrens
	if(parentRole == "menubar" )
	{
		if( (menuItemLength-menuItemIndex) == 1)
		{
			$("a").attr("tabindex","-1");
			$(elem).parent().parent().children().eq(0).children().eq(0).focus().attr("tabindex","0");
		}
		else
		{	
			$("a").attr("tabindex","-1");
			$(elem).parent().next().children().eq(0).focus().attr("tabindex","0");
		}
	}	
	else if( (parentRole == "menu" || parentRole == "menubar"))
	{
		if(childrenCount > 1)
		{
			$("a").attr("tabindex","-1");
			$(elem).attr("aria-expanded","true");
			$(elem).next().css("display","block");
			$(elem).next().children().eq(0).children().focus().attr("tabindex","0");
		}
		else if (nextMenuItem > 1)
		{
			$("a").attr("tabindex","-1");
			$("ul[role='menu']").css("display","none");//make all hide
			$("ul[role='menu']").prev().attr("aria-expanded","false");//make all collpase to SR
			$(elem).parent().parent().parent().next().children().eq(1).css("display","block");//open current child
			$(elem).parent().parent().parent().next().children().eq(0).focus().attr("tabindex","0");//focuses on first
			$(elem).parent().parent().parent().next().children().eq(0).attr("aria-expanded","true");//setting expanded to SR
		}
	
		else if(childrenCount == 1 && nextMenuItem == 1)
		{
			if( $(elem).parent().parent().attr("class") == "float-right") 
			{
				$("a").attr("tabindex","-1");
				$("ul[role = 'menu']").attr("aria-expanded","false").css("display","none");
				$(elem).parent().parent().parent().parent().parent().next().children().focus().attr("tabindex","0");
			}
			else
			{
				$("a").attr("tabindex","-1");
				$("ul[role='menu']").css("display","none");//make all hide
				//$("ul[role='menu']").prev().attr("aria-expanded","false");//make all collpase to SR
				$(elem).parent().parent().parent().next().children().eq(0).focus().attr("tabindex","0");
			}
		}
	}	
}

function leftArrowInteraction(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var prevMenuItem = $(elem).parent().parent().parent().prev().children().length;
	var basicSubMenu = $(elem).parent().parent().parent().parent().attr("role");
	var childrenCount = $(elem).parent().parent().parent().children().length;
	var menuItemLength = $(elem).parent().parent().children().length;
	var menuItemIndex = $(elem).parent().index();
	if(parentRole == "menubar")
	{
		if( menuItemIndex == 0)
		{
			$("a").attr("tabindex","-1");
			$(elem).parent().parent().children().eq(menuItemLength-1).children().eq(0).focus().attr("tabindex","0");
		}
		else
		{	
			$("a").attr("tabindex","-1");
			$(elem).parent().prev().children().eq(0).focus().attr("tabindex","0");
		}
	}
	else if( (parentRole == "menu" || parentRole == "menubar"))
	{
		if(childrenCount > 1 && basicSubMenu != "menubar")
		{
			$("a").attr("tabindex","-1");
			$(elem).attr("aria-expanded","false");
			$(elem).parent().parent().css("display","none");
			$(elem).parent().parent().prev().focus().attr("tabindex","0");
		}
		else if ( prevMenuItem > 1)
		{
			$("a").attr("tabindex","-1");
			$("ul[role='menu']").css("display","none");//make all hide
			$("ul[role='menu']").prev().attr("aria-expanded","false");//make all collpase to SR
			$(elem).parent().parent().parent().prev().children().eq(1).css("display","block");//open current child
			$(elem).parent().parent().parent().prev().children().eq(0).focus().attr("tabindex","0");//focuses on first
			$(elem).parent().parent().parent().prev().children().eq(0).attr("aria-expanded","true");//setting expanded to SR
		}
	
		else if(prevMenuItem == 1)
		{
			$("a").attr("tabindex","-1");
			$("ul[role='menu']").css("display","none");//make all hide
			$("ul[role='menu']").prev().attr("aria-expanded","false");//make all collpase to SR
			$(elem).parent().parent().parent().prev().children().eq(0).focus().attr("tabindex","0");
		}	
	}			
}

function downArrowInteraction(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var childrenCount = $(elem).parent().children().length;//calculating the childrens
	var index = $(elem).parent().index();
	var childLength = $(elem).parent().parent().children().length;
	
	if(parentRole == "menubar" && childrenCount > 1 )//if greter than one children
	{
		$("a").attr("tabindex","-1");
		$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).next().css("display","block");	
		$(elem).next().children().children().eq(0).focus().attr("tabindex","0");
		$(elem).attr("aria-expanded","true");
	}
	else if( (parentRole == "menu" || parentRole == "menubar") )
	{
		
		if( (childLength - index) == 1)
		{
			$("a").attr("tabindex","-1");
			$(elem).parent().parent().children().eq(0).children().eq(0).focus().attr("tabindex","0");
		}
		else
		{	
			$("a").attr("tabindex","-1");
			$(elem).parent().next().children().focus().attr("tabindex","0");
		}
	}
}

function upArrowInteraction(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var childrenCount = $(elem).parent().children().length;//calculating the childrens
	var index = $(elem).parent().index();
	var childLength = $(elem).parent().parent().children().length;
	
	if(parentRole == "menubar" && childrenCount > 1 )//if greter than one children
	{
		$("a").attr("tabindex","-1");
		$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).next().css("display","block");	
		$(elem).next().children().eq(childLength - 1).children().eq(0).focus().attr("tabindex","0");
	}
	else if( (parentRole == "menu" || parentRole == "menubar") )
	{
		if( (index == 0) )
		{
			$("a").attr("tabindex","-1");
			$(elem).parent().parent().children().eq(childLength-1).children().eq(0).focus().attr("tabindex","0");
		}
		else
		{	
			$("a").attr("tabindex","-1");
			$(elem).parent().prev().children().focus().attr("tabindex","0");
		}
	}
}

function enterInteraction(elem)
{
	var state = $(elem).next().css("display");
	if(state == "none")
	{
		$("a").attr("tabindex","-1");
		$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).next().css("display","block");
		$(elem).attr("aria-expanded","true");
		$(elem).next().children().children().eq(0).focus().attr("tabindex","0");
	}
}

function spaceInteraction(elem)
{
	var state = $(elem).next().css("display");
	if(state == "none")
	{
		$("a").attr("tabindex","-1");
		$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).next().css("display","block");
		$(elem).attr("aria-expanded","true");
		$(elem).next().children().children().eq(0).focus().attr("tabindex","0");
	}
}

function closeActionOnEscape(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var prevMenu = $(elem).parent().parent().attr("class");
	if(parentRole == "menu")
	{
		$("a").attr("tabindex","-1");
		$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).parent().parent().prev().focus().attr("tabindex","0");
	}
	else if(prevMenu == "float-right")
	{
		$("a").attr("tabindex","-1");
		$(elem).attr("aria-expanded","false");
		$(elem).parent().parent().css("display","none");
		$(elem).parent().parent().prev().focus().attr("tabindex","0");
	}
	else if(elem.attr("aria-expanded") == "true")
	{
		$(elem).next().css("display", "none");
		$(elem).attr("aria-expanded", "false");
	}
}

function endKeyInteraction(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var childLength = $(elem).parent().parent().children().length;
	if(parentRole == "menubar" || parentRole == "menu")
	{
		$("a").attr("tabindex","-1");
		//$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).parent().parent().children().eq(childLength-1).focus().attr("tabindex","0");
	}
}
function homeKeyInteraction(elem)
{
	var parentRole = $(elem).parent().parent().attr("role");
	var childLength = $(elem).parent().parent().children().length;
	if(parentRole == "menubar" || parentRole == "menu")
	{
		$("a").attr("tabindex","-1");
		//$("ul[role='menu']").css("display","none");
		$("ul[role='menu']").prev().attr("aria-expanded","false");
		$(elem).parent().parent().children().eq(0).focus().attr("tabindex","0");
	}
}

