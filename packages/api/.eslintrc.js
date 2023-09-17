module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2020
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'promise',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".ts", ".js"]
      }
    }
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'n/no-missing-import': 'off',
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'max-len': ['error', { code: 140, tabWidth: 2 }],
  },
};
