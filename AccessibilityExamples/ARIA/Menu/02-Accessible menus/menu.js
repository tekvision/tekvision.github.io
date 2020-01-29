      function speakMessage(msg) {
        $("#debug").html(msg);
        setTimeout(function() { $("#debug").html(""); }, 2000);
      }
      $(document).ready(function() {
        var mainMenu = $("#main-menu");
        mainMenu.on("keydown", function(e) {
          var activeMenuItemId = mainMenu.attr("aria-activedescendant");
          var activeMenuItemIndex = parseInt(activeMenuItemId.split("-")[activeMenuItemId.split("-").length - 1]);
          //speakMessage("active menu index is " + activeMenuItemIndex );
          var activeMenuItem = $("#" + activeMenuItemId);
          switch(e.keyCode) {
            case 37:
              //speakMessage("left pressed");
              if(activeMenuItemIndex > 1) {
                var prevIndex = activeMenuItemIndex - 1;
                mainMenu.attr("aria-activedescendant", "main-menu-" + prevIndex);
                activeMenuItem.attr("aria-selected", "false");
                $("#" + "main-menu-" + prevIndex).attr("aria-selected", "true");
                //speakMessage("Activating " + "main-menu-" + prevIndex);
              }
            break;
            case 39:
              //speakMessage("right pressed");
              if(activeMenuItemIndex < 3) {
                var nextIndex = activeMenuItemIndex + 1;
                mainMenu.attr("aria-activedescendant", "main-menu-" + nextIndex);
                activeMenuItem.attr("aria-selected", "false");
                $("#" + "main-menu-" + nextIndex).attr("aria-selected", "true");
                //speakMessage("Activating " + "main-menu-" + nextIndex);
              }
            break;
          }
        });
      });
