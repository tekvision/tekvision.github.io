$(document).ready(function() {

  var checkboxes = [];

  $('ul.checkboxes li').each(function(index) {
      checkboxes[index] = new checkbox($(this));
  });

}); // end ready()

// Function toggleState() is a member function to toggle a checkbox state. This function 
// changes the box image to display the new box state.
//
// @return N/A
//
checkbox.prototype.toggleState = function() {

  var $img = this.$id.find('img');

  if($img.attr('src') == '../checkbox-checked-black.png') {

    $img.attr('src', '../checkbox-unchecked-black.png');
  }
  else {
    $img.attr('src', '../checkbox-checked-black.png');
  }

} // end toggleState()

//
