"use strict";

sap.ui.define(["com/myorg/myui5lib/library", "com/myorg/myui5lib/Example"], function (__com_myorg_myui5lib_library, __Example) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ExampleColor = __com_myorg_myui5lib_library["ExampleColor"];
  const Example = _interopRequireDefault(__Example); // create a new instance of the Example control and
  // place it into the DOM element with the id "content"
  new Example({
    text: "Example",
    color: ExampleColor.Highlight,
    press: event => {
      alert(event.getSource());
    }
  }).placeAt("content");
});