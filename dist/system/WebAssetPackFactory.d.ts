import { Manifest } from '@wap/core';
import { WebAssetPack } from './WebAssetPack';
export declare class WebAssetPackFactory {
    constructor();
    protected _create(manifest: Manifest, buffer: ArrayBuffer): WebAssetPack;
    create(manifest: Manifest, buffer: ArrayBuffer): WebAssetPack;
}
