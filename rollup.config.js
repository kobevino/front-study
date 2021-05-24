import resolve from '@rollup/plugin-node-resolve'; // solve 'require is not defined issue'
import typescript from '@rollup/plugin-typescript'; // for typescript bundle

const isDev = process.env.NODE_ENV !== 'production';

const serveConfig = {
  open: true,
  contentBase: 'public',
  host: 'localhost',
  port: 5000
};

const tsConfig = {
  module: 'esnext' // Solve 'exports is not defined issue'
}

console.log(isDev)

export default (async () => ({
  input: 'src/main.ts',
  output: {
    dir: 'public',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    typescript(tsConfig),
    isDev && (await import('rollup-plugin-serve')).default(serveConfig),
    isDev && (await import('rollup-plugin-livereload')).default()
  ],
}));
