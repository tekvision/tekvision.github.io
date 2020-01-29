"use strict";

 var check1 = document.getElementsByClassName("checkbox");
 var allCheck = document.getElementById("cb");

	function check(id) {
		if(document.getElementById(id).hasAttribute("checked")) {
			//alert("clicked item was  checked! making it to not checked.");
			//document.getElementById(id).setAttribute("aria-checked","false");
			document.getElementById(id).removeAttribute("checked");
		}
		else {
			//alert("clicked item was  not checked! making it to  checked.");
			//document.getElementById(id).setAttribute("aria-checked","true");
			document.getElementById(id).setAttribute("checked","");
		}

		var c = 0;
		var i;
		for(i = 0; i < check1.length ; i ++) {
			//alert("you are in for loop");
			if(check1[i].hasAttribute("checked")) {
				c++;
//alert("the " + i +" element is checked. increaminting counter. right now, the counter is " + c);
			}
		}

		if(c >0 && c < check1.length) {
			//alert("some checkboxes are checked and some are not. due to that, making first check box to partially checked. ");
			allCheck.setAttribute("aria-checked","mixed");
		}
		else if(c == 0) {
			//alert("all the checkboxes are not checked. therefore making first checkbox to false.");
				allCheck.setAttribute("aria-checked","false");
   }
  else
  {
//alert("all the checkboxes are checked. therefore making first checkbox to true");
   allCheck.setAttribute("aria-checked","true");
  }
	}

	function checkAll() {
		var i;
		if(allCheck.getAttribute("aria-checked") == "false") {
//alert("first checkbox is false! making it to true");
			allCheck.setAttribute("aria-checked","true");
			for(i = 0; i < check1.length; i++) {
//alert("making other checkboxes true one by one "+ i);
				//check1[i].setAttribute("aria-checked","true");
				check1[i].setAttribute("checked","");
			}

		}
		else if(allCheck.getAttribute("aria-checked") == "mixed") {
//alert("the first checkbox was partially checked. making it to true");
			allCheck.setAttribute("aria-checked","true");
			for(i = 0; i < check1.length; i++) {
//alert("making other checkboxes true one by one "+ i);
				//check1[i].setAttribute("aria-checked","true");
				check1[i].setAttribute("checked","");
			}

		}
		else{
//alert("the first checkbox was true! making it to false");
			allCheck.setAttribute("aria-checked","false");
			for(i = 0; i < check1.length; i++) {
//alert("making other checkboxes to false one by one "+ i);
				//check1[i].setAttribute("aria-checked","false");
				check1[i].removeAttribute("checked");
			}
		}
	}
