$(document).ready(function(){
    $("#inacce-fname").focus();

    $("#acce-wiz-nextBtn").click(function(e)
    {
        if($("#acce-wiz-form1").css("display") == "block")
        {
            $(".formFields1").each(function()
            {
                var input = $(this);
                accessibleFormFields1(input);
            })
        }
        else if($("#acce-wiz-form2").css("display") == "block")
        {
            $(".formFields2").each(function(){
                var input = $(this);
                accessibleFormFields2(input); 
            })
        }
        else
        {
            $(".formFields3").each(function(){
                var input = $(this);
                accessibleFormFields3(input); 
            })
        }
    })

    $("#inacce-wiz-nextBtn").click(function(e)
    {
        var inacceForm1 = $("#inacce-wiz-form1");
        var inacceForm2 = $("#inacce-wiz-form2");
        if($(inacceForm1).css("display") === "block")
        {
            $(".inacce-formFields1").each(function()
            {
                var input = $(this);
                inaccessibleFormFields1(input);
            })
        }
        else if($(inacceForm2).css("display") === "block")
        {
            $(".inacce-formFields2").each(function()
            {
                var input = $(this);
                inaccessibleFormFields2(input);
            })
        }
        else
        {
            $(".inacce-formFields3").each(function()
            {
                var input = $(this);
                inaccessibleFormFields3(input);
            })
        }
    })

    $("#acce-dynamicWiz-nextBtn").click(function()
    {
        if($("#acce-dynamicWiz-form2").css("display") == "none")
        {
            $("#acce-dynamicWiz-form1").hide();
            $("#acce-dynamicWiz-form2").show();
            $("#acce-dynamicWiz-nextBtn").empty().text("Submit");
            $(".live-region2").children().remove();
            if($(".acce-dynamicWiz-buttons").children().length == 1)
            {
                $("#acce-dynamicWiz-nextBtn").before("<button id='acce-dynamicWiz-prevBtn' onclick='dynamicWizPreviousButton($(this))'>Prev</button>");
            }
            setTimeout(function()
            {
                if($(".live-region2").children().length == 0)
                {
                    $(".live-region2").append("<p>Going to step2</p>");
                }
            }, 100);
            setTimeout(function()
            {
                $("#email2").focus();
            }, 1200)
        }
        else if($(this).parent().prev().attr("id") == "acce-dynamicWiz-form1")
        {
            $(".wiz-formFields1").each(function()
            {
                var input = $(this);
                accessibleWizFormField1(input);
            })
        }
        else
        {
            $(".wiz-formFields2").each(function(e){
                var input = $(this);
                accessibleWizFormField2(input);
            })
        }  
    })

    $("#inacce-dynamicWiz-nextBtn").click(function()
    {
        if($("#inacce-dynamicWiz-form2").css("display") == "none")
        {
            $("#inacce-dynamicWiz-form1").hide();
            $("#inacce-dynamicWiz-form2").show();
            $("#inacce-dynamicWiz-nextBtn").empty().text("Submit");
        }
        else if($(this).parent().prev().attr("id") == "inacce-dynamicWiz-form1")
        {
            $(".inacce-wiz-formFields1").each(function()
            {
                var input = $(this);
                inaccessibleWizFormField1(input);
            })
        }
        else
        {
            $(".inacce-wiz-formFields2").each(function(e){
                var input = $(this);
                inaccessibleWizFormField2(input);
            })
        }  
    })
})

