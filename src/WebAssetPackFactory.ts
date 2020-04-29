import { Manifest } from '@wap/core';
import { WebAssetPack } from './WebAssetPack';

export class WebAssetPackFactory {
    public constructor() {}

    protected _create(manifest: Manifest, buffer: ArrayBuffer): WebAssetPack {
        return new WebAssetPack(manifest, buffer);
    }

    public create(manifest: Manifest, buffer: ArrayBuffer): WebAssetPack {
        return this._create(manifest, buffer);
    }
}
