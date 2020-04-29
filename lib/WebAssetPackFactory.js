"use strict";
exports.__esModule = true;
var WebAssetPack_1 = require("./WebAssetPack");
var WebAssetPackFactory = /** @class */ (function () {
    function WebAssetPackFactory() {
    }
    WebAssetPackFactory.prototype._create = function (manifest, buffer) {
        return new WebAssetPack_1.WebAssetPack(manifest, buffer);
    };
    WebAssetPackFactory.prototype.create = function (manifest, buffer) {
        return this._create(manifest, buffer);
    };
    return WebAssetPackFactory;
}());
exports.WebAssetPackFactory = WebAssetPackFactory;
//# sourceMappingURL=WebAssetPackFactory.js.map