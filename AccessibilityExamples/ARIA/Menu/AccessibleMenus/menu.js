	function speakMessage(msg) {
		$("#debug").html(msg);
		setTimeout(function() { $("#debug").html(""); }, 2000);
	}

	$(document).ready(function() {

		var mainMenu = $("#main_menu");
		var subMenu = $("#sub_menu_1");
		var c = 1;
		var item;

		mainMenu.keydown(function(e) {
			var activeMenuItem = mainMenu.attr("aria-activedescendant");
			var activeMenuIndex = parseInt(activeMenuItem.split("_")[activeMenuItem.split("_").length - 1]);
			switch(e.keyCode) {
				case 37:// left arrow.
				mainMenu.focus();
				if(activeMenuIndex == 1) {
					subMenu.hide();
					mainMenu.attr("aria-activedescendant", "main_menu_" + $("[aria-haspopup]").length);
					var menuLength = $("[aria-haspopup]").length;
					subMenu = $("#sub_menu_" + menuLength);
					c = menuLength;
				}
				else {
					var prevIndex = activeMenuIndex - 1;
					mainMenu.attr("aria-activedescendant", "main_menu_" + prevIndex);
					subMenu.hide();
					subMenu = $("#sub_menu_" + prevIndex);
					c = prevIndex;
				}
				break;
				case 39://right arrow.
				mainMenu.focus();
				if(activeMenuIndex == $("[aria-haspopup]").length) {
					mainMenu.attr("aria-activedescendant", "main_menu_" + 1);
					subMenu.hide();
					subMenu = $("#sub_menu_" + 1);
					c = 1;
				}
				else {
					var nextIndex = activeMenuIndex + 1;
					mainMenu.attr("aria-activedescendant", "main_menu_" + nextIndex);
subMenu.hide();
					subMenu = $("#sub_menu_" + nextIndex);
					c = nextIndex;
				}
				break;
				// All keys will perform same task. i.e. will focus to there first  sub menu item
				//				case 13://Enter.
				case 32://Space.
				case 40://down arrow.
				subMenu.attr("aria-activedescendant", "sub_menu_" + c + "_" + 1);
				item = subMenu.children().eq(0);
				item.attr("aria-selected", "true");
				subMenu.prev().attr("aria-expanded", "true");
				subMenu.show();
				subMenu.focus();
			break;

				case 38:// up arrow 
				subMenu.attr("aria-activedescendant", subMenu.children().last().attr("id"));
				item = subMenu.children().last();
				item.attr("aria-selected", "true");
				subMenu.prev().attr("aria-expanded", "true");
				subMenu.show();
				subMenu.focus();
				break;
				default:
				break;
			}
		});

		$("[role='menu']").keydown(function(e) {

			switch(e.keyCode) {
				case 40:
				if(item.next().attr("id") == null) {
						item = subMenu.children().eq(0);
					subMenu.attr("aria-activedescendant", item.attr("id"));
				e.stopPropagation();
				}
				else {
					item = item.next();
				subMenu.attr("aria-activedescendant", item.attr("id"));
					e.stopPropagation();
				}
				item.siblings().attr("aria-selected", "false");
				item.attr("aria-selected", "true");
				//speakMessage("current item" + item.attr("aria-selected") +", " + "previous item" +  item.prev().attr("aria-selected") + ", " "next item" + item.next().attr("aria-selected"));
				break;
				case 38:
				if(item.attr("id") == subMenu.children().attr("id")) {
					item = subMenu.children().last();
					subMenu.attr("aria-activedescendant", item.attr("id"));
					e.stopPropagation();
}
				else {
					item = item.prev();
					subMenu.attr("aria-activedescendant", item.attr("id"));
					e.stopPropagation();
				}

				item.siblings().attr("aria-selected", "false");
				item.attr("aria-selected", "true");
				//speakMessage("current item" + item.attr("aria-selected") + ", " + "previous item" +  item.prev().attr("aria-selected") + ", " "next item" + item.next().attr("aria-selected"));
				break;
				case 13:
				window.location.href = item.children().attr("href");
				e.stopPropagation();
				break;
				case 27:
				mainMenu.focus();
				item.attr("aria-selected", "false");
				subMenu.hide();
				break;
				default:
				break;
			}
		});

		$("a[href='#']").click(function() {

			var clickedIndex = parseInt(this.id.split("_")[this.id.split("_").length - 1]);
			subMenu = $("#sub_menu_" + clickedIndex);
			mainMenu.attr("aria-activedescendant", this.id);
			item = subMenu.children().eq(0);
			item.attr("aria-selected", "true");
			//subMenu.siblings().hide();
			subMenu.show();
			subMenu.focus();
		});
	});
