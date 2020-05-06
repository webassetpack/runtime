import { WAPPlugin } from '@wap/core';
export declare class RawPlugin extends WAPPlugin {
    protected _read(data: Uint8Array, type: string): Promise<Uint8Array>;
}
