
import {IDictionary} from '@totalpave/interfaces';
import {WAPPlugin} from '@wap/core';

export class PluginManager {
    private static _instance: PluginManager;
    private _plugins: IDictionary<any>;

    private constructor() {
        this._plugins = {};
    }

    public static getInstance(): PluginManager {
        if (!PluginManager._instance) {
            PluginManager._instance = new PluginManager();
        }

        return PluginManager._instance;
    }

    public addPlugin(extension: string, plugin: WAPPlugin): void {
        if (this._plugins[extension]) {
            console.warn(`Overridding ${this._plugins[extension].getName()} with ${plugin.getName()}`);
        }

        this._plugins[extension] = plugin;
    }

    public getPluginByExtension(extension: string): WAPPlugin {
        return this._plugins[extension] || null;
    }
}
