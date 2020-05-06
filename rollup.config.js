
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/api.ts',
        output: [
            {
                file: 'dist/cjs/wap-runtime.js',
                format: 'cjs'
            },
            {
                file: 'dist/iife/wap-runtime.js',
                format: 'iife',
                name: 'wap'
            },
            {
                file: 'dist/umd/wap-runtime.js',
                format: 'umd',
                name: 'wap-runtime'
            },
            {
                file: 'dist/amd/wap-runtime.js',
                format: 'amd'
            },
            {
                file: 'dist/es/wap-runtime.js',
                format: 'es'
            },
            {
                file: 'dist/system/wap-runtime.js',
                format: 'system'
            }
        ],
        plugins: [
            resolve({
                preferBuiltins: true
            }),
            commonjs({
                namedExports: {
                    'pako': ['inflateRaw']
                }
            }),
            typescript()
        ]
    }
];
