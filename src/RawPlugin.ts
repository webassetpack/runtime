
import {
    WAPPlugin
} from '@wap/core';

export class RawPlugin extends WAPPlugin {
    protected async _read(data: Uint8Array): Promise<Uint8Array> {
        return data;
    }
}
