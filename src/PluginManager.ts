
import {IDictionary} from '@totalpave/interfaces';
import {WAPPlugin} from '@wap/core';
import {RawPlugin} from './RawPlugin';

export class PluginManager {
    private static _instance: PluginManager;
    private _plugins: IDictionary<any>;
    private _defaultPlugin: RawPlugin;

    private constructor() {
        this._plugins = {};
        this._defaultPlugin = new RawPlugin();
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
        let plugin: WAPPlugin = null;
        if (!this._plugins[extension]) {
            console.warn(`Plugin for extension "${extension}" was not found. Defaulting to RawPlugin.`);
            
            console.warn(
`If this is intentional, use:

PluginManager.getInstance().addPlugin("${extension}"', new RawPlugin()); 

to hide this message.`
            );

            plugin = this._defaultPlugin;
        }
        else {
            plugin = this._plugins[extension];
        }
        return plugin;
    }
}
