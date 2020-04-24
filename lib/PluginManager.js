"use strict";
exports.__esModule = true;
var PluginManager = /** @class */ (function () {
    function PluginManager() {
        this._plugins = {};
    }
    PluginManager.getInstance = function () {
        if (!PluginManager._instance) {
            PluginManager._instance = new PluginManager();
        }
        return PluginManager._instance;
    };
    PluginManager.prototype.addPlugin = function (extension, plugin) {
        if (this._plugins[extension]) {
            console.warn("Overridding " + this._plugins[extension].getName() + " with " + plugin.getName());
        }
        this._plugins[extension] = plugin;
    };
    PluginManager.prototype.getPluginByExtension = function (extension) {
        return this._plugins[extension] || null;
    };
    return PluginManager;
}());
exports.PluginManager = PluginManager;
//# sourceMappingURL=PluginManager.js.map