import { WebAssetPack } from './WebAssetPack';
var WebAssetPackFactory = /** @class */ (function () {
    function WebAssetPackFactory() {
    }
    WebAssetPackFactory.prototype._create = function (manifest, buffer) {
        return new WebAssetPack(manifest, buffer);
    };
    WebAssetPackFactory.prototype.create = function (manifest, buffer) {
        return this._create(manifest, buffer);
    };
    return WebAssetPackFactory;
}());
export { WebAssetPackFactory };
//# sourceMappingURL=WebAssetPackFactory.js.map