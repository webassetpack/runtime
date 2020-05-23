
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
            }
        ],
        plugins: [
            resolve({
                preferBuiltins: true
            }),
            commonjs(),
            typescript()
        ]
    }
];
