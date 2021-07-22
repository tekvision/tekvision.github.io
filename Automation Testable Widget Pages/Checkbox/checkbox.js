$(document).ready(function () {
    $("div .ch").click(function () {
        var id = $(this).attr("id");
        checkbox(id);
    });

    $("div .ch").keydown(function(e){
        var id = $(this).attr("id");
        if(e.keyCode == 13 || e.keyCode == 32)
        {
            checkbox(id);
        }
    });

});

function checkbox(id) {
   if(id == "c1" || id == "c2" || id == "c3")
   {
        if($("#" + id).attr("class") == "ch checked1")
        {
            $("#" + id).removeClass("checked1");
            $("#" + id).removeAttr("checked");
        }
        else
        {
            $("#" + id).addClass("checked1");
            $("#" + id).attr("checked" , "checked");
        }
   }
   else
   {
        if ($("#" + id).attr("aria-checked") == "true") {
            $("#" + id).attr("aria-checked", false);
            $("#" + id).removeClass("checked1");
            return false;
        }
        else {
            $("#" + id).attr("aria-checked", true);
            $("#" + id).addClass("checked1");
            return false;
    }
   }
    
}