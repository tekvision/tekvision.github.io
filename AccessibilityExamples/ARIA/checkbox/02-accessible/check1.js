$(document).ready(function() {

  var checkboxes = [];

  $('ul.checkboxes li').each(function(index) {
    if ($(this).attr('role') == 'checkbox') {
      checkboxes[index] = new checkbox($(this));
    }
  });

}); // end ready()

// Function toggleState() is a member function to toggle a checkbox state. This function sets the
// aria-checked property and changes the box image to display the new box state.
//
// @return N/A
//
checkbox.prototype.toggleState = function() {

  var $img = this.$id.find('img');

  if (this.$id.attr('aria-checked') == 'true') {

    this.$id.attr('aria-checked', 'false');
    $img.attr('src', '../checkbox-unchecked-black.png');
  }
  else {
    this.$id.attr('aria-checked', 'true');
    $img.attr('src', '../checkbox-checked-black.png');
  }

} // end toggleState()