var wizPreviousButton = function(activeElement)
{
    var prevBtn = $(activeElement).attr("id");
    switch (prevBtn) 
    {
        case "inacce-wiz-prevBtn":
            if($("#inacce-wiz-form2").css("display") == "block")
            {
                $("#inacce-wiz-form1").css("display", "block");
                $("#inacce-wiz-form2").css("display", "none");
                $("#inacce-wiz-prevBtn").remove();
            }
            else
            {
                $("#inacce-wiz-form2").css("display", "block");
                $("#inacce-wiz-form3").css("display", "none");
            }        
        break;
    
        case "acce-wiz-prevBtn":
            if($("#acce-wiz-form2").css("display") == "block")
            {
                $("#acce-wiz-form1").css("display", "block");
                $("#acce-wiz-form2").css("display", "none");
                $("#acce-wiz-prevBtn").remove();
                $(".live-region2").children().remove();
                setTimeout(function()
                {
                    if($(".live-region2").children().length == 0)
                    {
                        $(".live-region2").append("<p>Going to step 1</p>");
                    }
                }, 100);
                setTimeout(function()
                {
                    $("#fname").focus();
                }, 1000)
            }
            else
            {
                $("#acce-wiz-form2").css("display", "block");
                $("#acce-wiz-form3").css("display", "none");
                $(".live-region2").children().remove();
                $("#acce-wiz-nextBtn").empty().text("Next");
                setTimeout(function()
                {
                    if($(".live-region2").children().length == 0)
                    {
                        $(".live-region2").append("<p>Going to step 2</p>");
                    }
                }, 100);
                setTimeout(function()
                {
                    $("#cname").focus();
                }, 1000)
            }
         break;
    }
}

var dynamicWizPreviousButton = function(activeElement)
{
    var prevBtn = $(activeElement).attr("id");
    switch (prevBtn) 
    {
        case "inacce-dynamicWiz-prevBtn":
            if($("#inacce-dynamicWiz-form2").css("display") == "block")
            {
                $("#inacce-dynamicWiz-form1").css("display", "block");
                $("#inacce-dynamicWiz-form2").css("display", "none");
                $("#inacce-dyamicWiz-prevBtn").remove();
                $("#inacce-dynamicWiz-nextBtn").empty().text("Next");
            }        
        break;
    
        case "acce-dynamicWiz-prevBtn":
            if($("#acce-dynamicWiz-form2").css("display") == "block")
            {
                $("#acce-dynamicWiz-form1").css("display", "block");
                $("#acce-dynamicWiz-form2").css("display", "none");
                $("#acce-dynamicWiz-prevBtn").remove();
                $("#acce-dynamicWiz-nextBtn").empty().text("Next");
                $(".live-region2").children().remove();
                setTimeout(function()
                {
                    if($(".live-region2").children().length == 0)
                    {
                        $(".live-region2").append("<p>Going to step 1</p>");
                    }
                }, 100);
                setTimeout(function()
                {
                    $("#fname2").focus();
                }, 1000)
            }
         break;
    }
}

var accessibleWizFormField2 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkEmptyInputFields(input);
        if(!$("#email2").val() && !$("#mob2").val())
        {
            $("#email2").focus();
        }
        else
        {
            $(input).focus();   
        }
    }
    else    
    {
        checkFilledInputFields(input);
        if(!$("#email2").val() == false && !$("#mob2").val() == false)
        {
            $("#acce-dynamicWiz-form2").hide();
            $("#acce-dynamicWiz-nextBtn, #acce-dynamicWiz-prevBtn").hide();
            if($("#acce-dynamicWiz-form2").next().attr("id") != "acce-dynamicWiz-form3" )
            {
                $("#acce-dynamicWiz-form2").after("<div id='acce-dynamicWiz-form3' aria-live='polite'></div>");
            }
            $("#acce-dynamicWiz-step2").attr("class", "dynamicWizForm-compeleted-step");
            $(".live-region2").children().remove();
            setTimeout(function(){
            if($("#acce-dynamicWiz-form3").children().length == 0)
            {
                $("#acce-dynamicWiz-form3").append("<h4>Thank you..!!</h4>");
            }
            }, 500)
        }
    }
}

