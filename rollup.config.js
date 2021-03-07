import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

export default ["es", "umd"].map((format) => {
  const UMD = format === "umd";

  return {
    input: pkg.svelte,
    output: [
      {
        name: UMD ? pkg.name : undefined,
        file: UMD ? pkg.main : pkg.module,
        format,
        sourcemap: true
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
});
