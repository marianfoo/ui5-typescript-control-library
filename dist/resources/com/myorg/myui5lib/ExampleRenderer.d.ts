declare module "com/myorg/myui5lib/ExampleRenderer" {
    import RenderManager from "sap/ui/core/RenderManager";
    import Example from "com/myorg/myui5lib/Example";
    /**
     * Example renderer.
     * @namespace
     */
    const _default: {
        apiVersion: number;
        /**
         * Renders the HTML for the given control, using the provided {@link RenderManager}.
         *
         * @param rm The reference to the <code>sap.ui.core.RenderManager</code>
         * @param control The control instance to be rendered
         */
        render: (rm: RenderManager, control: Example) => void;
    };
    export default _default;
}
//# sourceMappingURL=ExampleRenderer.d.ts.map