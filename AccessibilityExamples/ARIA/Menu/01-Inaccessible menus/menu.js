      function speakMessage(msg) {
        $("#debug").html(msg);
        setTimeout(function() { $("#debug").html(""); }, 2000);
      }
      $(document).ready(function() {
        var mainMenu = $("#main-menu");
        mainMenu.on("keydown", function(e) {
          var activeMenuItem = mainMenu.find("a.active");
          var activeMenuItemId = activeMenuItem.attr("id");
          var activeMenuItemIndex = parseInt(activeMenuItemId.split("-")[activeMenuItemId.split("-").length - 1]);
          speakMessage("active menu index is " + activeMenuItemIndex );
          switch(e.keyCode) {
            case 37:
              speakMessage("left pressed");
              if(activeMenuItemIndex > 1) {
                var prevIndex = activeMenuItemIndex - 1;
                $("#" + "main-menu-" + prevIndex).addClass("active");
                activeMenuItem.removeClass("active");
              }
            break;
            case 39:
              speakMessage("right pressed");
              if(activeMenuItemIndex < 3) {
                var nextIndex = activeMenuItemIndex + 1;
                $("#" + "main-menu-" + nextIndex).addClass("active");
                activeMenuItem.removeClass("active");                //speakMessage("Activating " + "main-menu-" + nextIndex);
              }
            break;
          }
        });
      });
