import { Manifest } from '@wap/core';
export declare class WebAssetPack {
    private _manifest;
    private _buffer;
    private _cache;
    constructor(manifest: Manifest, buffer: ArrayBuffer);
    get<T = any>(path: string): Promise<T>;
}
