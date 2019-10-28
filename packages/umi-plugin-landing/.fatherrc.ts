
export default [
  {
    cjs: 'babel',
  },
  {
    entry: 'ui/index.tsx',
    typescriptOpts: {
      check: false,
    },
    umd: {
      name: 'ui',
      minFile: false,
    },
  },
];