var inaccessibleWizFormField2 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkEmptyInputFields(input);
        if(!$("#inacce-email2").val() && !$("#inacce-mob2").val())
        {
            $("#inacce-email2").focus();
        }
        else
        {
            $(input).focus();
        }
    }
    else
    {
        checkFilledInputFields(input);
        if(!$("#inacce-email2").val() == false && !$("#inacce-mob2").val() == false)
        {
            $("#inacce-dynamicWiz-form2").hide();
            $("#inacce-dynamicWiz-nextBtn, #inacce-dynamicWiz-prevBtn").hide();
            if($("#inacce-dynamicWiz-form2").next().attr("id") != "inacce-dynamicWiz-form3" )
            {   
                $("#inacce-dynamicWiz-form2").after("<div id='inacce-dynamicWiz-form3' class='tab' aria-live='polite'></div>");
            }
            $("#inacce-dynamicWiz-step2").attr("class", "dynamicWizForm-inaccessible-compeleted-step");
            setTimeout(function(){
            if($("#inacce-dynamicWiz-form3").children().length == 0)
            {
                $("#inacce-dynamicWiz-form3").append("<h4>Thank you..!!</h4>");
            }
            }, 500)
        }
    }
}

var accessibleWizFormField1 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkEmptyInputFields(input);
        if(!$("#fname2").val() && !$("#lname2").val())
        {
            $("#fname2").focus();
        }
        else
        {
            $(input).focus();
        }    
    }
    else
    {
        checkFilledInputFields(input);
        if(!$("#fname2").val() == false && !$("#lname2").val() == false)
        {
            $("#acce-dynamicWiz-form1").hide();
            addAcceStep2OfWizardForm();
            $("#acce-dynamicWiz-nextBtn").empty().text("Submit");
            $("#acce-dynamicWiz-step1").attr("class", "dynamicWizForm-compeleted-step");
            setTimeout(function()
            {
                if($(".live-region2").children().length == 0)
                {
                    $(".live-region2").append("<p>Step 1 Completed, Going to next step</p>");
                }
            }, 100);
            setTimeout(function()
            {
                $("#email2").focus();
            }, 1400)
            if($(".acce-dynamicWiz-buttons").children().length == 1)
            {
                $("#acce-dynamicWiz-nextBtn").before("<button id='acce-dynamicWiz-prevBtn' onclick='dynamicWizPreviousButton($(this))'>Prev</button>");
            }
        }
    }
}

var inaccessibleWizFormField1 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkInaccessibleEmptyInputFields(input);
    }
    else
    {
        checkFilledInputFields(input);
        if(!$("#inacce-fname2").val() == false && !$("#inacce-lname2").val() == false)
        {
            $("#inacce-dynamicWiz-form1").hide();
            addinaccessibleStep2OfWizardForm();
            $("#inacce-dynamicWiz-step1").attr("class", "dynamicWizForm-inaccessible-compeleted-step");
            $("#inacce-email2").focus();
            if($(".inacce-dynamicWiz-buttons").children().length == 1)
            {
                $("#inacce-dynamicWiz-nextBtn").before("<button id='inacce-dynamicWiz-prevBtn' onclick='dynamicWizPreviousButton($(this))'>Prev</button>");
            }
        }
    }
}

var accessibleFormFields3 = function(input) 
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkEmptyInputFields(input);
        if(!$("#email").val() && !$("#mob").val())
        {
            $("#email").focus();
        }
        else
        {
            $(input).focus();
        }
    }
    else
    {
        checkFilledInputFields(input);
        if(!$("#email").val() == false && !$("#mob").val() == false)
        {
            $("#acce-wiz-form3").hide();
            $("#acce-wiz-form4").show();
            $("#acce-wiz-nextBtn").hide();
            $("#acce-wiz-prevBtn").hide();
            $("#p-step3").attr("class", "compeleted-step");
            $(".live-region").children().remove();
            setTimeout(function(){
                if($("#acce-wiz-form4").children().length == 0)
                {
                    $("#acce-wiz-form4").append("<h4>Thank you..!!</h4>");
                }
            }, 500)
        }
    }
}

