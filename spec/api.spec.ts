
import * as api from '../src/api';
import {PluginManager} from '../src/PluginManager';
import {RawPlugin} from '../src/RawPlugin';
import {WAPReader} from '../src/WAPReader';
import {WebAssetPack} from '../src/WebAssetPack';

describe('Public API', () => {
    it('PluginManager', () => {
        expect(api.PluginManager).toBe(PluginManager);
    });
    it('RawPlugin', () => {
        expect(api.RawPlugin).toBe(RawPlugin);
    });
    it('WAPReader', () => {
        expect(api.WAPReader).toBe(WAPReader);
    });
    it('WebAssetPack', () => {
        expect(api.WebAssetPack).toBe(WebAssetPack);
    });
});
