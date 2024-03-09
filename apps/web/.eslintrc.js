/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['jest.config.ts', '*.js'],
  extends: ['@cfg/eslint-config-base/next'],
};
