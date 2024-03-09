/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: ['@cfg/eslint-config-base/lib'],
};
