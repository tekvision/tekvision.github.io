$(document).ready(function()
{
    $("#pl, #hl, #cl ").keydown(function(e)
    {
        if(e.keyCode === 32 || e.keyCode === 13)
        {
            var id = $(this).attr("id");
            e.preventDefault();
            toggleShowOnlyAccordion(id);
        }
    });

    $("#pl, #hl, #cl ").click(function()
    {
        var id = $(this).attr("id");
        toggleShowOnlyAccordion(id);
    });

    $("#cc, #dc, #plcc").click(function()
    {
        var id = $(this).attr("id");
        performToggleableAccordion(id);
    });

    $("#cc, #dc, #plcc").keydown(function(e)
    {
        if(e.keyCode === 32 || e.keyCode === 13)
        {
            var id = $(this).attr("id");
            e.preventDefault();
            performToggleableAccordion(id);
        }
    });
});

function toggleShowOnlyAccordion(id)
{
    if( $("#" + id).attr("aria-expanded") !== "true")
    {
        expandAccordionWithDisable(id);
    }
}

function performToggleableAccordion(id)
{
    if( $("#" + id).attr("aria-expanded") !== "true")
    {
        expandAccordion(id);
    }
    else
    {
        collapseAccordion(id);
    }
}

function expandAccordionWithDisable(id)
{
    $(".showOnly").attr({"aria-expanded":"false", "aria-disabled": "false"});
    $("#" + id).attr({"aria-expanded":"true", "aria-disabled": "true"});
    $(".showOnlyPanel").hide(500);
    $("#" + id).parent().parent().next().show(500);
}

function expandAccordion(id)
{
    $(".toggleable").attr({"aria-expanded":"false"});
    $("#" + id).attr({"aria-expanded":"true"});
    $(".toggleablePanel").hide(500);
    $("#" + id).parent().parent().next().show(500);
}

function collapseAccordion(id)
{
    $(".toggleable").attr({"aria-expanded":"false"});
    $("#" + id).attr({"aria-expanded":"false"});
    $("#" + id).parent().parent().next().hide(500);
}