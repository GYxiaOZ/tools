import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import fs from 'fs';

import pkg from './package.json';

const filePath = 'src';
const inputFiles = [];
// 根据文件路径读取文件，返回文件列表
fs.readdirSync(filePath).forEach(filename => {
  if (filename.endsWith('.ts') || filename.endsWith('.js')) {
    inputFiles.push(`${filePath}/${filename}`);
  }
});

export default {
  // input: 'src/index.ts',
  input: inputFiles,
  output: [
    {
      dir: 'dist',
      // file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'es',
      // file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    // {
    //   // dir: 'esn',
    //   file: 'dist/index.umd.js',
    //   format: 'umd',
    //   name: 'GyxiaozTools',
    //   indent: false,
    //   sourcemap: true,
    //   plugins: [
    //     terser({
    //       compress: {
    //         pure_getters: true,
    //         unsafe: true,
    //         unsafe_comps: true,
    //         warnings: false,
    //       },
    //     }),
    //   ],
    // },
  ],
  plugins: [
    eslint(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
    filesize(),
  ],
};
