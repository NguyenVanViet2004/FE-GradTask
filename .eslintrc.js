module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-native/all'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: 'json'
  },
  plugins: [
    'react',
    'simple-import-sort',
    'sort-keys-fix',
    'eslint-plugin-no-jp'
  ],
  rules: {
    'react-native/no-raw-text': ['warn', { skip: ['Button', 'Paragraph'] }],
    'indent': ['error', 2, { "SwitchCase": 1 }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': ['error', 2],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'no-jp/no-jp-identifier': 2,
    'no-jp/no-jp-comment': 2,
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['warn', { ignorePattern: '^import\\s.+\\sfrom\\s.+', ignoreComments: true }]
  },
  ignorePatterns: [
    '.eslintrc.js',
    'tsconfig.json',
    'package.json',
    'app.json',
    'metro.config.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.js',
    '+html.tsx'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}