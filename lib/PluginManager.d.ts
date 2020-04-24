import { WAPPlugin } from '@wap/core';
export declare class PluginManager {
    private static _instance;
    private _plugins;
    private constructor();
    static getInstance(): PluginManager;
    addPlugin(extension: string, plugin: WAPPlugin): void;
    getPluginByExtension(extension: string): WAPPlugin;
}
