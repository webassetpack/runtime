import { __awaiter, __generator } from "tslib";
import { 
// BYTE_POS_VERSION_MAJOR,
// BYTE_POS_VERSION_MINOR,
// BYTE_POS_VERSION_PATCH,
BYTE_POS_MANIFEST_LENGTH, BYTE_HEADER_SIZE } from '@wap/core';
import { WebAssetPackFactory } from './WebAssetPackFactory';
var WAPReader = /** @class */ (function () {
    function WAPReader(factory) {
        if (factory === void 0) { factory = new WebAssetPackFactory(); }
        this._wapFactory = factory;
    }
    WAPReader.prototype.read = function (buffer) {
        return __awaiter(this, void 0, void 0, function () {
            var view, manifestLength, manifestBuffer, manifestView, i, byte, byteOffset, manifestString, manifest;
            return __generator(this, function (_a) {
                view = new DataView(buffer);
                manifestLength = view.getUint16(BYTE_POS_MANIFEST_LENGTH, false);
                manifestBuffer = new ArrayBuffer(manifestLength);
                manifestView = new DataView(manifestBuffer);
                for (i = 0; i < manifestLength; i++) {
                    byte = view.getInt8(i + BYTE_HEADER_SIZE);
                    manifestView.setInt8(i, byte);
                }
                byteOffset = BYTE_HEADER_SIZE + manifestBuffer.byteLength;
                manifestString = String.fromCharCode.apply(null, new Int8Array(manifestBuffer));
                manifest = JSON.parse(manifestString);
                return [2 /*return*/, this._wapFactory.create(manifest, buffer.slice(byteOffset))];
            });
        });
    };
    return WAPReader;
}());
export { WAPReader };
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