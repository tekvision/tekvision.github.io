$(document).ready(function () {
    $("#f-rb1,#f-rb2, #f-rb3, #d-rb1, #d-rb2, #d-rb3").click(function (e) {
        var id = $(this).attr("id");
        failureRadioButton(id);
    });

    $("#f-rb1,#f-rb2, #f-rb3, #d-rb1, #d-rb2, #d-rb3").keydown(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            var id = $(this).attr('id');
            failureRadioButton(id);
        }
    });

    $("#acce-rb1 , #acce-rb2, #acce-rb3, #default-rb1, #default-rb2, #default-rb3").click(function (e) {
        var id = $(this).attr("id");
        accessibleRadioButton(id);
    });

    $("#acce-rb1 , #acce-rb2, #acce-rb3, #default-rb1, #default-rb2, #default-rb3").keydown(function (e) {
        var id = $(this).attr("id");
        switch (e.keyCode) {
            case 40:
                downArrowKeyInteraction(id);
                break;

            case 38:
                upArrowKeyInteraction(id);
                break;
            case 37:
                upArrowKeyInteraction(id);
                break;
            case 39:
                downArrowKeyInteraction(id);
                break;
            case 32:
                accessibleRadioButton(id);
                break;
        }
    });

});

function accessibleRadioButton(id) {
    switch (id) {
        case "acce-rb1":
            if ($("#acce-rb1").attr("aria-checked") == "false") {
                $("#rb11").addClass("checked1");
                $("#acce-rb1").attr("checked", "checked");
                $("#acce-rb2 ,#acce-rb3").removeAttr("checked");
                $("#rb22").removeClass("checked1");
                $("#rb33").removeClass("checked1");
                $("#acce-rb1").attr("aria-checked", true).attr("tabindex", "0");
                $("#acce-rb2").attr("aria-checked", false).attr("tabindex", "-1");
                $("#acce-rb3").attr("aria-checked", false).attr("tabindex", "-1");
                return false;
            }
            break;

        case "acce-rb2":
            if ($("#acce-rb2").attr("aria-checked") == "false") {
                $("#rb22").addClass("checked1");
                $("#acce-rb2").attr("checked", "checked");
                $("#acce-rb1 ,#acce-rb3").removeAttr("checked");
                $("#rb11").removeClass("checked1");
                $("#rb33").removeClass("checked1");
                $("#acce-rb2").attr("aria-checked", true).attr("tabindex", "0");
                $("#acce-rb1").attr("aria-checked", false).attr("tabindex", "-1");
                $("#acce-rb3").attr("aria-checked", false).attr("tabindex", "-1");
                return false;
            }
            break;

        case "acce-rb3":
            if ($("#acce-rb3").attr("aria-checked") == "false") {
                $("#rb33").addClass("checked1");
                $("#acce-rb3").attr("checked", "checked");
                $("#acce-rb2 ,#acce-rb1").removeAttr("checked");
                $("#rb11").removeClass("checked1");
                $("#rb22").removeClass("checked1");
                $("#acce-rb3").attr("aria-checked", true).attr("tabindex", "0");
                $("#acce-rb1").attr("aria-checked", false).attr("tabindex", "-1");
                $("#acce-rb2").attr("aria-checked", false).attr("tabindex", "-1");
                return false;
            }
            break;
        case "default-rb1":
            if ($("#default-rb1").attr("aria-checked") == "false") {
                $("#default-rb11").addClass("checked1");
                $("#default-rb22, #default-rb33").removeClass("checked1");
                $("#default-rb1").attr("aria-checked", true).attr("tabindex", "0");
                $("#default-rb2").attr("aria-checked", false).attr("tabindex", "-1");
                $("#default-rb3").attr("aria-checked", false).attr("tabindex", "-1");
                return false;
            }
            break;

        case "default-rb2":
            if ($("#default-rb2").attr("aria-checked") == "false") {
                $("#default-rb22").addClass("checked1");
                $("#default-rb11").removeClass("checked1");
                $("#default-rb33").removeClass("checked1");
                $("#default-rb2").attr("aria-checked", true).attr("tabindex", "0");
                $("#default-rb1").attr("aria-checked", false).attr("tabindex", "-1");
                $("#default-rb3").attr("aria-checked", false).attr("tabindex", "-1");
                return false;
            }
            break;

        case "default-rb3":
            if ($("#default-rb3").attr("aria-checked") == "false") {
                $("#default-rb33").addClass("checked1");
                $("#default-rb11").removeClass("checked1");
                $("#default-rb22").removeClass("checked1");
                $("#default-rb3").attr("aria-checked", true).attr("tabindex", "0");
                $("#default-rb1").attr("aria-checked", false).attr("tabindex", "-1");
                $("#default-rb2").attr("aria-checked", false).attr("tabindex", "-1");
                return false;
            }
            break;

    }
}

function failureRadioButton(id) {
    if ($("#" + id).children().attr("class") == "checked1") {
        $("#" + id).children().removeClass("checked1");
        return false;
    }
    else {
        $("#" + id).children().addClass("checked1");
        return false;
    }
}

function downArrowKeyInteraction(id) {
    if (id == "acce-rb3" || id == "default-rb3") {
        $("#" + id).removeAttr("aria-checked").removeAttr("tanindex").attr("aria-checked", false).attr("tabindex", "-1");
        $("#" + id).children().removeClass("checked1");
        $("#" + id).parent().prev().prev().children().prev().focus().attr("aria-checked" , "true").attr("tabindex" , "0");
        $("#" + id).parent().prev().prev().children().prev().children().addClass("checked1");
        return false;
    }
    else {
        $("#" + id).attr("aria-checked", false).removeAttr("tabindex", "0").attr("tabindex", "-1");
        $("#" + id).children().removeClass("checked1");
        $("#" + id).parent().next().children().prev().focus().attr("aria-checked", true).attr("tabindex", "0");
        $("#" + id).parent().next().children().prev().children().addClass("checked1");
        return false;
    }
}

function upArrowKeyInteraction(id) {
    if (id == "acce-rb1" || id == "default-rb1") {
        $("#" + id).removeAttr("aria-checked").removeAttr("tabindex").attr("aria-checked", false).attr("tabindex", "-1");
        $("#" + id).children().removeClass("checked1");
        $("#" + id).parent().next().next().children().prev().focus().attr("aria-checked" , "true").attr("tabindex" , "0");
        $("#" + id).parent().next().next().children().prev().children().addClass("checked1");
        return false;
    }
    else {
        $("#" + id).attr("aria-checked", false).removeAttr("tabindex").attr("tabindex", "-1");
        $("#" + id).children().removeClass("checked1")
        $("#" + id).parent().prev().children().prev().focus().attr("aria-checked", true).attr("tabindex", "0");
        $("#" + id).parent().prev().children().prev().children().addClass("checked1");
        return false;
    }
}

