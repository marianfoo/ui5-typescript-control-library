"use strict";

sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library com.myorg.myui5lib.
   */

  // delegate further initialization of this library to the Core
  // Hint: sap.ui.getCore() must still be used here to support preload with sync bootstrap!
  sap.ui.getCore().initLibrary({
    name: "com.myorg.myui5lib",
    version: "${version}",
    dependencies: [
    // keep in sync with the ui5.yaml and .library files
    "sap.ui.core"],
    types: ["com.myorg.myui5lib.ExampleColor"],
    interfaces: [],
    controls: ["com.myorg.myui5lib.Example"],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  // get the library object from global object space because all enums must be attached to it to be usable as UI5 types
  // FIXME: this line is planned to become obsolete and may need to be removed later
  const thisLib = ObjectPath.get("com.myorg.myui5lib");

  /**
   * Semantic Colors of the com.myorg.myui5lib.Example control.
   *
   * @enum {string}
   * @public
   */
  var ExampleColor = /*#__PURE__*/function (ExampleColor) {
    ExampleColor["Default"] = "Default";
    ExampleColor["Highlight"] = "Highlight";
    return ExampleColor;
  }(ExampleColor || {}); // FIXME: this line is planned to become obsolete and may need to be removed later
  thisLib.ExampleColor = ExampleColor; // add the enum to the library; this is important because UI5 otherwise cannot identify the type and will skip type checking for properties of this type

  // export the library namespace
  return thisLib;
});