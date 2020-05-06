
import {
    WAPPlugin
} from '@wap/core';

export class RawPlugin extends WAPPlugin {
    protected async _read(data: Uint8Array, type: string): Promise<Uint8Array> {
        return data;
    }
}
