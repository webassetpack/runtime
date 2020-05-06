"use strict";
exports.__esModule = true;
var RawPlugin_1 = require("./RawPlugin");
var PluginManager = /** @class */ (function () {
    function PluginManager() {
        this._plugins = {};
        this._defaultPlugin = new RawPlugin_1.RawPlugin();
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
        var plugin = null;
        if (!this._plugins[extension]) {
            console.warn("Plugin for extension \"" + extension + "\" was not found. Defaulting to RawPlugin.");
            console.warn("If this is intentional, use:\n\nPluginManager.getInstance().addPlugin(\"" + extension + "\"', new RawPlugin()); \n\nto hide this message.");
            plugin = this._defaultPlugin;
        }
        else {
            plugin = this._plugins[extension];
        }
        return plugin;
    };
    return PluginManager;
}());
exports.PluginManager = PluginManager;
//# sourceMappingURL=PluginManager.js.map