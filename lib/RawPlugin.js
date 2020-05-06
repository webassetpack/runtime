import { __awaiter, __extends, __generator } from "tslib";
import { WAPPlugin } from '@wap/core';
var RawPlugin = /** @class */ (function (_super) {
    __extends(RawPlugin, _super);
    function RawPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawPlugin.prototype._read = function (data, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, data];
            });
        });
    };
    return RawPlugin;
}(WAPPlugin));
export { RawPlugin };
//# sourceMappingURL=RawPlugin.js.map