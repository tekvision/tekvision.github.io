$(document).ready(function()
{
	var tr,td,cell;
	td=$("td").length;
	tr=$("tr").length;
	cell=td/(tr-1);//one tr have that much of td
	//alert(cell);
	var pos=0;
	$("th:eq(0)").focus();
	$("td,th").keydown(function(e)
	{
		var focusedElement = new Array();
		lastFocusable = document.activeElement;
		focusedElement.push(pos, 0, lastFocusable);
		++pos;
		console.log(focusedElement.join());
		//alert(focusedElement+"  "+focusedElement.length);
		switch(e.keyCode)
		{
			//case 37: $(this).parent().prev().children("a.link").focus();break;
			//case 39: $(this).parent().next().children("a.link").focus();break;
			//case 40:$(this).parent().parent().next().children("td").children("a.link[name="+$(this).attr("name")+"]").focus();break;
			//case 38:$(this).parent().parent().prev().children("td").children("a.link[name="+$(this).attr("name")+"]").focus();break;
			case 37 : var first_cell = $(this).index();
					  if(first_cell == 0)
					  {
						deactivateButtons(this);
						$("th, td").attr("tabindex","-1");
						$(this).parent().prev().children().focus().attr("tabindex","0");
					  }
					  else
						$("th, td").attr("tabindex","-1");
						$(this).prev().focus().attr("tabindex","0");break;//left arrow
						
			case 39 : var last_cell=$(this).index();
					  if(last_cell==cell-1)
					  {
						$("th, td").attr("tabindex","-1");  
						$(this).parent().next().children().eq(0).focus().attr("tabindex","0");
					  }
					  $("th, td").attr("tabindex","-1");
					  deactivateButtons(this);
					  $(this).next().focus().attr("tabindex","0");break;
					  //right arrow
					  
			case 40 : var child_cell = $(this).index();	
					  $("th, td").attr("tabindex","-1");
					  deactivateButtons(this);
					  $(this).parent().next().children().eq(child_cell).focus().attr("tabindex","0");break;//down arrow
					  
			case 38 : var parent_cell = $(this).index();
					  $("th, td").attr("tabindex","-1");
					  $(this).parent().prev().children().eq(parent_cell).focus().attr("tabindex","0");break;//up arrow	
		}
		
		if(e.keyCode === 120)
		{
			$("[role='gridcell']").children(".cell_btns").attr("tabindex","-1");
			if( $(this).index() === 0)
			{
				//$(this).children().attr("tabindex","0");
				//$(this).children().eq(0).focus();
				$(this).children("[role='toolbar']").children().eq(0).focus();
				$("#active").show().text("Toolbar Buttons Activated").fadeOut(1000);
			}		
		}
		
		/*else if(e.keyCode == 27)
		{
			$("[role='gridcell']").children(".cell_btns").attr("tabindex","-1");
			$(this).children().eq(0).css("outline","none");
			$("#active").show().text("Table Cell activated").fadeOut(1000);
		}*/
	});
	$("td,th").focusin(function()
	{
		$(this).css("outline","solid steelblue 3px");//.animate({'borderWidth': '3px','borderColor': 'steelblue'},1000);
	});
	$("td,th").focusout(function()
	{
		$(this).css("outline","none");//.animate({'borderWidth': '1px','borderColor': 'none'},500);
	});
	$(".cell_btns").focusin(function()
	{
		$(this).css("outline","solid black 3px");//animate({'borderWidth': '3px','borderColor': '#f37736'},100);
	});
	$(".cell_btns").focusout(function()
	{
		$(this).css("outline","none");//.animate({'borderWidth': '1px','borderColor': 'none'},500);
	});
	
	$(".cell_btns").keydown(function(evt)
	{
		switch(evt.keyCode)
		{
			
			case 39 : evt.stopPropagation();
					  $(this).next().focus();
					  return false ;
					  break;
					  
			case 37 : evt.stopPropagation();
					  $(this).prev().focus();
					  return false ;
					  break;
					  
			case 27: $(this).css("outline","none");
					 $(this).parent().parent().focus();
					 $("#active").show().text("Table Cell activated").fadeOut(1000);
					 break;
		}
	});
});

function deactivateButtons(fc)
{
	$(fc).children(".cell_btns").attr("tabindex","-1");
	//$("#active").show().text("Button Deactivated").fadeOut(1000);
}