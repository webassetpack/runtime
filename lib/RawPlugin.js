"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var RawPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(RawPlugin, _super);
    function RawPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawPlugin.prototype._read = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, data];
            });
        });
    };
    return RawPlugin;
}(core_1.WAPPlugin));
exports.RawPlugin = RawPlugin;
//# sourceMappingURL=RawPlugin.js.map