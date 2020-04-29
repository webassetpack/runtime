

import {WebAssetPack} from './WebAssetPack';
import {
    Manifest,
    // BYTE_POS_VERSION_MAJOR,
    // BYTE_POS_VERSION_MINOR,
    // BYTE_POS_VERSION_PATCH,
    BYTE_POS_MANIFEST_LENGTH,
    BYTE_HEADER_SIZE
} from '@wap/core';
import { WebAssetPackFactory } from './WebAssetPackFactory';

export class WAPReader {
    private _wapFactory: WebAssetPackFactory;

    public constructor(factory: WebAssetPackFactory = new WebAssetPackFactory()) {
        this._wapFactory = factory;
    }

    public async read(buffer: ArrayBuffer): Promise<WebAssetPack> {
        let view: DataView = new DataView(buffer);

        // let major: number = view.getUint16(BYTE_POS_VERSION_MAJOR, true);
        // let minor: number = view.getUint16(BYTE_POS_VERSION_MINOR, true);
        // let patch: number = view.getUint16(BYTE_POS_VERSION_PATCH, true);

        // console.info(`WAP Version: ${major}.${minor}.${patch}`);

        let manifestLength: number = view.getUint16(BYTE_POS_MANIFEST_LENGTH, false);
        let manifestBuffer: ArrayBuffer = new ArrayBuffer(manifestLength);
        let manifestView: DataView = new DataView(manifestBuffer);
        
        for (let i: number = 0; i < manifestLength; i++) {
            let byte: number = view.getInt8(i + BYTE_HEADER_SIZE);
            manifestView.setInt8(i, byte);
        }

        let byteOffset: number = BYTE_HEADER_SIZE + manifestBuffer.byteLength;

        let manifestString: string = String.fromCharCode.apply(null, new Int8Array(manifestBuffer));
        let manifest: Manifest = JSON.parse(manifestString);

        return this._wapFactory.create(manifest, buffer.slice(byteOffset));
    }
}


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
