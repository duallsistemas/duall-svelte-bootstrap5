import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const { name } = pkg;

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name
    },
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      name
    }
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: !production }),
      compilerOptions: {
        // generate: production ? 'dom' : 'ssr',
        hydratable: true,
        dev: !production
      }
    }),
    resolve(),
    commonjs(),
    typescript(),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
