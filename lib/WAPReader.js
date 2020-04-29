"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var WebAssetPackFactory_1 = require("./WebAssetPackFactory");
var WAPReader = /** @class */ (function () {
    function WAPReader(factory) {
        if (factory === void 0) { factory = new WebAssetPackFactory_1.WebAssetPackFactory(); }
        this._wapFactory = factory;
    }
    WAPReader.prototype.read = function (buffer) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var view, manifestLength, manifestBuffer, manifestView, i, byte, byteOffset, manifestString, manifest;
            return tslib_1.__generator(this, function (_a) {
                view = new DataView(buffer);
                manifestLength = view.getUint16(core_1.BYTE_POS_MANIFEST_LENGTH, true);
                manifestBuffer = new ArrayBuffer(manifestLength);
                manifestView = new DataView(manifestBuffer);
                for (i = 0; i < manifestLength; i++) {
                    byte = view.getInt8(i + core_1.BYTE_HEADER_SIZE);
                    manifestView.setInt8(i, byte);
                }
                byteOffset = core_1.BYTE_HEADER_SIZE + manifestBuffer.byteLength;
                manifestString = String.fromCharCode.apply(null, new Int8Array(manifestBuffer));
                manifest = JSON.parse(manifestString);
                return [2 /*return*/, this._wapFactory.create(manifest, buffer.slice(byteOffset))];
            });
        });
    };
    return WAPReader;
}());
exports.WAPReader = WAPReader;
// let b: Buffer = FileSystem.readFileSync('./test.wap');
// let ab: ArrayBuffer = new ArrayBuffer(b.byteLength);
// let dv: DataView = new DataView(ab);
// b.forEach((byte: number, index: number) => {
//     dv.setInt8(index, byte);
// });
// import {PluginManager} from './PluginManager';
// import {WAPJSONPlugin} from './WAPJSONPlugin';
// PluginManager.getInstance().addPlugin('json', new WAPJSONPlugin());
// let reader: WAPReader = new WAPReader();
// reader.read(ab).then((wap: WebAssetPack) => {
//     return wap.get('/development/breautek/wap-cli/package.json');
// }).then((ret: any) => {
//     console.log(ret);
// });
//# sourceMappingURL=WAPReader.js.map