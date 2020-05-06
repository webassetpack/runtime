import { __awaiter, __generator } from "tslib";
import * as Pako from 'pako';
import { PluginManager } from './PluginManager';
var WebAssetPack = /** @class */ (function () {
    function WebAssetPack(manifest, buffer) {
        this._manifest = manifest;
        this._buffer = buffer;
        this._cache = {};
    }
    WebAssetPack.prototype._getData = function (path) {
        var mfItem = this._manifest[path];
        return Pako.inflateRaw(new Uint8Array(this._buffer.slice(mfItem.start, mfItem.end)));
    };
    WebAssetPack.prototype.get = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var extension, data, plugin, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._manifest[path]) {
                            throw new Error("File \"" + path + "\" not found");
                        }
                        if (this._cache[path]) {
                            return [2 /*return*/, this._cache[path]];
                        }
                        extension = path.slice(path.lastIndexOf('.') + 1);
                        data = this._getData(path);
                        plugin = PluginManager.getInstance().getPluginByExtension(extension);
                        if (!plugin) {
                            throw new Error("Cannot read \"" + extension + "\" file. You're likely missing a plugin.");
                        }
                        return [4 /*yield*/, plugin.read(data, this._manifest[path].type)];
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
export { WebAssetPack };
//# sourceMappingURL=WebAssetPack.js.map