var accessibleFormFields2 = function(input) {
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkEmptyInputFields(input);
        if(!$("#cname").val() && !$("#cAdd").val())
        {
            $("#cname").focus();
        }
        else
        {
            $(input).focus();
        }
    }
    else
    {
        checkFilledInputFields(input);
        if(!$("#cname").val() == false && !$("#cAdd").val() == false)
        {
            $("#acce-wiz-form2").hide();
            $("#acce-wiz-form3").show();
            $("#p-step2").attr("class", "compeleted-step");
            $(".live-region").children().remove();
            $("#acce-wiz-nextBtn").empty().text("Submit");
            setTimeout(function(){
                if($(".live-region").children().length == 0)
                {
                    $(".live-region").append("<p>Step 2 Completed, Going to next step.</p>");
                }
            }, 100)
            setTimeout(function(){
                $("#email").focus(); 
            }, 1300);
        }
    }
}

var accessibleFormFields1 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkEmptyInputFields(input);
        if(!$("#fname").val() && !$("#lname").val())
        {
            $("#fname").focus();
        }
        else
        {
            $(input).focus();
        }
    }
    else
    {
        checkFilledInputFields(input);
        if(!$("#fname").val() == false && !$("#lname").val() == false)
        {
            $("#acce-wiz-form1").css("display", "none");
            $("#acce-wiz-form2").css("display", "block");
            $("#p-step1").attr("class", "compeleted-Step");
            $(".live-region").children().remove();
            setTimeout(function(){
                if($(".live-region").children().length == 0)
                {
                    $(".live-region").append("<p>Step 1 Completed, Going to next step</p>");
                }
            }, 100);
            setTimeout(function(){
                $("#cname").focus();
            }, 1300)
            if($(".acce-wiz-buttons").children().length == 1)
            {
                $("#acce-wiz-nextBtn").before("<button id='acce-wiz-prevBtn' onclick='wizPreviousButton($(this))'>Prev</button>")
            }
        }
    }
}

var inaccessibleFormFields1 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkInaccessibleEmptyInputFields(input);
    }
    else
    {
        if(!$("#inacce-fname").val() == false && !$("#inacce-lname").val() == false)
        {
            $("#inacce-wiz-form1").css("display" , "none");
            $("#inacce-wiz-form2").css("display", "block");
            $("#inacce-p-step1").attr("class", "inaccessible-compeleted-Step");
            $("#inacce-cname").focus();
            if($(".inacce-wiz-buttons").children().length == 1)
            {
                $("#inacce-wiz-nextBtn").before("<button id='inacce-wiz-prevBtn' onclick='wizPreviousButton($(this))'>Prev</button>")
            }
        }
    }
}

var inaccessibleFormFields2 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkInaccessibleEmptyInputFields(input);
    }
    else
    {
        if(!$("#inacce-cname").val() == false && !$("#inacce-cAdd").val() == false)
        {
            $("#inacce-wiz-form2").css("display", "none");
            $("#inacce-wiz-form3").css("display", "block");
            $("#inacce-p-step2").attr("class", "inaccessible-compeleted-Step");
            $("#inacce-email").focus();
        }
    }
}

var inaccessibleFormFields3 = function(input)
{
    if(! $(input).val())
    {
        $(input).parent().next().children().remove();
        checkInaccessibleEmptyInputFields(input);
    }
    else
    {
        if(!$("#inacce-email").val() == false && !$("#inacce-mob").val() == false)
        {
            $("#inacce-wiz-form3").css("display", "none");
            $("#inacce-wiz-form4").css("display", "block");
            $("#inacce-p-step3").attr("class", "inaccessible-compeleted-Step");
            $("#inacce-wiz-nextBtn").css("display", "none");
            $("#inacce-wiz-prevBtn").css("display", "none");
            setTimeout(function(){
                if($("#inacce-wiz-form4").children().length == 0)
                {
                    $("#inacce-wiz-form4").append("<h4>Thank you..!!</h4>");
                }
            }, 500)
        }
    }
}

