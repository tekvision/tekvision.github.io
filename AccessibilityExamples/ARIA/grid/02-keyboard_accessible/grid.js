$(document).ready(function() {
  var grid = new Grid('grid1', 3, 3);
}); // end ready()

// Function keyCodes() is an object to contain keycodes needed for the application
//
function keyCodes() {
  this.space = 32;
  this.left = 37;
  this.right = 39;
  this.up = 38;
  this.down = 40;
  this.enter = 13;
  this.esc = 27;
  this.tab = 9;
}


//
// Function Grid() defines a class to implement a Grid.
//
// @param (gridID string) gridID is the html id of the table to attach to.
//
// @param (numRows integer) numRows is the number of rows in the grid
//
// @param (numCols integer) numCols is the number of columns in the grid
//
// @return N/A
//
function Grid(gridID, numRows, numCols) {

  // define widget properties
  this.$id = $('#' + gridID);
  this.keys = new keyCodes();
  this.$rows = this.$id.find('tr');
  this.$cells = this.$id.find('td');
  this.$active = $("#" + this.$id.attr("aria-activedescendant"));

  var thisObj = this;

  this.numRows = numRows;
  this.numCols = numCols;


  // bind event handlers
  this.bindHandlers();
} // end grid() constructor


//
// Function bindHandlers() is a member function to bind event handlers for the grid.
//
// @return N/A
//
Grid.prototype.bindHandlers = function() {

  var thisObj = this;

  // bind a keydown handler
  this.$id.keydown(function(e) {
    return thisObj.handleKeyDown(e, $(this));
  });

  // bind a keyup handler
  this.$id.keyup(function(e) {
    return thisObj.handleKeyUp(e, $(this));
  });

  // bind a keypress handler
  this.$id.keypress(function(e) {
    return thisObj.handleKeyPress(e, $(this));
  });

} // end bindHandlers()

//
// Function handleKeyDown() is a member function to process keydown events for
// the grid
//
// @param (e object) e is the event object
//
// @param ($id object) $id is the jquery object of the cell triggering event
//
// @return (boolean) Returns false if consuming event; true if propagating
//
Grid.prototype.handleKeyDown = function(e, $id) {


  if (e.altKey || e.ctrlKey || e.shiftKey) {
    // do nothing
    return true;
  }

  switch (e.keyCode) {
    case this.keys.tab: {
      //this.$id.removeAttr("aria-activedescendant");
      // tab must propagate
      return true;
    }
    case this.keys.esc: {
      e.stopPropagation();
      return false;
    }
    case this.keys.left: {

      if (this.$active.index() > 0) {
        this.$id.removeAttr("aria-activedescendant");
        this.$active = this.$active.prev();
        this.$id.attr("aria-activedescendant", this.$active.attr("id"));
      }
      
      e.stopPropagation();
      return false;
    }
    case this.keys.up: {
      var $row = this.$active.parent();
      var cellNdx = this.$active.index();

      if ($row.index() > 0) {
        this.$id.removeAttr("aria-activedescendant");
        this.$active = $row.prev().find('td').eq(cellNdx);
        this.$id.attr("aria-activedescendant", this.$active.attr("id"));
      }

      e.stopPropagation();
      return false;
    }
    case this.keys.right: {

      if (this.$active.index() < this.numCols - 1) {
        this.$id.removeAttr("aria-activedescendant");
        this.$active = this.$active.next();
        this.$id.attr("aria-activedescendant", this.$active.attr("id"));
      }
      
      e.stopPropagation();
      return false;
    }
    case this.keys.down: {
      var $row = this.$active.parent();
      var cellNdx = this.$active.index();
      if ($row.index() < this.numRows - 1) {
        this.$id.removeAttr("aria-activedescendant");
        this.$active = $row.next().find('td').eq(cellNdx);
        this.$id.attr("aria-activedescendant", this.$active.attr("id"));
      }

      e.stopPropagation();
      return false;
    }
  }
  return true;
} // end handleKeyDown()

//
// Function handleKeyUp() is a member function to process keyup events for the game board.
// The function will only respond to keyup events from the enter or space bar.
//
// @param (e object) e is the event object
//
// @param ($id object) $id is the jquery object of the cell triggering event
//
// @return (boolean) Returns false if consuming event; true if propagating
//
Grid.prototype.handleKeyUp = function(e, $id) {

  if (e.altKey || e.ctrlKey || e.shiftKey) {
    // do nothing
    return true;
  }

  switch (e.keyCode) {
    case this.keys.enter:
    case this.keys.space: {

      e.stopPropagation();
      return false;
    }
  }
  return true;
} // end handleKeyUp()

//
// Function handleKeyPress() is a member function to consume keypress events for
// the grid.This handler is necessary to prevent unwanted window manipulation
// in browsers that process on keypress rather than keydown (such as Opera).
//
// @param (e object) e is the event object
//
// @param ($id object) $id is the jquery object of the cell triggering event
//
// @return (boolean) Returns false if consuming event; true if propagating
//
Grid.prototype.handleKeyPress = function(e, $id) {

  if (e.altKey || e.ctrlKey || e.shiftKey) {
    // do nothing
    return true;
  }

  switch (e.keyCode) {
    case this.keys.esc:
    case this.keys.enter:
    case this.keys.space:
    case this.keys.left:
    case this.keys.up:
    case this.keys.right:
    case this.keys.down: {
      e.stopPropagation();
      return false;
    }
  }
  return true;
} // end handleKeyPress()
