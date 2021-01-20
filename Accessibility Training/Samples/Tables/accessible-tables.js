$(document).ready(function()
{
	$("[class='sortableElement btn btn-dark']").click(function()
	{
		toggleState($(this));
	});
});

function toggleState(sortableElement)
{
	var sorted = $(sortableElement).attr("aria-sort");
	if(sorted == "none")
	{
		$(sortableElement).attr("aria-sort","ascending");
		$(sortableElement).children().attr("class","fa fa-caret-down");
	}
	else if(sorted == "ascending")
	{
		$(sortableElement).attr("aria-sort","descending");
		$(sortableElement).children().attr("class","fa fa-caret-up");
	}
	else
	{
		$(sortableElement).attr("aria-sort","none");
		$(sortableElement).children().attr("class","");
	}
}