var addAcceStep2OfWizardForm = function()
{
    if($("#acce-dynamicWiz-form1").next().attr("id") != "acce-dynamicWiz-form2")
    {

        $("#acce-dynamicWiz-form1").after("<form id='acce-dynamicWiz-form2'></form>");
        $("#acce-dynamicWiz-form2").append("<div id='wiz-step2' class=''tab></div>")
        $("#wiz-step2").append("<h2>Step 2</h2>");
        $("#wiz-step2").append("<p id='tb1'><p>");
        $("#tb1").append("<label for='email2'>Email</label>");
        $("#tb1").append(" <input placeholder='Enter E-mail' class='wiz-formFields2' required name='email2' aria-invalid='false' id='email2'>");
        $("#tb1").after("<div class='error' aria-live='polite'></div>");
        $("#wiz-step2").append("<p id='tb2'><p>");
        $("#tb2").append("<label for='mob2'>Mob No</label>");
        $("#tb2").append(" <input placeholder='Enter Mobile Number' class='wiz-formFields2' required name='mob2' aria-invalid='false' id='mob2'>");
        $("#tb2").after("<div class='error' aria-live='polite'></div>");
    }
}

var addinaccessibleStep2OfWizardForm = function()
{
    if($("#inacce-dynamicWiz-form1").next().attr("id") != "inacce-dynamicWiz-form2")
    {
        $("#inacce-dynamicWiz-form1").after("<form id='inacce-dynamicWiz-form2'></form>");
        $("#inacce-dynamicWiz-form2").append("<div id='inacce-wiz-step2' class='tab'></div>");
        $("#inacce-wiz-step2").append("<h2>Step 2</h2>");
        $("#inacce-wiz-step2").append("<p id='inacce-tb1'><p>");
        $("#inacce-tb1").append("<label for='inacce-email2'>Email</label>");
        $("#inacce-tb1").append(" <input placeholder='Enter E-mail' class='inacce-wiz-formFields2' required name='inacceEmail2' aria-invalid='false' id='inacce-email2'>");
        $("#inacce-tb1").after("<div class='error' aria-live='polite'></div>");
        $("#inacce-wiz-step2").append("<p id='inacce-tb2'><p>");
        $("#inacce-tb2").append("<label for='inacce-mob2'>Mob No</label>");
        $("#inacce-tb2").append(" <input placeholder='Enter Mobile Number' class='inacce-wiz-formFields2' required name='inacceMob2' aria-invalid='false' id='inacce-mob2'>");
        $("#inacce-tb2").after("<div class='error' aria-live='polite'></div>");
        $("#inacce-dynamicWiz-nextBtn").empty().text("Submit");
    }
}

var checkEmptyInputFields = function(input) 
{
    var errorElementId = $(input).attr("id") + "-error";
    $(input).attr("aria-invalid", "true");
    $(input).attr("aria-describedby", errorElementId);
    $(input).parent().next().append("<p></p>");
    $(input).parent().next().children().attr("id", errorElementId);
    $(input).parent().next().children().attr("class", "inline-error");
    $("#" + errorElementId).text("Please fill out this field");
    $("#" + errorElementId).css("display" , "inline");
}

var checkInaccessibleEmptyInputFields = function(input)
{
    var errorElementId = $(input).attr("id") + "-error";
    $(input).parent().next().append("<p></p>");
    $(input).parent().next().children().attr("id", errorElementId);
    $("#" + errorElementId).attr("class", "inline-error");
    $("#" + errorElementId).text("Please fill out this field");
    $("#" + errorElementId).css("display" , "inline");
}

var checkFilledInputFields = function(input) 
{
    $(input).parent().next().children().remove();
    $(input).attr("aria-invalid", "false");
    $(input).removeAttr("aria-describedby");   
}