import { WebAssetPack } from './WebAssetPack';
import { WebAssetPackFactory } from './WebAssetPackFactory';
export declare class WAPReader {
    private _wapFactory;
    constructor(factory?: WebAssetPackFactory);
    read(buffer: ArrayBuffer): Promise<WebAssetPack>;
}
