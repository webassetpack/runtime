
import * as Pako from 'pako';
import {
    Manifest,
    WAPPlugin,
    IManifestItem
} from '@wap/core';
import {PluginManager} from './PluginManager';
import { IDictionary } from '@totalpave/interfaces';

export class WebAssetPack {
    private _manifest: Manifest;
    private _buffer: ArrayBuffer;
    private _cache: IDictionary;

    public constructor(manifest: Manifest, buffer: ArrayBuffer) {
        this._manifest = manifest;
        this._buffer = buffer;
        this._cache = {};
    }

    protected _getData(path: string): Uint8Array {
        let mfItem: IManifestItem = this._manifest[path];

        if (!mfItem) {
            throw new Error(`File "${path}" not found`);
        }

        return Pako.inflateRaw(new Uint8Array(this._buffer.slice(mfItem.start, mfItem.end)))
    }

    public async get<T = any>(path: string): Promise<T> {
        if (this._cache[path]) {
            return this._cache[path];
        }
        
        let extension: string = path.slice(path.lastIndexOf('.') + 1);
        let data: Uint8Array = this._getData(path);

        let plugin: WAPPlugin<T> = PluginManager.getInstance().getPluginByExtension(extension);
        if (!plugin) {
            throw new Error(`Cannot read "${extension}" file. You're likely missing a plugin.`);
        }

        let ret: T = await plugin.read(data);
        this._cache[path] = ret;
        return ret;
    }
}
