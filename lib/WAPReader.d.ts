import { WebAssetPack } from './WebAssetPack';
export declare class WAPReader {
    constructor();
    read(buffer: ArrayBuffer): Promise<WebAssetPack>;
}
