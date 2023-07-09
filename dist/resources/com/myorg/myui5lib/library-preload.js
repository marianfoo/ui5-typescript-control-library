//@ui5-bundle com/myorg/myui5lib/library-preload.js
sap.ui.require.preload({
	"com/myorg/myui5lib/Example.js":function(){
"use strict";sap.ui.define(["sap/ui/core/Control","./ExampleRenderer","./library"],function(e,t,r){function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const l=o(t);const n=r["ExampleColor"];const u=e.extend("com.myorg.myui5lib.Example",{renderer:l,metadata:{library:"com.myorg.myui5lib",properties:{text:{type:"string",group:"Data",defaultValue:null},color:{type:"com.myorg.myui5lib.ExampleColor",group:"Appearance",defaultValue:n.Default}},events:{press:{}}},constructor:function t(r,o){e.prototype.constructor.call(this,r,o);this.onclick=()=>{this.firePress()}}});return u});
},
	"com/myorg/myui5lib/ExampleRenderer.js":function(){
"use strict";sap.ui.define(["sap/ui/core/Core","./library"],function(e,i){const r=i["ExampleColor"];var t={apiVersion:2,render:function(i,t){const o=e.getLibraryResourceBundle("com.myorg.myui5lib");i.openStart("div",t);if(t.getColor()===r.Highlight){i.class("myLibPrefixExampleHighlight")}else{i.class("myLibPrefixExample")}i.openEnd();i.text(`${o.getText("ANY_TEXT")}: ${t.getText()}`);i.close("div")}};return t});
},
	"com/myorg/myui5lib/library.js":function(){
"use strict";sap.ui.define(["sap/base/util/ObjectPath"],function(e){sap.ui.getCore().initLibrary({name:"com.myorg.myui5lib",version:"${version}",dependencies:["sap.ui.core"],types:["com.myorg.myui5lib.ExampleColor"],interfaces:[],controls:["com.myorg.myui5lib.Example"],elements:[],noLibraryCSS:false});const i=e.get("com.myorg.myui5lib");var o=function(e){e["Default"]="Default";e["Highlight"]="Highlight";return e}(o||{});i.ExampleColor=o;return i});
},
	"com/myorg/myui5lib/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"com.myorg.myui5lib","type":"library","embeds":[],"applicationVersion":{"version":"1.0.0"},"title":"com.myorg.myui5lib","description":"Some description about com.myorg.myui5lib","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.115","libs":{"sap.ui.core":{"minVersion":"1.115.0"}}},"library":{"i18n":{"bundleUrl":"messagebundle.properties","supportedLocales":[""]},"content":{"controls":["com.myorg.myui5lib.Example"],"elements":[],"types":["com.myorg.myui5lib.ExampleColor"],"interfaces":[]}}}}'
});
//# sourceMappingURL=library-preload.js.map
