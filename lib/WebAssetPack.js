"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var Pako = require("pako");
var PluginManager_1 = require("./PluginManager");
var WebAssetPack = /** @class */ (function () {
    function WebAssetPack(manifest, buffer) {
        this._manifest = manifest;
        this._buffer = buffer;
        this._cache = {};
    }
    WebAssetPack.prototype.get = function (path) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var extension, mfItem, data, plugin, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._cache[path]) {
                            return [2 /*return*/, this._cache[path]];
                        }
                        extension = path.slice(path.lastIndexOf('.') + 1);
                        mfItem = this._manifest[path];
                        data = Pako.inflateRaw(new Uint8Array(this._buffer.slice(mfItem.start, mfItem.end)));
                        plugin = PluginManager_1.PluginManager.getInstance().getPluginByExtension(extension);
                        if (!plugin) {
                            throw new Error("Cannot read \"" + extension + "\" file. You're likely missing a plugin.");
                        }
                        return [4 /*yield*/, plugin.read(data)];
                    case 1:
                        ret = _a.sent();
                        this._cache[path] = ret;
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    return WebAssetPack;
}());
exports.WebAssetPack = WebAssetPack;
//# sourceMappingURL=WebAssetPack.js.map