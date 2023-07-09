/// <reference types="openui5" />
declare module "com/myorg/myui5lib/Example" {
    /*!
     * ${copyright}
     */
    import Control from "sap/ui/core/Control";
    import ExampleRenderer from "com/myorg/myui5lib/ExampleRenderer";
    import type { MetadataOptions } from "sap/ui/core/Element";
    /**
     * Constructor for a new <code>com.myorg.myui5lib.Example</code> control.
     *
     * Some class description goes here.
     * @extends Control
     *
     * @author OpenUI5 Team
     * @version ${version}
     *
     * @constructor
     * @public
     * @name com.myorg.myui5lib.Example
     */
    export default class Example extends Control {
        constructor(id?: string | $ExampleSettings);
        constructor(id?: string, settings?: $ExampleSettings);
        static readonly metadata: MetadataOptions;
        static renderer: typeof ExampleRenderer;
        onclick: () => void;
    }
}
//# sourceMappingURL=Example.d.ts.map